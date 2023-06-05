
const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'y', 'v', 'w','x', 'y', 'z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
];
var matrixContainer = document.getElementById("matrix_container");
var matrix = document.querySelectorAll(".matrix");


function callMatrix() {
    matrix.forEach(e => {        
        function addMatrixLetters(l) {
            for(let i = 0; i < 45; i++) {
                const letters = document.createElement('div');
                letters.innerHTML = "a";
                setInterval(() => {
                    l.appendChild(letters);
                }, 300);
                function changeLetters() {
                    const x = `${Math.floor(Math.random() * characters.length)}`;
                    letters.innerHTML = characters[x];
                }
                
                setInterval(changeLetters, 100);
            }
        }
        addMatrixLetters(e);
    });
}
callMatrix();
