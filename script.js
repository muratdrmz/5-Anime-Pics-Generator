const btnEl=document.getElementById('btn');
const animeContainerEl=document.querySelector('.anime-container');
const animeImgEl=document.querySelector('.anime-img');
const animeNameEl=document.querySelector('.anime-name');

const apiURL = "https://api.catboys.com/img";



async function getAnime(){
 
 try {
  animeImgEl.src = "./spinner.svg";
  btnEl.disabled=true;
  btnEl.innerText='Loading...';
  animeNameEl.innerText='Updating...';
  
  const response=await fetch(apiURL);
  const data= await response.json();

  btnEl.disabled = false;
  btnEl.innerText = "Get more Anime";    
  animeContainerEl.style.display = "block";


  animeImgEl.src = data.url;
  animeNameEl.innerText=data.artist;
  
 } catch (error) {
  btnEl.disabled=false;
  btnEl.innerText='Error!'
  btnEl.style.backgroundColor='red'
  animeImgEl.style.display = "none";
  animeNameEl.innerText=`Following error happened ${error}. Please try again later!`;
  animeNameEl.style.backgroundColor='red'

 }
}


btnEl.addEventListener('click',getAnime)