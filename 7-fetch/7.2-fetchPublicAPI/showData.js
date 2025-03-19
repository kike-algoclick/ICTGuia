import getData from "./API/getData.js";
async function showData() {
  const pokemon = await getData();
  let div = document.getElementById('content'); 

  pokemon.forEach((element) => {
    let p = document.createElement('p');
    p.innerHTML = element.name
    div.appendChild(p)

  });
}

export default showData;
