import './styles.scss';
import Motus from 'motus';

const headerAnimation = new Motus.Animation({
    $el: document.querySelector('header'),
    keyframes: [
        {backgroundPositionY: 10}
    ],
});
Motus.addAnimation(headerAnimation);

const flowerAnimation = new Motus.Animation({
    $el: document.querySelector('header > img'),
    startPoint: 0,
    endPoint: 500,
    keyframes: [
        {marginTop: 170}
    ],
});
Motus.addAnimation(flowerAnimation);

const sectionAnimation = new Motus.Animation({
    $el: document.querySelector('section:nth-child(3)'),
    keyframes: [
        {backgroundPositionY: 10}
    ],
});
Motus.addAnimation(sectionAnimation);
