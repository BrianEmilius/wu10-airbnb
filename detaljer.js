const params = new URLSearchParams(document.location.search)
const id = params.get("id")
const container = document.querySelector(".destination")

console.log(id)

fetch("/data.json")
	.then(function(response) {
		if (response.status !== 200) {
			throw new Error("Serveren svarer ikke")
		}
		return response.json()
	})
	.then(function(data) {
		const result = data.destinations.find(item => item.id == id)
		const facilities = result.facilities.map(item => `<li>${item}</li>`)
		
		const isFav = localStorage.getItem(result.id)

		const floofenberg = `
		<h1>${result.title}</h1>
		<p>${result.subtitle}</p>
		<p>${result.text}</p>
		<img src="${result.image}" alt="${result.text}">
		<button onclick="favHandler(${result.id})"><i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
		<p>Facilities</p>
		<ul>
			${facilities.join("")}
		</ul>
		`
		document.querySelector("title").innerText = `${result.title} - AirBnB`
		container.innerHTML = floofenberg
	})
	.catch(function(error) {
		container.innerHTML = `
			<h1>404 - siden findes ikke, din torsk!</h1>
			<p><a href="/">Klik her</a> for at gå tilbage til forsiden</p>
		`
	})
