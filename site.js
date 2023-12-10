function mOpen(id,how) {
	document.getElementById(id).style.display=how;
}
function mClose(id) {
	document.getElementById(id).style.display="none";
}
function pagePerso(n){
    document.getElementsByClassName('pagePerso')[n].style.display="flex";
}

function pagePersoClose(){
    let b = document.getElementsByClassName('pagePerso');
    b[0].style.display="none";
    b[1].style.display="none";
    b[2].style.display="none";
    b[3].style.display="none";
    b[4].style.display="none";
    b[5].style.display="none";
    b[6].style.display="none";
}


function getRandomInt(max) {
  return Math.random() * max;
}

function distImg(){
let a = document.getElementsByClassName('colImg');
    if (a && window.innerWidth>700) {
        a[0].style.left = "10%";
        a[1].style.left = "0%";
        a[2].style.left = "20%";
        a[3].style.left = "30%";
        a[4].style.left = "50%";
        a[5].style.left = "65%";
        a[6].style.left = "80%";

        a[0].style.top = "60%";
        a[1].style.top = "100%";
        a[2].style.top = "90%";
        a[3].style.top = "50%";
        a[4].style.top = "70%";
        a[5].style.top = "70%";
        a[6].style.top = "70%";

        a[0].style.transform = "translateZ(-.1px) scale(.6)";
        a[1].style.transform = "translateZ(-.1px) scale(.6)";
        a[2].style.transform = "translateZ(-.1px) scale(.6)";
        a[3].style.transform = "translateZ(-.1px) scale(.6)";
        a[4].style.transform = "translateZ(-.1px) scale(.6)";
        a[5].style.transform = "translateZ(-.1px) scale(.6)";
        a[6].style.transform = "translateZ(-.1px) scale(.6)";

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
    //distImg();
});

const scroller = document.querySelector("#cont");
var logo =document.getElementById("logo");


scroller.addEventListener("scroll", (event) => {
    console.log(scroller.scrollTop);
    if(logo){
        if(scroller.scrollTop>=600){
            logo.style.opacity = 1;
        }
        else{
            logo.style.opacity = 0;
        }
    }
    if(scroller.scrollTop>=800){
        document.getElementById("imgOne").style.opacity = 1-scroller.scrollTop*.001;
        document.getElementById("imgTwo").style.opacity = scroller.scrollTop*.001;
    }
    else{
        document.getElementById("imgOne").style.opacity = 1;
        document.getElementById("imgTwo").style.opacity = 0;
    }
});
