const accordionBtn = document.querySelectorAll('.accordion-btn')

accordionBtn.forEach( btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active')
        const des = this.nextElementSibling
        const minusIcon = this.querySelector('.minus-icon')
        const plusIcon = this.querySelector('.plus-icon')
        if(des.style.maxHeight){
            des.style.maxHeight = null
            plusIcon.style.display = 'block'
            minusIcon.style.display = 'none'
        } else {
            des.style.maxHeight = des.scrollHeight + 'px'
            plusIcon.style.display = 'none'
            minusIcon.style.display = 'block'
        }
    })
})