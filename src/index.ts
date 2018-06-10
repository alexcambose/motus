import Motus from './Motus';

declare global {
    interface Window { Motus: Motus; }
}

window.Motus = new Motus();

export default Motus;