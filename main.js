document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    
    try {
        fetch('https://api.github.com/users/BrunoSx1')
        .then(function(res) {
        return res.json();
        })
            .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = "@" + json.login;
            avatarElement.setAttribute('src', json.avatar_url);
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.setAttribute('href', json.html_url);
            linkElement.innerText = 'Ver no Github';
        });
    } catch (error) {
        console.error('Erro ao tentar obter dados do Github:', error);
        }
});