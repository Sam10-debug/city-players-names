const h1= document.querySelector("h1")
const first= document.querySelector("#first")
const second= document.querySelector("#second")
const third= document.querySelector("#third")
const btn= document.querySelector("button")
const input= document.querySelector("input")

const func=()=>{


async function getApi(){
	const res= await fetch(`https://city-names-api.herokuapp.com/api/${input.value}`)
	const data = await res.json()
	first.textContent= `Name: ${data.name}`
	second.textContent=`Age: ${data.age}`
	third.textContent=`Nationality: ${data.nationality}`
	// console.log(data)
}
getApi()
}
btn.addEventListener("click",func)
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
	// If the user presses the "Enter" key on the keyboard
	if (event.key === "Enter") {
	  // Cancel the default action, if needed
	  event.preventDefault();
	  // Trigger the button element with a click
	  btn.click();
	}
  });
// fetch("https://city-names-api.herokuapp.com/api")
// 	.then(res=>res.json())
// 	.then(data=>{
// 		console.log(data)
// 	})
// 	.catch(err=>{
// 		console.log(err)
// 	})