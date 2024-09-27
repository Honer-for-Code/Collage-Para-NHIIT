const togglebtn = document.querySelector('.navigation-dropedown')
const togglebtnicon = document.querySelector('.navigation-dropedown i')
const dropdownManu = document.querySelector('.ul')
    
        togglebtn.onclick = function () {
        dropdownManu.classList.toggle ('open')
            const isopen = dropdownManu.classList.contains('open')
    
            togglebtnicon.classList = isopen
                ? 'bx bx-x'
                : 'bx bx-menu'
        }