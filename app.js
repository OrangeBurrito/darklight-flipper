const flipToggle = document.getElementById('flip-toggle')
const darkLightToggle = document.getElementById('dark-light-toggle')
console.log(flipToggle)

flipToggle.addEventListener('click', evt => {
    evt.preventDefault()
    document.body.classList.toggle('flip')
})

darkLightToggle.addEventListener('click',  evt => {
    evt.preventDefault()
    document.body.classList.toggle('dark')
})