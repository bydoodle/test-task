import './scss/style.scss'
import BaseScene from './scenes/scene.js'
import SceneOne from './scenes/scene1.js'
import SceneTwo from './scenes/scene2.js'
import SceneThree from './scenes/scene3.js'
import { initOrientationCheck } from './utilities/orientation.js';

const elApp = document.querySelector('#app');

document.addEventListener('DOMContentLoaded', () => {
    console.log('ad_load');
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('page_hide');
    }
});

const scenes = [
    new SceneOne(),
    new SceneTwo(),
    new SceneThree()
];

function loadScenes() {
    initOrientationCheck();

    scenes.forEach(s => {
        elApp.appendChild(s.render());
        s.loaded();
    });
}

function showScene(id, ...args) {
    const currentScene = scenes[id];

    scenes[id]?.show((...a) => {
        let nextId = id;
        
        if (++nextId >= scenes.length) {
            nextId = 0;
        }

        hideScene(id);
        showScene(nextId, ...a);
    }, ...args);

    console.log(`scene_change:${currentScene.sceneName}`);
}

function hideScene(id) {
    scenes[id]?.hide();
}

loadScenes();
showScene(0);