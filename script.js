const shareDiv1 = document.getElementById('share-div-1');
const shareDiv2 = document.getElementById('share-div-2');
const svgColor1 = document.getElementById('svg-color-1');

const socials = document.getElementById('socials');


const showSocials = () => {
    socials.classList.toggle('hidden');
    shareDiv1.classList.toggle('inverted-dark');
    svgColor1.classList.toggle('inverted-light');
};


shareDiv1.addEventListener('click', showSocials);
shareDiv2.addEventListener('click', showSocials);