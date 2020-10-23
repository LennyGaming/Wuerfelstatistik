window.onload = function start() {
  document.getElementById("1").innerHTML = 'Einser: ';
  document.getElementById("2").innerHTML = 'Zweier: ';
  document.getElementById("3").innerHTML = 'Dreier: ';
  document.getElementById("4").innerHTML = 'Vierer: ';
  document.getElementById("5").innerHTML = 'Fünfer: ';
  document.getElementById("6").innerHTML = 'Sechser: ';
}
var turbo = 0.5;
function noloading() {
  var checkBox = document.getElementById("instant");
  var nomore = document.getElementById("myProgress");
  if (checkBox.checked == true) {
    nomore.style.display = "none";
    turbo = 100;
  }
  else{
    nomore.style.display = "block";
    turbo = 0.5;
  }
}
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var e = document.getElementById("num").value;
    var checkBox = document.getElementById("seed");
    if (checkBox.checked == true) {
      speed = 1;
    }
    else {
      speed = e / 1000;
    }
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, speed);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width += turbo;
        elem.style.width = width + "%";
        elem.innerHTML = `Loading...${width}%`;
      }
      if (width >= 100) {
        let eins = 0;
        let zwei = 0;
        let drei = 0;
        let vier = 0;
        let fuenf = 0;
        let sechs = 0;
        var e = document.getElementById("num").value;
        for (let i = 0; i < e; i++) {
          let wuerfel = Math.floor(Math.random() * 6) + 1;
          switch (wuerfel) {
            case 1:
              eins++;
              break;

            case 2:
              zwei++;
              break;

            case 3:
              drei++;
              break;

            case 4:
              vier++;
              break;

            case 5:
              fuenf++;
              break;

            case 6:
              sechs++;
              break;
            default:
              break;
          }
        }
        document.getElementById("1").innerHTML = 'Einser: ' + eins;
        document.getElementById("2").innerHTML = 'Zweier: ' + zwei;
        document.getElementById("3").innerHTML = 'Dreier: ' + drei;
        document.getElementById("4").innerHTML = 'Vierer: ' + vier;
        document.getElementById("5").innerHTML = 'Fünfer: ' + fuenf;
        document.getElementById("6").innerHTML = 'Sechser: ' + sechs;
        document.getElementById("myBar").innerHTML = 'Done!';
      }
    }
  }
}


/* function wurf(){
let eins = 0;
let zwei = 0;
let drei = 0;
let vier= 0;
let fuenf = 0;
let sechs = 0;
var e = document.getElementById("num").value;
for(let i = 0; i < e; i++){
    let wuerfel = Math.floor(Math.random() * 6) + 1;
    switch(wuerfel){
        case 1:
            eins++;
            break;

        case 2:
            zwei++;
            break;

        case 3:
            drei++;
            break;

        case 4:
            vier++;
            break;

        case 5:
            fuenf++;
            break;

        case 6:
            sechs++;
            break;
        default:
            break;
    }
}
document.getElementById("1").innerHTML = 'Einser: ' + eins;
document.getElementById("2").innerHTML = 'Zweier: ' + zwei;
document.getElementById("3").innerHTML = 'Dreier: ' + drei;
document.getElementById("4").innerHTML = 'Vierer: ' + vier;
document.getElementById("5").innerHTML = 'Fünfer: ' + fuenf;
document.getElementById("6").innerHTML = 'Sechser: ' + sechs;
} */

// document.write('Einser: ' + eins);
// document.write('Zweier: ' + zwei);
// document.write('Dreier: ' + drei);
// document.write('Vierer: ' + vier);
// document.write('Fünfer: ' + fuenf);
// document.write('Sechser: ' + sechs);
// console.log('Eins: ' + eins);
// console.log('Zwei: ' + zwei);
// console.log('Drei: ' + drei);
// console.log('Vier: ' + vier);
// console.log('Fünf: ' + fuenf);
// console.log('Sechs: ' + sechs);
// function reload(){
//     location.reload();
// }