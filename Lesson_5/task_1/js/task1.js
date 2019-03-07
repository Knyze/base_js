var cellColors = ['white', 'black'];

function createBoard() {
    var $board = document.getElementsByClassName('board')[0];
    $board.style.width = '440px';
    $board.style.backgroundColor = 'beige';
    $board.style.margin = '50px auto';
    $board.style.border = '1px solid #555';
    $board.style.paddingTop = '20px';

    for (var j = 8; j > 0; j--) {
        createStreak($board, j);
    }
    
    createBottomTitle($board);
}

function createStreak($board, numberRow) {
    var $streak = document.createElement('div');
    $board.appendChild($streak);
    $streak.style.height = '50px';
    $streak.style.display = 'flex';

    var $title = document.createElement('div');
    $streak.appendChild($title);
    $title.style.width = '20px';
    $title.style.lineHeight = '50px';
    $title.style.textAlign = 'center';
    $title.textContent = numberRow;

    for (var i = 0; i < 8; i++) {
        createCell($streak, cellColors[(i + numberRow) % 2]);
    }
}

function createCell($streak, colorCell) {
    var $cell = document.createElement('div');
    $streak.appendChild($cell);
    $cell.style.width = '50px';
    $cell.style.backgroundColor = colorCell;
}

function createBottomTitle($board) {
    var $streak = document.createElement('div');
    $board.appendChild($streak);
    $streak.style.height = '20px';
    $streak.style.display = 'flex';
    $streak.style.paddingLeft = '20px';

    var chessLetters = 'ABCDEFGH';
    for (var i = 0; i < 8; i++) {
        var $title = document.createElement('div');
        $streak.appendChild($title);
        $title.style.width = '50px';
        $title.style.lineHeight = '20px';
        $title.style.textAlign = 'center';
        $title.textContent = chessLetters[i];
    }
}
