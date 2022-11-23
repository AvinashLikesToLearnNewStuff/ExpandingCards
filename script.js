// bringing in all the panels in our js file
const panels = document.querySelectorAll('.panel')
// console.log(panels)

panels.forEach((panel) => {
    panel.addEventListener('click',() => {
        removeActiveClasses()
    panel.classList.add('active')
})
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}