//  export default afficherFilms;


const plusInfo = document.querySelector("#plus-info");
const img = document.querySelector(".image");


export async function afficherFilms() {
    const reponse = await fetch("https://ghibliapi.vercel.app/films/");
    const films = await reponse.json();


    for (let elts of films) {



         const post =
            `
        <li class="image"> 
        <img src="${elts.image}"width="250px"height="300px"> 

        <p id="title">${elts.title}</p> 

        <p id="director">${elts.director}</p> 

         <p id ="release-date">${elts.release_date} </p>

        <button id="plus-info">Plus d'info</button> 
        
        <a href="./plusInfos.html">
        <button id="plus-info">Plus d'info</button>
        </a>

</a>


        </li>
         `




        img.innerHTML += post;
    }

}

afficherFilms();
