import Motus from './Motus';

declare global {
    interface Window { Motus: Motus; }
}

window.Motus = new Motus();

const headera = new window.Motus.Animation(
    new window.Motus.Point(100),
    new window.Motus.Point(600),
    document.getElementById('anim'), {
    60: {
        fontSize: {
            to: '100px',
        },
    },
});

window.Motus.addAnimation(headera);
