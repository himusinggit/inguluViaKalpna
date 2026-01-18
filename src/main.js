import Lenis from 'lenis'
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
  gsap.from("#inglu-title", {
    scrollTrigger: {
      trigger: "#inglu-section",
      start: "top 30%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from("#inglu-text", {
    scrollTrigger: {
      trigger: "#inglu-section",
      start: "top 25%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
  });


  //counter animation
  document.querySelectorAll(".counter").forEach(counter => {
  const target = +counter.getAttribute("data-target");

  gsap.fromTo(counter, 
    { innerText: 0 }, 
    {
      innerText: target,
      duration: 2,
      ease: "power1.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: "#counter-section",
        start: "top 75%",
      },
      onUpdate: function() {
        counter.innerText = Math.floor(counter.innerText).toLocaleString();
      }
    }
  );
});

// gsap.utils.toArray(".inglu-card").forEach((card) => {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: card,
//       start: "top center",
//       end: "bottom center",
//       scrub: true,
//       markers: true
//     }
//   })
//   .fromTo(card, 
//     { scale: 0.8, boxShadow: "0 0 0px rgba(59,130,246,0)" }, 
//     { 
//       scale: 1.1, 
//       boxShadow: "0 0 60px rgba(59,130,246,0.4)", 
//       ease: "power2.out" 
//     }
//   )
//   .to(card, 
//     { 
//       scale: 0.8, 
//       boxShadow: "0 0 0px rgba(59,130,246,0)", 
//       ease: "power2.in" 
//     }
//   );
// });

  gsap.utils.toArray(".inglu-card").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });


  // Hero text
  gsap.from("section h1, section p", {
    opacity: 0,
    y: 80,
    duration: 1.2,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "section",
      start: "top 70%",
    }
  });


  // Counters
  gsap.from(".counter", {
    opacity: 0,
    scale: 0.3,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: "#counter-section",
      start: "top 70%",
    }
  });
