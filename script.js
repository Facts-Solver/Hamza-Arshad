window.onscroll = () => {
	let navbar = document.querySelector("nav")
		navbar.classList.toggle("scroll",window.scrollY > 185)
}