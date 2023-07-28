gsap.registerPlugin(ScrollTrigger);

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();

function cards(){
    var card1 = document.querySelector("#card1");
    var card2 = document.querySelector("#card2");
    var card3 = document.querySelector("#card3");
    var card3h = document.querySelector("#card3 .h");
    var card2h = document.querySelector("#card2 .h");
    var card1h = document.querySelector("#card1 .h");
    
    
    
    card3.addEventListener("mouseenter",function(){
        var tl = gsap.timeline();
        tl.
        to(card1h,{
            rotate:"-90deg",
            paddingLeft:"2vmax",
            paddingRight:"2vmax",
            height:"50%",
            marginBottom:"5vmax",
            marginLeft:"3.2vmax",
            backgroundColor:"#1e1e2f",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card1 h1 span",{
            delay:-2,
            display:"none",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card1 h2",{
              delay:-1,
              opacity:0,
              eas:Expo.easeInout,
              duration:1
          })
        .to(card1,{
            delay:-1,
            width:"10vw",
            ease:Expo.easeInout,
            duration:1
        })  
        .to(card2,{
            width:"10vw",
            ease:Expo.easeInout,
            duration:1,
            delay:-1
        })  
        .to(card3,{
            delay:-1,
              width:"33vw",
             duration:1
          })
          .to(card3h,{
            delay:-1,
            rotate:"0deg",
            marginBottom:"0vmax",
            marginLeft:"0vmax",
            backgroundColor:"transparent",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card3 h2",{
            delay:-1,
            opacity:1,
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card3 h1 span",{
            delay:-1,
            display:"initial",
            ease:Expo.easeInout,
             duration:1
          })
    })
    card3.addEventListener("mouseleave",function(){
        var tl = gsap.timeline();
        tl.
        to(card3,{
            width:"10vw",
            ease:Expo.easeInout,duration:1
        })
        .to(card2,{
            width:"10vw",
            ease:Expo.easeInout,
            duration:1,
            delay:-1
        })  
        .to(card1,{
            width:"33vw",
            delay:-1,
            ease:Expo.easeInout,
            duration:1
            
        })
        .to(card1h,{
            delay:-1,
            rotate:"0deg",
            paddingLeft:"0vmax",
            paddingRight:"0vmax",
            height:"50%",
            marginBottom:"0vmax",
            marginLeft:"0vmax",
            backgroundColor:"transparent",
            ease:Expo.easeInout,
             duration:1
          })
          . to("#card1 h1 span",{
            delay:-2,
            display:"initial",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card1 h2",{
              delay:-1,
              opacity:1,
              eas:Expo.easeInout,
              duration:1
          })
        .to("#card3 h1 span",{
            delay:-2,
            display:"none",
            ease:Expo.easeInout,
             duration:1
          })
        .to(card3h,{
            delay:-1,
            rotate:"-90deg",
            marginBottom:"5vmax",
            marginLeft:"3.2vmax",
            backgroundColor:"#1e1e2f",
            ease:Expo.easeInout,
             duration:1
             
          })
          .to("#card3 h2",{
            delay:-1,
            opacity:0,
            ease:Expo.easeInout,
             duration:1
          })
          
    })
    
    card2.addEventListener("mouseenter",function(){
        var tl = gsap.timeline();
        tl
          .to(card1h,{
            rotate:"-90deg",
            paddingLeft:"2vmax",
            paddingRight:"2vmax",
            height:"50%",
            marginBottom:"5vmax",
            marginLeft:"3.2vmax",
            backgroundColor:"#1e1e2f",
            ease:Expo.easeInout,
             duration:1
          })
          . to("#card1 h1 span",{
            delay:-2,
            display:"none",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card1 h2",{
              delay:-1,
              opacity:0,
              eas:Expo.easeInout,
              duration:1
          })
        .to(card1,{
            delay:-1,
            width:"10vw",
            ease:Expo.easeInout,
            duration:1
        })  
        .to(card3,{
            width:"10vw",
            ease:Expo.easeInout,
            duration:1,
            delay:-1
        })  
        .to(card2,{
            delay:-1,
              width:"33vw",
             duration:1
          })
          .to(card2h,{
            delay:-1,
            rotate:"0deg",
            marginBottom:"0vmax",
            marginLeft:"0vmax",
            backgroundColor:"transparent",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card2 h2",{
            delay:-1,
            opacity:1,
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card2 h1 span",{
            delay:-1,
            display:"initial",
            ease:Expo.easeInout,
             duration:1
          })
    })
    card2.addEventListener("mouseleave",function(){
        var tl = gsap.timeline();
        tl.
        to(card2,{
            width:"10vw",
            ease:Expo.easeInout,duration:1
        })
        .to(card3,{
            width:"10vw",
            ease:Expo.easeInout,
            duration:1,
            delay:-1
        })  
        .to(card1,{
            width:"33vw",
            delay:-1,
            ease:Expo.easeInout,
            duration:1
        })
        .to(card1h,{
            delay:-1,
            rotate:"0deg",
            paddingLeft:"0vmax",
            paddingRight:"0vmax",
            height:"50%",
            marginBottom:"0vmax",
            marginLeft:"0vmax",
            backgroundColor:"transparent",
            ease:Expo.easeInout,
             duration:1
          })
          . to("#card1 h1 span",{
            delay:-2,
            display:"initial",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card1 h2",{
              delay:-1,
              opacity:1,
              eas:Expo.easeInout,
              duration:1
          })
        .to("#card2 h1 span",{
            delay:-2,
            display:"none",
            ease:Expo.easeInout,
             duration:1
          })
        .to(card2h,{
            delay:-1,
            rotate:"-90deg",
            marginBottom:"5vmax",
            marginLeft:"3.2vmax",
            backgroundColor:"#1e1e2f",
            ease:Expo.easeInout,
             duration:1
          })
          .to("#card2 h2",{
            delay:-1,
            opacity:0,
            ease:Expo.easeInout,
             duration:1
          })
          
    })
}

function navScroll() {
    var tl = gsap.timeline();
    tl.to("#nav", {
      scrollTrigger: {
        trigger: "#pg2",
        scroller: "#main",
        start: "top 95%",
        end: "top 60%",
        scrub: true,
        scrub: 1,
      },
      //    y:100,
      backgroundColor: "#fdfdfe",
      borderBottom: "2px solid #bdb3b1",
      ease: Expo.easeInout,
    })
      
}
  
navScroll();


  
function isDesktopView() {
    return window.matchMedia('(min-width: 768px)').matches && !window.matchMedia('(max-width: 1024px)').matches;
}
  
  if (isDesktopView()) {
    cards();
  }
  
  
  
function loader(){
    
  var tl = gsap.timeline()
  tl.
  to("#fs img",{
    y:0,ease:Expo.easeInout,
    // opacity:0,
    duration:1
  })
  .to(".dot",{
     y:0,
    stagger:.1,
  })
  .to("#fs img",{
    delay:3,
     y:-100,
     ease:Expo.easeInout,
     duration:1
  })
  .to(".dot",{
    delay:-1,
    y:100,
    ease:Expo.easeInout,
    duration:1
   })
   .to("#fs",{
      height:"0",
      borderBottomLeftRadius: '20%',
    borderBottomRightRadius: '20%',
    //   opacity:0,
      ease:Expo.easeInout,
      duration:1
   })
   .from("#pg1 .right",{
        x:-1000,
        opacity:0,
        ease:Expo.easeInout,
        duration:1
   })
   .from("#pg1 .left",{
       delay:-.6,
        y:300,
        opacity:0,
        ease:Expo.easeInout,
        duration:1
   })
   .from("#nav",{
        delay:-.8,
        y:-100,
        opacity:0,
        ease:Expo.easeInout,
        duration:1
   })
  gsap.from(".dot",{
    scale:0,
    stagger:.2,
    repeat:-1,
    ease:Expo.easeInout
  })

}
loader();

gsap.to("#pg2 .c", {
    scrollTrigger: {
      trigger: ".categories",
      scroller: "#main",
      start: "top 50%",
      end: "top 60%",
    //   scrub: true,
    //   scrub: 1,
    },
       y:0,
      stagger:.1,
    ease: Expo.easeInout,
})
gsap.from("#pg2 h1", {
    scrollTrigger: {
      trigger: "#pg2",
      scroller: "#main",
      start: "top 70%",
    //   scrub: true,
    //   scrub: 1,
    },
    y:50,
    opacity:0,
    duration:1,
    ease: Expo.easeInout,
})

gsap.from("#pg2 .course", {
    scrollTrigger: {
      trigger: ".cources",
      scroller: "#main",
      start: "top 70%",
    },
    y:500,
    opacity:0,
    stagger:.1,
    duration:1,
    ease: Expo.easeInout,
})


gsap.from("#pg2 .get_skills h2,#pg2 .get_skills p", {
    scrollTrigger: {
      trigger: "#pg2 .get_skills",
      scroller: "#main",
      start: "top 70%",
    },
    y:200,
    opacity:0,
    duration:1,
    ease: Expo.easeInout,
})

gsap.from(".skill", {
    scrollTrigger: {
      trigger: ".skill",
      scroller: "#main",
      start: "top 70%",
    },
    opacity:0,
    duration:1,
    ease: Expo.easeInout,
})

gsap.from(".text", {
    scrollTrigger: {
      trigger: ".skill",
      scroller: "#main",
      start: "top 70%",
    },
    height:"0",
    opacity:0,
    duration:1,
    ease: Expo.easeInout,
})

gsap.from(".swiperrd", {
    scrollTrigger: {
      trigger: ".swiperrd",
      scroller: "#main",
      start: "top 70%",
    },
    y:100,
    opacity:0,
    duration:1,
    ease: Expo.easeInout,
})

gsap.from("#footer",{
    scrollTrigger: {
        trigger: "#footer",
        scroller: "#main",
        start: "top 70%",
      },
      y:100,
      opacity:0,
      duration:1,
      ease: Expo.easeInout,
})



function mobile_nv(){
  var menu = document.querySelector("#menu")
var flag = 0;
menu.addEventListener("click",function(){
  if(flag == 0){
    
     gsap.to("#m_nav",{
      x:0,
      ease:Expo.easeInout,
      duration:.5
     })
     menu.classList.remove('ri-menu-line');
    menu.classList.add('ri-close-fill');
    flag = 1;
  }else{
    gsap.to("#m_nav",{
      x:500,
      ease:Expo.easeInout,
      duration:.5,
      onComplete:function(){
            menu.classList.remove('ri-close-fill');
            menu.classList.add('ri-menu-line');
        }
     })

    flag = 0;
  }
 
})
}

mobile_nv();