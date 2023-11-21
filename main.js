import './css/style.css';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);


// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#scroll-wrapper"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#scroll-wrapper", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#scroll-wrapper").style.transform ? "transform" : "fixed"
// });


// horizontal scroll
let sections = gsap.utils.toArray('.project');

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".project-container",
    pin: true,
    scrub: 0.5,
    // snap: directionalSnap(1 / (sections.length - 1)),
    end: `+=${sections.length * 1000}`
  }
});

gsap.to('.banner-text', {
  yPercent : 100,
  ease : "none",
  scrollTrigger : {
    trigger : '.banner',
    scrub : 1,
    start : "top +=100",
  }
})

gsap.to('.banner-link', {
  yPercent : -100,
  ease : "none",
  scrollTrigger : {
    trigger : '.banner',
    scrub : 1,
    start : "top +=100",
  }
})

const text = gsap.utils.toArray('.slideshow .text');

gsap.to(text, {
  xPercent : -100 * (text.length - 1),
  ease : "none",
  scrollTrigger : {
    trigger : '.slideshow-container',
    scrub : 8,
    start : "top bottom",
  }
})

const tl1 = gsap.timeline({scrollTrigger : {
  trigger : '.exp-container',
  start : 'top +=100',
}})

tl1.fromTo('.exp', {xPercent : 100}, {
  xPercent : 0,
  stagger : .5
})
tl1.to('.exp .overlay', {
  scaleX : 0,
  stagger : .5
})