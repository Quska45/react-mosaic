import { expect } from "chai"
import { 
    MosaicNode,
    MosaicParent,
    MosaicKey,
    MosaicDirection
} from '../../src/types'

// type _MosaicNode<T> = MosaicParent<T> | T;

describe('ts type', () => {

    it('MosaicNode 제네릭타입 number', ()=>{
        function test(props:MosaicNode<number>):MosaicNode<number>{
            return props;
        }
        
        let result = test(1);

        expect(result).to.equal(1);
    })

    it('MosaicNode 제네릭타입 string', ()=>{
        function test(props:MosaicNode<string>):MosaicNode<string>{
            return props;
        }
        
        let result = test('1');

        expect(result).to.equal('1');
    })

    it('MosaicNode 제네릭타입 MosaicNode', ()=>{
        function test(props:MosaicNode<number>):MosaicNode<number>{
            return props;
        }

        // 객체의 타입이 지정 되어 있어야 함
        const mosaicNode:MosaicNode<number> = {
            direction: 'row',
            first: 1,
            second: {
                direction: 'column',
                first: 2,
                second: 3,
            },
            splitPercentage: 40,
        };
        
        let result = test( mosaicNode );

        expect(result).to.equal( mosaicNode );
    })
    it('MosaicNode 제네릭 MosaicNode + 인터페이스를 구현하는 클래스 만들어 쓰기', ()=>{
        function test(props:MosaicNode<number>):MosaicNode<number>{
            return props;
        }

        // 이렇게 생성해서 쓰는게 가능하긴 하지만 왜 이렇게 이상하게 나오냐...
        class MosaicNodeClass<T extends MosaicKey> implements MosaicParent<T> {
            direction: MosaicDirection;
            first: MosaicNode<T>;
            second: MosaicNode<T>;
            splitPercentage?: number;

            constructor( 
                direction: MosaicDirection,
                first: MosaicNode<T>,
                second: MosaicNode<T>,
                splitPercentage: number 
            ){
                 this.direction = direction;
                 this.first = first;
                 this.second = second;
                 this.splitPercentage = splitPercentage;
            }
        }

        const mosaicNodeClass:MosaicNode<number> = new MosaicNodeClass( 'row', 1, 1, 20 );
        
        let result = test( mosaicNodeClass );

        expect(result).to.equal( mosaicNodeClass );
    })
})