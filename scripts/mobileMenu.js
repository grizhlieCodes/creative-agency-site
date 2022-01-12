const mobileMenuBtn = document.querySelector('button.header__mobile-menu-button')

const removeActiveClass = (e) => {
    if (e.key !== 'Escape') return
    toggleBtnActive()
    window.removeEventListener('keydown', removeActiveClass)
}

const handleEscListener = (isActive) => {
    if (!isActive) {
        window.addEventListener('keydown', removeActiveClass)
    } else {
        window.removeEventListener('keydown', removeActiveClass)
    }
};

const toggleBtnActive = () => mobileMenuBtn.classList.toggle('active');

const handleButtonClick = () => {
    const isActive = mobileMenuBtn.classList.contains('active')
    toggleBtnActive()
    handleEscListener(isActive)
}

window.addEventListener('DOMContentLoaded', () => {
    mobileMenuBtn.addEventListener('click', handleButtonClick)
})