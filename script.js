function Slider(slider){
    if(!slider){
        throw new Error('Slider element Should be passed!')
    }

    const slide = slider.querySelectorAll('.slide')
    const prevButton = slider.querySelector('.prev')
    const nextButton = slider.querySelector('.next')

     function showNextSlide(){
        let nextSlide
        slide.forEach((item) =>{
            if(item.matches('.slide-active')){
              item.classList.remove('slide-active')
              nextSlide = item.nextElementSibling
            } 
        })
        console.log(nextSlide)
        if(nextSlide === null){
            nextSlide = slide[0]
        }
        nextSlide.classList.add('slide-active')
    }
    
    function showPrevSlide(){
        let prevSlide
        slide.forEach((item) =>{
            if(item.matches('.slide-active')){
              item.classList.remove('slide-active')
              prevSlide = item.previousElementSibling
            }
        })
        if(prevSlide === null){
            prevSlide = slide[slide.length - 1]
            
        }
        prevSlide.classList.add('slide-active')
    }
 
    prevButton.addEventListener('click' , showPrevSlide)
    nextButton.addEventListener('click' , showNextSlide)
}

const slider = Slider(document.querySelector('.slider'))
