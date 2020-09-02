let winWidth = document.documentElement.clientWidth

//Check nesting and create subArrows
function createSubArrow () {
	let subArrow = document.createElement("span")
	subArrow.innerHTML = "^"
	subArrow.className = "sub_arrow"
	return subArrow
}

function checkChildren (selector) {
	let nodes = document.querySelectorAll(selector)
	for (let elem of nodes) {
		if (elem.children.length > 1) {
			elem.children[0].after(createSubArrow())
		}
	}
}

checkChildren(".item")
checkChildren(".cat_menu")


//Display submenus
// if (winWidth >= 769) {
// 	let items = document.querySelectorAll(".item")
// 	for (let elem of items) {
// 		elem.addEventListener("mouseenter", menuShow, false)
// 		elem.addEventListener("mouseleave", menuHide, false)
// 	}
// } else if (winWidth <= 768) {
// 	let items = document.querySelectorAll(".sub_arrow")
// 	for (let elem of items) {
// 		elem.addEventListener("click", toggleSubMenu, false)
// 	}
// }


let items = document.querySelectorAll(".item")
for (let elem of items) {
	if (winWidth >= 769) {
		elem.addEventListener("mouseenter", menuShow, false)
		elem.addEventListener("mouseleave", menuHide, false)
	} else if (winWidth <= 768) {
		let items = document.querySelectorAll(".sub_arrow")
		for (let elem of items) {
			elem.addEventListener("click", toggleSubMenu, false)
		}
	}
}

function toggleSubMenu () {
	switch (this.parentElement.className) {
		case "item":
			this.parentElement.lastElementChild.classList.toggle("show")
			this.classList.toggle("rotate")
			break
		case "cat_menu":
			this.parentElement.lastElementChild.classList.toggle("show")
			this.classList.toggle("rotate")
			break
	}
}

function menuShow () {
	let menuWrapper = this.querySelector(".sub_menu_wrapper")
	if (menuWrapper) {
		menuWrapper.style.opacity = "1"
		menuWrapper.style.height = "auto"
		menuWrapper.style.overflow = "visible"
		document.querySelector(".content_wrapper").classList.toggle("hide_content")
	}
}

function menuHide () {
	let menuWrapper = this.querySelector(".sub_menu_wrapper")
	if (menuWrapper) {
		menuWrapper.style.opacity = "0"
		menuWrapper.style.height = "0"
		menuWrapper.style.overflow = "hidden"
		document.querySelector(".content_wrapper").classList.toggle("hide_content")
	}
}


//Toggle for menu when width < 769px
let toggleIcon = document.querySelector("i")

toggleIcon.onclick = menuToggle

function menuToggle () {
	if (toggleIcon.classList.contains("fas") & toggleIcon.classList.contains("fa-bars")) {
		document.querySelector(".menu").style.display = "flex"
		toggleIcon.classList.remove("fas", "fa-bars")
		toggleIcon.classList.add("far", "fa-times-circle")
		document.querySelector(".content_wrapper").classList.toggle("hide_content")
	} else if (toggleIcon.classList.contains("far") & toggleIcon.classList.contains("fa-times-circle")) {
		document.querySelector(".menu").style.display = "none"
		toggleIcon.classList.add("fas", "fa-bars")
		toggleIcon.classList.remove("far", "fa-times-circle")
		document.querySelector(".content_wrapper").classList.toggle("hide_content")
	}
}

// window.addEventListener("resize", function () {
// 	if (winWidth >= 769) {
// 		document.querySelector(".menu").style.display = "flex"
// 	} else if (winWidth <= 768) {
// 		document.querySelector(".menu").style.display = "none"
// 	}
// })
