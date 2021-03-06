console.log(1,  attempt([240, 360, 720],        [360, 720],             [1080]),        'expected', [360])
console.log(2,  attempt([240, 720],             [360, 720],             [1080]),        'expected', [720])
console.log(3,  attempt([240],                  [360, 720],             [1080]),        'expected', [])
console.log(4,  attempt([240, 360, 720],        [240, 360, 720, 1080],  [240, 360]),    'expected', [240, 360])
console.log(5,  attempt([240, 720],             [240, 360, 720, 1080],  [240, 360]),    'expected', [240, 720])
console.log(6,  attempt([240, 720],             [240, 360, 1080],       [240, 360]),    'expected', [240])
console.log(7,  attempt([720],                  [240, 360, 1080],       [240, 360]),    'expected', [])
console.log(8,  attempt([240, 360],             [240, 360],             [720, 1080]),   'expected', [360])
console.log(10, attempt([240, 360, 720],        [360, 'any'],           [360, 720]),    'expected', [360, 720])
console.log(11, attempt([240, 360, 720],        [240, 360, 720],        ['any', 720]),  'expected', [240, 360, 720])
console.log(12, attempt([240, 360, 720],        [360, 1080],            ['any', 720]),  'expected', [360])
console.log(13, attempt([240, 360, 720],        [1080],                 ['any', 720]),  'expected', [])
