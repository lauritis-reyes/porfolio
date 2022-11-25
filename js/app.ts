

window.addEventListener ( 'load', ( ) =>{

    // 🗒 SELECTORS

    const menuMainPage = ( document.querySelector('.menu__main-page') as HTMLDivElement)
    const introImage = (document.querySelector ('.intro__image') as HTMLDivElement)

    const mouse = (document.querySelector ('.mouse') as HTMLDivElement)
    const social = (document.querySelector ('.social') as HTMLDivElement)
    const links = document.querySelectorAll <HTMLLinkElement> ('a')
    const buttons = document.querySelectorAll <HTMLButtonElement> ('button')
    const start = document.querySelectorAll <HTMLLIElement> ('.start')

    // 🗒 MOUSE MOVEMENT

    let cursorX = 0
    let cursorY = 0
        


    let mouseMovement = ()=>{
        mouse.style.transform = `translateX(${cursorX}px) translateY(${cursorY}px)` 
    }


    window.addEventListener ( 'mousemove', ( { clientX, clientY } ) => {
        cursorX = clientX
        cursorY = clientY
        mouseMovement()
    })

    // 🗒 MOUSE OVER LINKS

    links.forEach ( eachLink => {
        eachLink.addEventListener ('mouseover', ()=> {
            mouse.classList.add('scale')
        })
        eachLink.addEventListener ('mouseout', ()=> {
            mouse.classList.remove('scale')
        })
    })

    buttons.forEach ( eachLink => {
        eachLink.addEventListener ('mouseover', ()=> {
            mouse.classList.add('scale')
        })
        eachLink.addEventListener ('mouseout', ()=> {
            mouse.classList.remove('scale')
        })
    })


    // 🗒 ANIMATIONS WHEN SCROLLING

    window.addEventListener ('scroll', () => {

        // 👉🏻 Sections

        start.forEach ( (element, i) => {
            let topElement : number = element.offsetTop
            let pixel : number = window.scrollY 
            let windowHeight : number = window.innerHeight

            if( pixel >= topElement - (windowHeight * 0.8) ){
                element.classList.add('active')
            }else{
                element.classList.remove('active')
            }
        })

        // 👉🏻 Social Menu

        let topElement : number = social.offsetTop
        let pixel : number = window.scrollY 
        let windowHeight : number = window.innerHeight

        if( pixel + windowHeight >= topElement ){
            social.classList.add('active')
        }else{
            social.classList.remove('active')
        }

        // 👉🏻 Main Menu

        if (pixel >= windowHeight){
            menuMainPage.classList.add('light')
        }else {
            menuMainPage.classList.remove('light')
        }

    
       


    })
})
