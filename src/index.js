const SCENE = {
	FRUSTUM: 75,
	WIDTH: window.innerWidth,
	HEIGHT: window.innerHeight,
	NEAR: 0.01,
	FAR: 100
};

const FLOOR = {
	SIZE: 30
};

const CONFIG = {
    displayDirectionsIndicator: false,
    camera: {
        autoRotate: true
    },
    colors: {
        baseColor: {
            r: 70  / 255,
            g: 183 / 255,
            b: 55  / 255
        },
        topColor: {
            r: 199 / 255,
            g: 40  / 255,
            b: 0   / 255
        }
    },
    map: {
        maxHeight: 6
    }
};

CONFIG.colors.ratio = {
    r: (CONFIG.colors.topColor.r - CONFIG.colors.baseColor.r),
    g: (CONFIG.colors.topColor.g - CONFIG.colors.baseColor.g),
    b: (CONFIG.colors.topColor.b - CONFIG.colors.baseColor.b)
};

let renderer, camera, scene, controls;
let floor = {
    vertices:   [],
    colors:     [],
    elements:   []
};

function init() {
	function initWebGL() {
		renderer = new THREE.WebGLRenderer();
		camera = new THREE.PerspectiveCamera(SCENE.FRUSTUM,
											 SCENE.WIDTH / SCENE.HEIGHT,
											 SCENE.NEAR,
											 SCENE.FAR);

		scene = new THREE.Scene();

		camera.position.set(16, 10, 16);
		camera.lookAt(new THREE.Vector3(0, 0, 0));

        controls = new THREE.OrbitControls(camera);
        controls.autoRotate = CONFIG.camera.autoRotate;
        controls.addEventListener("change", render);

		scene.add(camera);

		renderer.setSize(SCENE.WIDTH, SCENE.HEIGHT);
		renderer.shadowMap.enabled = true;
		renderer.shadowMap.type = THREE.PCFShadowMap;

		document.body.appendChild(renderer.domElement);
	}

	function initIndicator() {
	    if (!CONFIG.displayDirectionsIndicator) return;

		const geometryY = new THREE.Geometry();
        const materialY = new THREE.LineBasicMaterial( { color: 0xff0000 } );
        const verticesY = [
			new THREE.Vector3(0, 1, 0),
			new THREE.Vector3(0, 0, 0)
		];
        geometryY.vertices = verticesY;

        const geometryX = new THREE.Geometry();
        const materialX = new THREE.LineBasicMaterial( { color: 0x00ff00 } );
        const verticesX = [
            new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(0, 0, 0)
        ];
        geometryX.vertices = verticesX;

        const geometryZ = new THREE.Geometry();
        const materialZ = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        const verticesZ = [
            new THREE.Vector3(0, 0, 1),
            new THREE.Vector3(0, 0, 0)
        ];
        geometryZ.vertices = verticesZ;

        scene.add(new THREE.Line(geometryY, materialY));
        scene.add(new THREE.Line(geometryX, materialX));
        scene.add(new THREE.Line(geometryZ, materialZ));
	}

    function getColor(height) {
        const heightRatio = height / CONFIG.map.maxHeight;

        if (heightRatio >= 1) {
            return CONFIG.colors.topColor;
        }

        if (heightRatio <= 0) {
            return CONFIG.colors.baseColor;
        }

        return {
            r: CONFIG.colors.baseColor.r + (heightRatio * CONFIG.colors.ratio.r),
            g: CONFIG.colors.baseColor.g + (heightRatio * CONFIG.colors.ratio.g),
            b: CONFIG.colors.baseColor.b + (heightRatio * CONFIG.colors.ratio.b)
        };
    }

	function initLandscape() {
        const geometry = new THREE.PlaneGeometry(20, 20, FLOOR.SIZE - 1, FLOOR.SIZE - 1);
        const material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.VertexColors,
            wireframe: true
        });

        for (let i = 0; i < geometry.vertices.length; i++) {
            geometry.vertices[i].z = HEIGHT_MAP[i];
        }

        for (let i = 0; i < geometry.faces.length; i++) {
            geometry.faces[i].vertexColors = [
                getColor(geometry.vertices[geometry.faces[i].a].z),
                getColor(geometry.vertices[geometry.faces[i].b].z),
                getColor(geometry.vertices[geometry.faces[i].c].z)
            ]
        }

        floor = new THREE.Mesh(geometry, material);

        floor.rotation.x = -Math.PI / 2;

        scene.add(floor);
    }

	initWebGL();
	initIndicator();
	initLandscape();
}

function render() {
    renderer.render(scene, camera);
}

function animate() {
    controls.update();

	requestAnimationFrame(animate);
	render();
}

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
render();
animate();

window.addEventListener("resize", onWindowResize);
