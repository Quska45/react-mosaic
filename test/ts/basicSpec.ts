import { expect } from "chai"

describe('ts type', () => {
    it('test', ()=>{
        function test(props:string):string{
            return props;
        };

        expect(test('q')).to.equal('q');
    })
})