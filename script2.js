let category='cars';

function clicker(headingText) {

    let heading = document.querySelector('#imageList > h2');
    heading.innerText = headingText + " Images";


category= headingText;
fetcher();


}

async function fetcher()
{

       document.querySelector("#ImageContainer").innerHTML ="";
       //use pound for id
       //use dot for class

    const resp = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=JOQgM0TMJds9pP7vgOP7qHTkcNsURDUYbLaVkJieSQI&query=${category}`) ;
    const ids = await resp.json();
    console.log(ids);    

for(let i=0;i<10;i++){

   const inserter =   
    `<img  src="${ids.results[i].urls.regular}" ></img>` +
    `<p class="name">${ids.results[i].user.name}</p> `+
    `<p class="instagram_username">${ids.results[i].user.instagram_username}</p>` ; 

    console.log(inserter)
    document.querySelector("#ImageContainer").insertAdjacentHTML("beforeend",inserter);
      }
 
}

clicker('Dev');

