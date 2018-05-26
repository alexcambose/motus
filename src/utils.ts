export const percent = (current: number, total: number, multiplier = 100) =>  current/total*multiplier;
export const sliceFromPercent = (value: number, percent: number, multiplier = 100) => percent*value/multiplier;
export const getUnit = (value: string): string => {
    const units = ['cm', 'mm', 'in', 'pt', 'pc', 'em', 'ex', 'ch', '%', 'rem', 'vw', 'vmin', 'vmax'];
    for(let unit of units) {
        const reg = new RegExp('[1-9]+' + unit);
        if(unit.match(reg)) return unit;
    }
}