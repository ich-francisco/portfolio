import "./components/background/background";
import { gsap } from 'gsap';

const textElement = document.querySelector('.animate-text') as HTMLElement;

if (textElement) {
  const text = textElement.textContent || '';
  textElement.textContent = '';

  text.split('').forEach((char) => {
    const span = document.createElement('span');
    
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    span.classList.add('char');
    textElement.appendChild(span);
  });

  const timeline = gsap.timeline();

  timeline.from('.char', {
    duration: 0.8,
    opacity: 0,
    y: 20,
    rotateX: -90,
    stagger: 0.04,
    ease: 'back.out(1.7)',
  });

  timeline.to('#construction-page', {
    color: '#a688b8',
    opacity: 0.9,
    duration: 2.5,
    yoyo: true,
    repeat: -1,
    ease: 'power1.inOut',
  });
}