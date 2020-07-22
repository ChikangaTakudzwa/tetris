function createPiece(type) {
    if (type === 'I') {
        return [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ];
    }
    if (type === 'L') {
        return [
            [0, 2, 0],
            [0, 2, 0],
            [0, 2, 2],
        ];
    }
    if (type === 'J') {
        return [
            [0, 3, 0],
            [0, 3, 0],
            [3, 3, 0],
        ];
    }
    if (type === 'O') {
        return [
            [4, 4],
            [4, 4],
        ];
    }
    if (type === 'Z') {
        return [
            [5, 5, 0],
            [0, 5, 5],
            [0, 0, 0],
        ];
    }
    if (type === 'S') {
        return [
            [0, 6, 6],
            [6, 6, 0],
            [0, 0, 0],
        ];
    }
    if (type === 'T') {
        return [
            [0, 7, 0],
            [7, 7, 7],
            [0, 0, 0],
        ];
    }
}

function updateScore() {
    document.getElementById('score').innerText = tetris.player.score;
}

const tetri = [];

const playerElements = document.querySelectorAll('.player');
[...playerElements].forEach(element => {
    const canvas = element.querySelector('canvas');
    const tetris = new Tetris(canvas);
    tetri.push(tetris);
});

document.addEventListener('keydown', event => {


    [[37, 39, 81, 87, 40]].forEach((key, index) => {
        const  player  = tetri[index].player;
        if (event.keyCode ===key[0]) {
            player.move(-1);
        } else if (event.keyCode ===key[1]) {
            player.move(1);
        } else if (event.keyCode ===key[2]) {
            player.rotate(-1);
        } else if (event.keyCode ===key[3]) {
            player.rotate(1);
        } else if (event.keyCode ===key[4]) {
            player.drop();
        }
    });
});

updateScore();
