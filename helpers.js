function favHandler(event) {
	const id = event.target.dataset.id
	const i = event.target.querySelector("i")

	if (i.classList.contains("fa-regular")) {
		i.classList.remove("fa-regular")
		i.classList.add("fa-solid")
	} else {
		i.classList.add("fa-regular")
		i.classList.remove("fa-solid")
	}

	const isFav = localStorage.getItem(id)
	if (isFav) {
		localStorage.removeItem(id)
	} else {
		localStorage.setItem(id, "true")
	}
}

const buttons = document.querySelectorAll("button")

buttons.forEach(button => button.addEventListener("click", favHandler))