const btn = document.querySelector(".btn")
const dropdown = document.querySelector(".dropdown")
const toggle = () => {
 dropdown.classList.toggle('active')   
}
btn.addEventListener("click", () => {
    toggle()
})