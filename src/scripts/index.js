const inputElement = document.getElementById('user-input');
const logoElement = document.getElementsByClassName('user-logo')[0];
const nameElement = document.querySelector('.user-info h1');
const usernameElement = document.querySelector('.user-info h3');
const projectsElement = document.querySelector('.project-box h1');
const locationElement = document.querySelector('.location-box h1');
const followersElement = document.querySelector('.followers-box h1');


const getContent = async (usuario) => {
   try {
     const response = await fetch(`http://localhost:4567/?user=${usuario}`);
     const data = await response.json();

     renderContent(data);

   } catch (error) {
        console.error(`${error}`);
   } 
};

const renderContent = (data) => {
     const { avatar_url, name, login, public_repos, location, followers } = data;

     logoElement.setAttribute('src', `${avatar_url}`);
     nameElement.innerHTML = `${name}`;
     usernameElement.innerHTML = `/${login}`;
     projectsElement.innerHTML = `${public_repos}`;
     locationElement.innerHTML = `${location}`;
     followersElement.innerHTML = `${followers}`;
};