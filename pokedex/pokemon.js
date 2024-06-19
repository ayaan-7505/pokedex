async function fetchdata()
{
    const name=document.getElementById("name").value
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data=await response.json()
    console.log(data)
    const image=document.getElementById("image")
    image.src=data.sprites.front_default
}