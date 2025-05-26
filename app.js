import { GeneticAlgorithm } from './GeneticAlgorithm.js';
import { BacktrackingAlgorithm } from './BacktrackingAlgorithm.js';

let size = 0;
let canStart = false;
let isQueensOneFilled = false;

let queensOne;
let queensTwo;

document.getElementById("btn-make").addEventListener("click", () => generateBoard("1"));
document.getElementById("btn-start").addEventListener("click", () => startClicked());


function generateBoard(id) {
    const n = document.getElementById("sizeInput").value;
    size = n;
    if (n > 3 && n < 11) {
        const board = document.getElementById("board" + id);
        board.innerHTML = "";
        for (let i = 0; i < n; i++) {
            let row = board.insertRow();
            for (let j = 0; j < n; j++) {
                let cell = row.insertCell();
                cell.style.backgroundColor = (i + j) % 2 === 0 ? "#eeeed2" : "#769656";
                cell.onclick = () => { if (canStart === false) { cell.classList.toggle("selected"); } }
            }
        }

        changeUI();

    } else {
        alert("اندازه جدول باید بین 4 تا 10 باشد");
    }
}


function startClicked() {
    if (canStart === true) {
        if (document.getElementById("radio-gen").checked) {

            /* Genetic Algorithm */

            const geneticSolver = new GeneticAlgorithm(100, size, queensOne, queensTwo);
            let solution = geneticSolver.runGenerations();
            showResult(geneticSolver.getSequence());
        } else if (document.getElementById("radio-back").checked) {

            /* Backtracking Algorithm */
            const backSolver = new BacktrackingAlgorithm(size, queensOne, queensTwo);
            backSolver.solve();
            showResult(backSolver.getSequence());
        }

    } else if (isQueensOneFilled === false) {
        if (checkQueens("1")) {
            queensOne = Array.from({ length: size }, () => Array(size).fill(0));
            fillArray(queensOne, "1");

            isQueensOneFilled = true;
            document.getElementById("board1").style.pointerEvents = "none";
            generateBoard("2");
        }
    } else {
        if (checkQueens("2")) {
            queensTwo = Array.from({ length: size }, () => Array(size).fill(0));
            fillArray(queensTwo, "2");

            canStart = true;
            document.getElementById("board2").style.pointerEvents = "none";
            changeUI();

        }

    }
}

function checkQueens(id) {
    let count = 0;
    const board = document.getElementById("board" + id);
    for (let i = 0; i < board.rows.length; i++) {
        for (let j = 0; j < board.rows[i].cells.length; j++) {
            if (getCellBackgroundImage(board.rows[i].cells[j]) !== "none") {
                count++;
            }
        }
    }

    if (count == size) {
        return true;
    } else {
        alert("تعداد وزیر ها برابر با تعداد ردیف ها نیست.");
    }

    return false;
}

function getCellBackgroundImage(cell) {
    let bgImage = window.getComputedStyle(cell).backgroundImage;
    return bgImage;
}

function fillArray(array, id) {
    const board = document.getElementById("board" + id);
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

function showResult(array) {
    let result = "";
    let seqCount = 0;
    for (let i = 0; i < array.length; i++) {
        result += "\nSequence: " + ++seqCount + "\n";
        for (let j = 0; j < array[i].length; j++) {
            result += array[i][j] + "\n";
        }
    }
    document.getElementById("result").innerText = result;

}

function changeUI() {
    if (canStart === false) {
        if (isQueensOneFilled === false) {
            document.getElementById("input-container").style.display = "none";
            document.getElementById("options-container").style.display = "none";
            document.getElementById("select-container").style.display = "flex";
            document.getElementById("para").innerHTML = "حالت ابتدایی را مشخص کنید.";
            document.getElementById("btn-start").innerHTML = "ادامه";
        } else {
            document.getElementById("para").innerHTML = "حالت هدف را مشخص کنید.";
        }
    } else {
        document.getElementById("para").innerHTML = "الگوریتم را انتخاب کنید";
        document.getElementById("options-container").style.display = "flex";
        document.getElementById("select-container").style.display = "flex";
        document.getElementById("btn-start").innerHTML = "شروع";
    }
}