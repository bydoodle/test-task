import BaseScene from "./scene";

export default class SceneThree extends BaseScene {
    sceneName = 'video';

    elVideo = undefined;

    show(onNextScene = null, position = null) {
        Object.assign(this.elVideo.style, position);

        super.show(onNextScene);
    }

    render() {
        const el = document.createElement('div');
        el.setAttribute('id', 'scene-3');
        el.style.opacity = 0;
        el.style.transform = 'scale(0.8)';
        el.style.display = 'none';

        const elVideo = document.createElement('video');
        elVideo.setAttribute('autoplay', 'true');
        elVideo.setAttribute('loop', 'true');
        elVideo.setAttribute('id', 'video-player');
        elVideo.innerHTML = '<source src="assets/video.mp4" type="video/mp4">';

        el.appendChild(elVideo);

        this.elVideo = elVideo;
        
        this.el = el;

        return el;
    }
}