import BaseScene from "./scene";

export default class SceneOne extends BaseScene {
    sceneName = 'intro';

    elTimer = undefined;

    time = 8;
    timer = undefined;

    show(onNextScene = null) {
        this.time = 8;
        
        this.initTimer(() => {
            this.hide();
            
            onNextScene?.();
        });

        super.show(onNextScene);
    }

    initTimer(onTimeLeft = null) {
        this.updateTimer(this.time);
        
        this.timer = setInterval(() => {
            if (--this.time <= 0) {
                this.clearTimer();
                onTimeLeft?.();
                return;
            }

            this.updateTimer(this.time);
        }, 1000);
    }

    clearTimer() {
        clearInterval(this.timer);
    }

    updateTimer(time) {
        if (!this.elTimer) {
            return;
        }

        this.elTimer.textContent = `Scene two in ${time}s`;
    }

    render() {
        const el = document.createElement('div');
        el.setAttribute('id', 'scene-1');
        el.style.display = 'none';
        el.innerHTML = `
            <div id="logo-container">
                <img src="/assets/headline.png" alt="" id="headline">
                <img src="/assets/shadow.png" alt="">
            </div>
            <p id="scene-description">Built with <br><b>JavaScript ES6+, SCSS, GSAP & Swiper.js</b>
            <br><br>
            Bundled using <b>Vite</b></p>
        `;

        const timer = document.createElement('p');
        timer.setAttribute('id', 'scene-timer');
        el.appendChild(timer);
        this.elTimer = timer;

        this.el = el;
        
        return el;
    }
}