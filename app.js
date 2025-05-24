let size = 0;
let canStart = false;
let isQueensOneFilled = false;

let queensOne;
let queensTwo;

function generateBoard() {
    const n = document.getElementById("sizeInput").value;
    size = n;
    if (n > 3 && n < 11) {
        const board = document.getElementById("board");
        board.innerHTML = "";
        for (let i = 0; i < n; i++) {
            let row = board.insertRow();
            for (let j = 0; j < n; j++) {
                let cell = row.insertCell();
                cell.style.backgroundColor = (i + j) % 2 === 0 ? "#eeeed2" : "#769656";
                cell.onclick = () => cell.classList.toggle("selected");
            }
        }

        document.getElementById("input-container").style.display = "none";
        document.getElementById("options-container").style.display = "none";
        document.getElementById("select-container").style.display = "flex";
        document.getElementById("para").innerHTML = "حالت ابتدایی را مشخص کنید.";
        document.getElementById("btn-start").innerHTML = "ادامه";

    } else {
        alert("اندازه جدول باید بین 4 تا 10 باشد");
    }
}


function startClicked() {
    if (canStart === true) {

        console.log(queensOne);
        console.log(queensTwo);

    } else if (isQueensOneFilled === false) {
        if (checkQueens()) {
            queensOne = Array.from({ length: size }, () => Array(size).fill(0));
            fillArray(queensOne);

            isQueensOneFilled = true;
            generateBoard();
            document.getElementById("para").innerHTML = "حالت هدف را مشخص کنید.";

        } else {
            alert("تعداد وزیر ها برابر با تعداد ردیف ها نیست.");
        }
    } else {
        if (checkQueens()) {
            queensTwo = Array.from({ length: size }, () => Array(size).fill(0));
            fillArray(queensTwo);

            canStart = true;
            document.getElementById("para").innerHTML = "الگوریتم را انتخاب کنید";
            document.getElementById("options-container").style.display = "flex";
            document.getElementById("select-container").style.display = "flex";
            document.getElementById("btn-start").innerHTML = "شروع";

        } else {
            alert("تعداد وزیر ها برابر با تعداد ردیف ها نیست.");
        }

    }
}

function checkQueens() {
    let count = 0;
    const board = document.getElementById("board");
    for (let i = 0; i < board.rows.length; i++) {
        for (let j = 0; j < board.rows[i].cells.length; j++) {
            if (getCellBackgroundImage(board.rows[i].cells[j]) !== "none") {
                count++;
            }
        }
    }
    return count == size;
}

function getCellBackgroundImage(cell) {
    let bgImage = window.getComputedStyle(cell).backgroundImage;
    return bgImage;
}

function fillArray(array) {
    const board = document.getElementById("board");
    for (let i = 0; i < board.rows.length; i++) {
        for (let j = 0; j < board.rows[i].cells.length; j++) {
            if (getCellBackgroundImage(board.rows[i].cells[j]) !== "none") {
                array[i][j] = 1;
            } else {
                array[i][j] = 0;
            }
        }
    }
}