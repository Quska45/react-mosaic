import { expect } from "chai"
import { 
    MosaicNode,
    MosaicKey,
    MosaicParent
} from '../../src/types'

// type _MosaicNode<T> = MosaicParent<T> | T;

describe('ts type', () => {

    it('MosaicNode 제넥릭 number', ()=>{
        function test(props:MosaicNode<number>):MosaicNode<number>{
            return props;
        }
        
        let result = test(1);

        expect(result).to.equal(1);
    })

    it('MosaicNode 제넥릭 string', ()=>{
        function test(props:MosaicNode<string>):MosaicNode<string>{
            return props;
        }
        
        let result = test('1');

        expect(result).to.equal('1');
    })

    it('MosaicNode 제넥릭 MosaicNode', ()=>{
        function test(props:MosaicNode<string>):MosaicNode<string>{
            return props;
        }
        
        let result = test('1');

        expect(result).to.equal('1');
    })
})