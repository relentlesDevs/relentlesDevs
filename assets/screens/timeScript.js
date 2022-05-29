const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

CalcClicked = () => {
    var name = document.getElementById("h1Form").value;
    var mass = Number(document.getElementById("h2Form").value);
    var finMass = Number(document.getElementById("h3Form").value)
    var hl = Number(document.getElementById("h4Form").value);

    /* k = ln(2)/hl */
    var k = (Math.log(2) / Math.log(2.71828)) / hl
        /* time = (ln(finMass/mass))/(-k)*/

    if (mass == 0 || isNaN(mass) || finMass > mass) {
        alert("RECHECK YOUR VALUES");
    } else {

        partMass = (mass - finMass) / 5;

        var v1l = ((Math.log((mass - partMass * 1) / (mass))) / Math.log(2.71828)) / (-k);
        var v2l = ((Math.log((mass - partMass * 2) / (mass))) / Math.log(2.71828)) / (-k);
        var v3l = ((Math.log((mass - partMass * 3) / (mass))) / Math.log(2.71828)) / (-k);
        var v4l = ((Math.log((mass - partMass * 4) / (mass))) / Math.log(2.71828)) / (-k);
        var v5l = ((Math.log((mass - partMass * 5) / (mass))) / Math.log(2.71828)) / (-k);


        document.getElementById("b1").innerHTML = v1l;
        document.getElementById("b2").innerHTML = v2l;
        document.getElementById("b3").innerHTML = v3l;
        document.getElementById("b4").innerHTML = v4l;
        document.getElementById("b5").innerHTML = v5l;

        document.getElementById("a1").innerHTML = mass - partMass * 1;
        document.getElementById("a2").innerHTML = mass - partMass * 2;
        document.getElementById("a3").innerHTML = mass - partMass * 3;
        document.getElementById("a4").innerHTML = mass - partMass * 4;
        document.getElementById("a5").innerHTML = mass - partMass * 5;

        alert("DONE : SCROLLDOWN")
    }

}