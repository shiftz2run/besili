function mOpen(id,how) {
	document.getElementById(id).style.display=how;
}
function mClose(id) {
	document.getElementById(id).style.display="none";
}

function getRandomInt(max) {
  return Math.random() * max;
}

function distImg(){
let a = document.getElementsByClassName('colImg');
    if (a && window.innerWidth>700) {
        a[0].style.left = "-26.8333px";
        a[1].style.left = "-213.417px";
        a[2].style.left = "-453.667px";
        a[3].style.left = "693.917px";
        a[4].style.left = " 934.167px";
        a[5].style.left = "1174.42px";
        a[6].style.left = "0px";

        a[0].style.top = "-900.69px";
        a[1].style.top = "-700px";
        a[2].style.top = "-46.272px";
        a[3].style.top = "-171.199px";
        a[4].style.top = " -700px";
        a[5].style.top = "-416.786px";
        a[6].style.top = "-300.199px";

        a[0].style.transform = "translateZ(-1.1px) scale(.9)";
        a[1].style.transform = "translateZ(-0.4px) scale(.7)";
        a[2].style.transform = "translateZ(-1px) scale(.9)";
        a[3].style.transform = "translateZ(-0.1px) scale(.55)";
        a[4].style.transform = "translateZ(-1.2px) scale(1)";
        a[5].style.transform = "translateZ(-0.4px) scale(.8)";
        a[6].style.transform = "translateZ(-0.7px) scale(.8)";

		/*
		
		var containerWidth = document.getElementById('membres').clientWidth;
        var containerHeight = document.getElementById('membres').clientHeight;
        var totalImages = a.length;
        var spacing = containerWidth / (totalImages + 1)+50;

        var imageWidth = 100;
		var minDistance = 10;


        Array.from(a).forEach(function (element, index) {
            element.style.top = -getRandomInt(index-containerHeight)-1300 + "px";
            //element.style.left = spacing * (index-1) + "px";
            element.style.left = calculateLeftPosition(index, spacing, imageWidth, totalImages, minDistance)-containerWidth/3 + "px";
            element.style.transform = "translateZ(" + getRandomInt(-1.5) + "px) scale(" + .8 + ")";

            let n = element.style.transform;
            // Add mouseover event listener
            element.addEventListener("mouseover", function () {
                this.style.border = "6px solid red"; // Highlight on mouseover
                this.style.transform = "translateZ(-.1px) scale(.85)";
            });

            // Add mouseout event listener to remove the highlight
            element.addEventListener("mouseout", function () {
                this.style.border = "none"; // Remove highlight on mouseout
                this.style.transform = n;
            });
        });
        */

    }
}

function calculateLeftPosition(index, spacing, imageWidth, totalImages, minDistance) {
	let a = document.getElementsByClassName('colImg');
    // Calculate the left position dynamically to avoid overlapping
    var position = spacing * (index + 1);
    for (var i = 0; i < index; i++) {
        var prevPosition = parseFloat(a[i].style.left);
        var prevWidth = imageWidth; // You may need to get the actual width of the image dynamically
        var distance = position - (prevPosition + prevWidth);

        if (distance < minDistance) {
            position += minDistance - distance;
        }
    }

    return position;
}


document.addEventListener('DOMContentLoaded', function() {
    distImg();
});

        