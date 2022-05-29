const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})

CalcClicked = () => {
    var name = document.getElementById("h1Form").value;
    var time = Number(document.getElementById("h2Form").value);
    var hl = Number(document.getElementById("h3Form").value);

    if (isNaN(time) || isNaN(hl) || hl == 0) {
        alert("Recheck your input values");
    } else {
        var rate = Math.log(2) / hl;
        alert("Rate Decomposition Constant of :" + name + " is :" + rate);
    }

}