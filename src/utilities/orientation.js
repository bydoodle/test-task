export function createOrientationWarning() {
    const warning = document.createElement('div');
    warning.id = 'orientation-warning';
    warning.innerHTML = '<p>Please rotate your device</p>';

    document.body.appendChild(warning);
}

export function checkOrientation() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const isLandscape = window.innerWidth > window.innerHeight;
    const warning = document.getElementById('orientation-warning');
    const app = document.querySelector('#app');

    if (isLandscape && isMobile) {
        warning.style.display = 'flex';
        app.style.display = 'none';
    } else {
        warning.style.display = 'none';
        app.style.display = '';
    }
}

export function initOrientationCheck() {
    createOrientationWarning();
    checkOrientation();

    window.addEventListener('resize', () => {
        console.log('window_resize');
        checkOrientation();
    });
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('load', checkOrientation);
}