export const percentFrom = (current: number, total: number, multiplier = 100) => current / total * multiplier;
export const sliceFromPercent = (value: number, percent: number, multiplier = 100) => percent * value / multiplier;
export const getUnit = (value: string): string => {
    const units = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', '%', 'rem', 'vw', 'vmin', 'vmax'];
    for (const unit of units) {
        const reg = new RegExp('[0-9]+' + unit);
        if (value.match(reg)) {
            return unit;
        }
    }
};
export const calmelToKebabCase = (value: string): string => {
    value = value.trim();
    value = value.replace(value[0], value[0].toLowerCase());
    for (let i = 0; i < value.length; i++) {
        if (value[i] === value[i].toUpperCase()) {
            value = value.substring(0, i) + '-' + value[i].toLowerCase() + value.substring(i + 1);
        }
    }
    return value;
}