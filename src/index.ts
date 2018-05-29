import Motus from './Motus';

declare global {
    interface Window { Motus: Motus; }
}

window.Motus = new Motus();

const headera = new window.Motus.Animation(
    new window.Motus.Point(100),
    new window.Motus.Point(600),
    document.getElementById('anim'), {
    40: {
        'font-size': {
            from: 13,
            to: 20,
            unit: 'px',
        },
    },
    60: {
        fontSize: {
            from: 20,
            to: 100,
            unit: 'px',
        },
    },
});

window.Motus.addAnimation(headera);
