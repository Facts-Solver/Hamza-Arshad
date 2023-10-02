window.onscroll = () => {
	let navbar = document.querySelector("nav")
		navbar.classList.toggle("scroll",window.scrollY > 185)
}
const observer = new IntersectionObserver((entry)=>{
	entry.forEach((entry)=>{
		if(entry.isIntersecting){
			entry.target.classList.remove("hide")
			entry.target.classList.add("show")
		}
		else{
			entry.target.classList.add("hide")
			entry.target.classList.remove("show")
		}
	})
})
let hidden = document.querySelectorAll(".hide")
hidden.forEach((entry)=>{
	observer.observe(entry)
})
