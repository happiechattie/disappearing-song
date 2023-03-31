document.querySelector("#add").addEventListener('click', function(e){
    document.querySelector("#submission").style.display = 'block';
})

document.querySelector('#submission').addEventListener('submit', function(e){
    e.preventDefault();
    let poemCollection = document.querySelectorAll('.poem');
    console.log(poemCollection);
    for (i = 12; i > 1; i--){
        document.querySelector(`.poem:nth-child(${i})`).querySelector('p').innerText = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('p').innerText;
    //    document.querySelector(`.poem:nth-child(${i})`).querySelector('p').innerText = document.querySelector(`.poem:nth-child(${i})`).querySelector('p').innerText
    }
    poemCollection[0].querySelector('p').innerText = e.target.poem.value;
    /*
    let poems = poemCollection.map(poem => {
        return poem.innerText;
    })
    poems.unshift(e.target.poem.value);
    poems.pop();
    document.querySelector('#first').querySelector('p').innerText = poems[0];
    document.querySelector('#second').querySelector('p').innerText = poems[1];
    document.querySelector('#third').querySelector('p').innerText = poems[2];
    document.querySelector('#fourth').querySelector('p').innerText = poems[3];
    document.querySelector('#fifth').querySelector('p').innerText = poems[4];
    document.querySelector('#sixth').querySelector('p').innerText = poems[5];
    document.querySelector('#seventh').querySelector('p').innerText = poems[6];
    document.querySelector('#eighth').querySelector('p').innerText = poems[7];
    document.querySelector('#ninth').querySelector('p').innerText = poems[8];
    document.querySelector('#tenth').querySelector('p').innerText = poems[9];
    document.querySelector('#eleventh').querySelector('p').innerText = poems[10];
    document.querySelector('#twelfth').querySelector('p').innerText = poems[11];
    */
})