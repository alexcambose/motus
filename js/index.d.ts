import Motus from './Motus';
declare global  {
    interface Window {
        Motus: Motus;
    }
}
export default Motus;
