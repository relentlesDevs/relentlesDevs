const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})



function clickOne() {
    var name = document.getElementById("h1Form").value;
    var mass = Number(document.getElementById("h2Form").value);
    var time = Number(document.getElementById("h3Form").value);
    var hl = Number(document.getElementById("h4Form").value);

    /* k = ln(2)/hl */
    var k = (Math.log(2) / Math.log(2.71828)) / hl;
    /* massLeft = (mass)(Math.exp((-k)(time))) */


    if (isNaN(time) || isNaN(mass) || isNaN(hl) || hl == 0) {
        alert("RECHECK YOUR VALUES")
    } else {
        var v1l = mass * Math.exp((-k) * (time * 1 / 5));
        var v2l = mass * Math.exp((-k) * (time * 2 / 5));
        var v3l = mass * Math.exp((-k) * (time * 3 / 5));
        var v4l = mass * Math.exp((-k) * (time * 4 / 5));
        var v5l = mass * Math.exp((-k) * (time * 5 / 5));
        alert("DONE : SCROLL DOWN")

        document.getElementById("b1").innerHTML = v1l;
        document.getElementById("b2").innerHTML = v2l;
        document.getElementById("b3").innerHTML = v3l;
        document.getElementById("b4").innerHTML = v4l;
        document.getElementById("b5").innerHTML = v5l;

        document.getElementById("a1").innerHTML = time * 1 / 5;
        document.getElementById("a2").innerHTML = time * 2 / 5;
        document.getElementById("a3").innerHTML = time * 3 / 5;
        document.getElementById("a4").innerHTML = time * 4 / 5;
        document.getElementById("a5").innerHTML = time * 5 / 5;
    }

}




//chat data points
const chartValues = [{ value: 25 }, { value: 60 }, { value: 45 }, { value: 50 }, { value: 40 }]

function formatLineChartData(values, chartHeight) {
    const widgetSize = chartHeight;
    const pointSize = 16;

    const base = (widgetSize - pointSize / 2) / values.length;

    let sortedValues = sortValues([...values]);

    const topMostPoint = sortedValues[0].value;
    let leftOffset = pointSize; //padding for left axis labels
    let nextPoint = 0;
    let rise = 0;
    let cssValues = [];

    for (var i = 0, len = values.length - 1; i < len; i++) {

        var currentValue = {
            left: 0,
            bottom: 0,
            hypotenuse: 0,
            angle: 0,
            value: 0
        };

        currentValue.value = values[i].value;
        currentValue.left = leftOffset;
        leftOffset += base;

        currentValue.bottom = (widgetSize - pointSize) * (currentValue.value / topMostPoint);
        nextPoint = (widgetSize - pointSize) * (values[i + 1].value / topMostPoint);

        rise = currentValue.bottom - nextPoint;
        currentValue.hypotenuse = Math.sqrt((base * base) + (rise * rise));
        currentValue.angle = radiansToDegrees(Math.asin(rise / currentValue.hypotenuse));

        cssValues.push(currentValue);
    }

    var lastPoint = {
        left: leftOffset,
        bottom: (widgetSize - pointSize) * (values[values.length - 1].value / topMostPoint),
        hypotenuse: 0,
        angle: 0,
        value: values[values.length - 1].value
    };

    cssValues.push(lastPoint);

    return cssValues;
}

const sortValues = values => values.sort((a, b) => b.value - a.value)

const radiansToDegrees = (rads) => rads * (180 / Math.PI)

const sum = (total, value) => total + value.value


function render(data, container) {
    data.forEach((item) => {
        let markup = createListItem(item);
        let listItem = document.createElement("li");
        listItem.style.cssText = `--x: ${item.left}px; --y: ${item.bottom}px`;
        listItem.innerHTML = markup;
        container.appendChild(listItem);
    });
}

function createListItem(item) {
    return `
    <div class="data-point" data-value="${item.value}"></div>
    <div class="line-segment" style="--hypotenuse: ${item.hypotenuse}; --angle:${item.angle};"></div>
    `;
}

render(formatLineChartData(chartValues, 200), document.getElementById('line-chart'))


Resources