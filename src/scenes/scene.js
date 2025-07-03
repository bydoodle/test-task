export default class BaseScene {
    el = null;

    onNextScene = undefined;

    sceneName = undefined;

    visibilityTimeout = 500;

    constructor() {
        if (new.target === BaseScene) {
            throw new TypeError("Cannot instantiate abstract class");
        }
    }

    show(onNextScene = null, ...args) {
        this.el.style.display = 'flex';

        setTimeout(() => {
            this.el.style.opacity = 1;
            this.el.style.transform = 'scale(1)';
        }, this.visibilityTimeout);

        this.onNextScene = onNextScene;
    }

    hide() {
        this.el.style.opacity = 0;
        this.el.style.transform = 'scale(0.8)';

        setTimeout(() => {
            this.el.style.display = 'none';
        }, this.visibilityTimeout);
    }

    loaded() {}

    render() {
        throw new Error("Abstract method 'render()' must be implemented");
    }
}