document.getElementById('arrow').addEventListener('click', () => {
    let currentScroll = window.scrollY;
    let scrollInterval = setInterval(() => {
        window.scrollTo(0,currentScroll)
        currentScroll += 50
        if(currentScroll > window.scrollMaxY){
            clearInterval(scrollInterval)
        }
    },1)
})