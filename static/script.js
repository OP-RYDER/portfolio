var tl = gsap.timeline()

tl.from(".nav .nav-part1, .nav-part2 div",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.3,
})


tl.from(".main .img",{
    x:-140,
    duration:1,
    opacity:1,
    opacity:0,
    
})

tl.from(".main .main2 h1, .main .main2 h3",{
    x:140,
    duration:1.2,
    opacity:0,
    stagger:0.5,
})

gsap.from(".page2 div",{
    scale:0,
    // duration:5,
    opacity:0,
    scrollTrigger: {
            trigger: ".page2 div",
            scroller: "body",
            start: "top 100%",
            end:"top 100%",
            scrub:2 ,
            pin:"true"
    }
})

gsap.from(".page3 div",{
    scale:0,
    opacity:0,
    scrollTrigger: {
            trigger: ".page3 div",
            scroller: "body",
            start: "top 100%",
            end:"top 100%",
            scrub:2 ,
            pin:"true"
    }
})

gsap.from(".contact, .contact div a",{
    scale:0,
    opacity:0,
    stagger:1,
    duration:2,
    scrollTrigger: {
            trigger: ".contact",
            scroller: "body",
            start: "top 120%",
            end:"top 85%",
            scrub:2 ,
            pin:"true",
            stagger:0.5
    }
})