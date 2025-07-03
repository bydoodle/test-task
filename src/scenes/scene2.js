import BaseScene from "./scene";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap } from 'gsap';

export default class SceneTwo extends BaseScene {
    sceneName = 'gallery';

    slides = [
        { src: 'assets/Gallery/shoe1.png', position: {left: '0px', top: '0px'} },
        { src: 'assets/Gallery/shoe2.png', position: {right: '0px', top: '0px'} },
        { src: 'assets/Gallery/shoe3.png', position: {left: '0px', bottom: '0px'} },
        { src: 'assets/Gallery/shoe4.png', position: {right: '0px', bottom: '0px'} }
    ];
    
    swiper = undefined;
    gsap = undefined;

    loaded() {
        this.initSwiper();
        this.initGsap();
    }

    onSlide(id) {
        const slide = this.slides[id] ?? null;

        if (!slide) {
            return;
        }

        console.log(`user_interaction:slide_click:${id}`);

        this.onNextScene?.(slide.position);
    }

    initSwiper() {
        if (this.swiper) {
            return;
        }

        this.swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            speed: 500,
            autoplay: {
                delay: 3000
            }
        });
    }

    initGsap() {
        if (this.gsap) {
            return;
        }

        this.gsap = gsap.to('#cta-button', { 
            duration: 1,
            ease: "power2.inOut",
            scale: 1.1,
            yoyo: true,
            repeat: -1
        });
    }

    renderSwiper() {
        const el = document.createElement('div');
        el.classList.add('swiper');

        const elWrapper = document.createElement('div');
        elWrapper.classList.add('swiper-wrapper');

        this.slides.forEach(({src}, id) => {
            const elSlide = document.createElement('div');
            elSlide.classList.add('swiper-slide');
            elSlide.innerHTML = `<img src="${src}" alt="">`;

            elSlide.addEventListener('click', () => {
                this.onSlide(id);
            });

            elWrapper.appendChild(elSlide);
        });

        el.appendChild(elWrapper);

        return el;
    }

    renderButton() {
        const elButton = document.createElement('img');
        elButton.src = 'assets/cta.png';
        elButton.setAttribute('id', 'cta-button');
        elButton.addEventListener('click', () => {
            console.log('user_interaction:cta_click');
        });

        this.elCtaBtn = elButton;

        return elButton;
    }

    render() {
        const el = document.createElement('div');
        el.style.opacity = 0;
        el.style.transform = 'scale(0.8)';
        el.style.display = 'none';
        el.setAttribute('id', 'scene-2');
        
        const elSwiper = this.renderSwiper();
        el.appendChild(elSwiper);

        const elButton = this.renderButton();
        el.appendChild(elButton);

        this.el = el;

        return el;
    }
}