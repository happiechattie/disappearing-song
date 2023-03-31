document.querySelector("#add").addEventListener('click', function(e){
    document.querySelector("#submission").style.display = 'block';
})

document.querySelector('#submission').addEventListener('submit', function(e){
    e.preventDefault();
    let poemCollection = Array.from(document.querySelectorAll('.poem'));
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
})