// radius used by link circle
var r;
var elements;
var positions = [];

// called on load
function setupLinkPositions() {
    elements = document.getElementsByClassName("radial");

    updateLinkPositions();
    console.log("radius " + r)

}

// position all links equidistant about a circle
function updateLinkPositions() {
    r = Math.max(window.innerWidth / 7, 80);
    deltatheta = 360 / elements.length;

    console.log(r);
    
    for (var i = 0; i < elements.length; i++){
        var l = elements[i];
        var theta = (deltatheta*i - 90);
        l.style.transform = `translate(${Math.cos(theta * Math.PI/180) * r}px, ${Math.sin(theta * Math.PI/180) * r}px)`;
    }
}

// update pupil to look at mouse
addEventListener("mousemove", (e) => {

    var x = (e.clientX / window.innerWidth - 0.5) * window.innerWidth / 30;
    var y = (e.clientY / window.innerHeight - 0.5) * window.innerHeight / 40;

    pupil.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;

    console.log(pupil.style.transform)

});