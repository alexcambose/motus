import { getUnit, percentFrom, sliceFromPercent, calmelToKebabCase } from '../src/utils';
import { expect } from 'chai';

describe('utils', () => {
    describe('calmelToKebabCase', () => {
        it('FontSize is font-size', () => {
            expect(calmelToKebabCase('FontSize')).to.equal('font-size');
        })
        it('fontSize is font-size', () => {
            expect(calmelToKebabCase('fontSize')).to.equal('font-size');
        })
    });
    describe('percentFrom', () => {
        it('30 is 30% from 100', () => {
            expect(percentFrom(30, 100)).to.equal(30);
        })
    });
    describe('sliceFromPercent', () => {
        it('30% from 100 is 30', () => {
            expect(sliceFromPercent(30, 100)).to.equal(30);
        })
    });
    describe('getUnit', () => {
        const units = ['cm', 'mm', 'in', 'px', 'pt', 'pc', 'em', 'ex', 'ch', '%', 'rem', 'vw', 'vmin', 'vmax'];
        for(const unit of units) {
            it(`should return ${unit} for 12${unit}`, () => {
                expect(getUnit('12' + unit)).to.equal(unit);
            })
        }
        
    });
})
