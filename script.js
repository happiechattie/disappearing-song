let poems = []
function renderPoems(){
    document.querySelector(".poems").innerText = '';
    fetch("http://localhost:3000/poems/")
    .then(r => r.json())
    .then(data => {
        poems=data.reverse()
        poems.forEach(poem => {
            renderPoem(poem);
        });
        fade();
    });
}

function fade(){
    const poemCollection = document.querySelector(".poems").childNodes;
    let o = 1;
    for (poem of poemCollection){
        poem.style.opacity = o;
        o -= (1/12);
    }
}

function postPoem (poem) {
    
    fetch("http://localhost:3000/poems", {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           "Accept": "application/json"
       },
       body: JSON.stringify(poem)
    })
    .then(r =>  r.json())
    .then (newPoem => {
        poemToDelete = poems.slice(-1)
        poems.pop()
        deleteFirstPoem(poemToDelete[0].id)
        poems.unshift(newPoem)
        renderPoems()
    })
    .catch(err => {
        console.error(err);
    });
}

document.addEventListener('DOMContentLoaded', function(e){
    let showForm = false;
    let poems = [];

    renderPoems();

    document.querySelector("#add").addEventListener('click', function(e){
        if (showForm) {
            document.querySelector("#submission").style.display = 'none';
        }
        else{
            document.querySelector("#submission").style.display = 'block';
        }
        showForm = !showForm;
    })

    document.querySelector('#submission').addEventListener('submit', (e)=> {
        e.preventDefault();

        const signed = e.target.signature.value;
        const image = e.target.imglink.value;
        const poemtxt = e.target.poem.value;

        postPoem(makePoem(signed, image, poemtxt));
        //renderPoems();

       e.target.reset();
    })
})

function renderPoem(poem){
    const d = document.createElement('div');
    d.className = 'poem';
    const s = document.createElement('p');
    s.className = 'signed';
    s.innerText = poem.signature;
    const p = document.createElement('p');
    p.className = 'poemtxt';
    p.innerText = poem.poemtxt;
    const i = document.createElement('img');
    i.className = 'image';
    i.src = poem.image;
    d.append(s, i, p);
    document.querySelector(".poems").append(d);
    let show = false;
    d.addEventListener('mouseenter', e => {
        d.style.opacity = 1;
        d.addEventListener('mouseleave', e => {
            const poemCollection = document.querySelector(".poems").childNodes;
            const index = Array.from(poemCollection).indexOf(d);
            d.style.opacity = 1 - (parseInt(index))/12;
        })
    })
}

function makePoem(signed, imagelink, poemtext) {
    const poem = {
        signature: signed,
        image: imagelink,
        poemtxt: poemtext
    }
    return poem;
}


function deleteFirstPoem(id){  
    
    fetch(`http://localhost:3000/poems/${id}`, {
            method: 'DELETE'
        })
        
}