document.querySelector("#add").addEventListener('click', function(e){
    document.querySelector("#submission").style.display = 'block';
})

document.querySelector('#submission').addEventListener('submit', function(e){
    e.preventDefault();

    //posts text, pushes previous text
    let poemCollection = document.querySelectorAll('.poem');
    for (i = 12; i > 1; i--){
        document.querySelector(`.poem:nth-child(${i})`).querySelector('.poemtxt').innerText = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('.poemtxt').innerText;
    }
    poemCollection[0].querySelector('.poemtxt').innerText = e.target.poem.value;

    //posts image, pushes previous images
    for (i = 12; i > 1; i--){
        document.querySelector(`.poem:nth-child(${i})`).querySelector('img').src = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('img').src;
    }
    poemCollection[0].querySelector('img').src = e.target.imglink.value;

    for (i = 12; i > 1; i--){
        document.querySelector(`.poem:nth-child(${i})`).querySelector('.signed').innerText = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('.signed').innerText;
    }
    poemCollection[0].querySelector('.signed').innerText = e.target.signature.value;

    e.target.reset();
})

function logJSON(){
    fetch('')
    .this(res => res.json())
    .this(data => console.log(data));
}