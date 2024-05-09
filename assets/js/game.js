let currObwTile;
let currObjTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setObw, 1000);
    setInterval(setObl, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setObw() {
    if (gameOver) {
        return;
    }
    if (currObwTile) {
        currObwTile.innerHTML = "";
    }
    let obw = document.createElement("img");
    obw.src = "assets/img/wangwang.png";

    let num = getRandomTile();
    if (currObjTile && currObjTile.id == num) {
        return;
    }
    currObwTile = document.getElementById(num);
    currObwTile.appendChild(obw);
}

function setObl() {
    if (gameOver) {
        return;
    }
    if (currObjTile) {
        currObjTile.innerHTML = "";
    }
    let obl = document.createElement("img");
    obl.src = "assets/img/wangwangdark.png";

    let num = getRandomTile();
    if (currObwTile && currObwTile.id == num) {
        return;
    }
    currObjTile = document.getElementById(num);
    currObjTile.appendChild(obl);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currObwTile) {
        score += 1;
        document.getElementById("score").innerText = "水神守護你" + score.toString() + "次";
    }
    else if (this == currObjTile) {
        document.getElementById("score").innerText = "我不小心了QAQ，我只使用水神" + score.toString() + "次";
        gameOver = true;
    }
}