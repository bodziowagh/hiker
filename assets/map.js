const HEIGHT_MAP = new Float32Array([
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 1.0, 0.7, 0.3, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 1.5, 1.0, 0.5, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.1, 0.5, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 0.0, 0.0, 0.5, 1.0, 0.9, 0.1, 0.3, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.7, 1.0, 1.5, 1.7, 1.2, 0.5, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.3, 2.3, 2.0, 2.0, 1.8, 0.7, 0.5, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.8, 3.0, 3.0, 3.0, 2.5, 1.2, 0.4, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.1, 0.4, 0.2, 0.3, 1.0, 2.0, 4.0, 4.0, 4.0, 3.0, 2.0, 1.0, 0.6, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.5, 1.0, 0.9, 1.2, 2.0, 5.2, 5.3, 5.5, 5.0, 4.0, 2.0, 1.0, 0.2, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.4, 1.0, 1.5, 2.0, 3.0, 4.0, 5.4, 6.3, 6.1, 5.0, 4.0, 3.0, 1.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.3, 0.6, 1.0, 2.0, 3.0, 4.5, 5.0, 6.2, 6.0, 5.0, 4.0, 3.0, 2.0, 1.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.1, 0.0, 0.2, 1.0, 2.0, 3.0, 4.0, 5.0, 5.0, 5.0, 5.0, 4.0, 3.0, 2.0, 1.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 0.7, 2.3, 3.8, 4.0, 4.2, 4.5, 4.0, 3.0, 2.0, 1.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 3.0, 3.0, 3.0, 3.9, 3.0, 2.0, 1.0, 0.7, 0.3, 0.2, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.8, 2.0, 2.0, 1.0, 3.0, 2.0, 1.0, 1.0, 0.2, 0.6, 0.6, 0.1, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 1.5, 1.0, 0.4, 2.4, 2.0, 1.0, 0.0, 0.0, 0.5, 1.0, 0.5, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 1.0, 0.3, 0.1, 1.3, 1.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.2, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.5, 0.6, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0
]);