document.querySelector("#add").addEventListener('click', function(e){
    document.querySelector("#submission").style.display = 'block';
})

document.querySelector('#submission').addEventListener('submit', function(e){
    e.preventDefault();
    document.querySelector('#first').querySelector('p').innerText = e.target.poem.value;
})