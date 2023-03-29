const poems = document.querySelectorAll('.poem');

let o = 1;
for (poem of poems) {
    o -= .1;
    poem.opacity = o;
}