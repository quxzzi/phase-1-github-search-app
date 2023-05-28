var form = document.getElementById('github-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var search = document.getElementById('search').value;
    var originalName = search.split(" ").join("");

    document.getElementById('github-container').innerHTML = "";
    fetch("https://api.github.com/users/"+originalName)
    .then((results) => results.json())
    .then((data) => {
        console.log(data);
        document.getElementById('github-container').innerHTML = `
           <a target ="_blank" href="https://wwww.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
        `
    });
});
