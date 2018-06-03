import { getUnit, percentFrom, sliceFromPercent, calmelToKebabCase, closest, loopWhile, getValue, kebabToCamelCase } from '../src/utils';
import { expect } from 'chai';

describe('utils', () => {
    describe('calmelToKebabCase', () => {
        it('FontSize is font-size', () => {
            expect(calmelToKebabCase('FontSize')).to.equal('font-size');
        })
        it('fontSize is font-size', () => {
            expect(calmelToKebabCase('fontSize')).to.equal('font-size');
        });
    });
    describe('calmelToKebabCase', () => {
        it('font-size is fontSize', () => {
            expect(kebabToCamelCase('font-size')).to.equal('fontSize');
        });
    });
    describe('percentFrom', () => {
        it('30 is 30% from 100', () => {
            expect(percentFrom(30, 100)).to.equal(30);
        });
    });
    describe('sliceFromPercent', () => {
        it('30% from 100 is 30', () => {
            expect(sliceFromPercent(30, 100)).to.equal(30);
        });
    });
    describe('getUnit & getValue', () => {
        const units = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', '%', 'rem', 'vw', 'vmin', 'vmax'];
        for(const unit of units) {
            it(`should return ${unit} for 12${unit}`, () => {
                expect(getUnit('12' + unit)).to.equal(unit);
            });
        }
        for(const unit of units) {
            it(`should return 12 for 12${unit}`, () => {
                expect(getValue('12' + unit)).to.equal(12);
            });
        }
    });
    describe('closest', () => {
        const arr = [0, 20, 50, 80, 100];
        it(`returns 2 if 40 and [${arr}]`, () => {
            expect(closest(40, arr)).to.equal(2);
        });
    });
    describe('loopWhile', () => {
        const arr = [0, 20, 50, 80, 100];
        it('loops 3 times', () => {
            let times = 0;
            loopWhile(arr, i => i < 3, () => { times++; }, () => {
                expect(times).to.equal(3);
            });
        });
    });
})
