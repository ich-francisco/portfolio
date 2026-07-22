import "./navbar.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to("#navbar", {
  backgroundColor: "#1a1a1a",
  paddingTop: "15px",
  paddingBottom: "15px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",

  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "top -500px",
    scrub: 1,
  }
});