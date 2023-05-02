document.addEventListener('DOMContentLoaded', function(e){
    let showForm = false;
    let poems = [];

    function renderPoems(){
        fetch("http://localhost:3000/poems/")
        .then(r => r.json())
        .then(data => {
            data.slice().reverse().forEach(poem => renderPoem(poem));
        });
    }

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

    document.querySelector('#submission').addEventListener('submit', function(e){
        e.preventDefault();
        const signed = e.target.signature.value;
        const image = e.target.imglink.value;
        const poemtxt = e.target.poem.value;
        postPoem(makePoem(signed, image, poemtxt));
        deleteFirstPoem();
        
        // fetch("http://localhost:3000/poems/")
        // .then(r => r.json())
        // .then(data => {
        //     console.log(data);
        // });

    //     //posts text, pushes previous text
    //     let poemCollection = document.querySelectorAll('.poem');
    //     for (i = 12; i > 1; i--){
    //         document.querySelector(`.poem:nth-child(${i})`).querySelector('.poemtxt').innerText = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('.poemtxt').innerText;
    //     }
    //     poemCollection[0].querySelector('.poemtxt').innerText = e.target.poem.value;

    //     //posts image, pushes previous images
    //     for (i = 12; i > 1; i--){
    //         document.querySelector(`.poem:nth-child(${i})`).querySelector('img').src = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('img').src;
    //     }
    //     poemCollection[0].querySelector('img').src = e.target.imglink.value;

    //     for (i = 12; i > 1; i--){
    //         document.querySelector(`.poem:nth-child(${i})`).querySelector('.signed').innerText = document.querySelector(`.poem:nth-child(${i - 1})`).querySelector('.signed').innerText;
    //     }
    //     poemCollection[0].querySelector('.signed').innerText = e.target.signature.value;

        e.target.reset();

        document.querySelector(".poems").innerText = '';

        renderPoems();
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
    }

    function makePoem(signed, imagelink, poemtext) {
        const poem = {
            signature: signed,
            image: imagelink,
            poemtxt: poemtext
        }
        return poem;
    }

    function postPoem (poem) {
        //add poem to db.json
        fetch("http://localhost:3000/poems", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(poem)
        })
        .then(r => r.json())
        .then (function(obj) {
            console.log(obj);
        })

        //delete first poem on db.json
        // fetch("http://localhost:3000/poems/")
        // .then(r => r.json())
        // .then(data => {
        //     fetch('http://localhost:3000/poems/' + data[0].id, {
        //         method: 'DELETE'
        //     })
        //     .then( r => r.json())
        //     .then(data => console.log(data));
        // });
    }

    function deleteFirstPoem(){
        fetch("http://localhost:3000/poems/")
        .then(r => r.json())
        .then(data => {
            fetch('http://localhost:3000/poems/' + data[0].id, {
                method: 'DELETE'
            })
            .then( r => r.json())
            .then(data => console.log(data));
        });
    }
})