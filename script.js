async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedlist(data.message)

}

start()

function createBreedlist(breedlist) {
   document.getElementById("breed").innerHTML = `
   <select onchange="loadBybreed(this.value)">
        <option> Choose a dog breed </option>
        ${Object.keys(breedlist).map(function (breed){
          return `<option> ${breed}</option>`

        }).join('')}
        </select>
   
   `


}

async function loadBybreed(breed) {
    if (breed != "Choose a dog breed"){
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = response.json()
    }


}