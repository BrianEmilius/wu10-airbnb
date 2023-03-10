const destinationsContainer = document.querySelector(".destinations")
const destinationsWrapper = document.createElement("div")

fetch("data.json")
	.then(function(response) {
		if (response.status !== 200) {
			throw new Error("Serveren svarer ikke")
		}
		return response.json()
	})
	.then(function(data) {
		data.destinations.forEach(function(destination) {
			const isFav = localStorage.getItem(destination.id)
			
			const article = `<article>
				<h1><a href="detaljer.html?id=${destination.id}">${destination.title}</a></h1>
				<p>${destination.destination}</p>
				<p>${destination.subtitle}</p>
				<button data-id="${destination.id}"><i class="${isFav ? "fa-solid" : "fa-regular"} fa-heart"></i></button>
			</article>`

			destinationsWrapper.innerHTML += article
		})
	})
	.finally(() => destinationsContainer.appendChild(destinationsWrapper))
