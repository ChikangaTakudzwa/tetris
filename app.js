const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

// Tetraminoes

const matrix = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
];

function collide(arena,player) {
  const [m, o] = [player.matrix, player.pos]
  for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 && arena[y + 0.y] && arena[y+ 0.y] ) {
        
      }
    }
  }
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
        matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function draw() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                arena[y + player.pos.y][x + player.pos.x]= value;
            }
        });
    });
}

function playerDrop() {
    player.pos.y++;
    dropCounter = 0;
}

let dropCounter = 0;
const dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltatime = time - lastTime;
    lastTime = time;

    dropCounter += deltatime;
    if (dropCounter > dropInterval) {
        player.pos.y++;

        dropCounter = 0;
    }

    draw();
    requestAnimationFrame(update);
}

const arena = createMatrix(12, 20);

const player = {
    pos: { x: 5, y: 5 },
    matrix,
};

document.addEventListener('keydown', event => {
    // pomle.github.io/keycode
    if (event.keyCode === 37) {
        player.pos.x--;
    } else if (event.keyCode === 39) {
        Player.pos.x++;
    } else if (event.keyCode === 40) {
        playerDrop();
    }
});

update();
