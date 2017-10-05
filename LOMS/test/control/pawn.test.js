import expect from 'expect.js';
import Pawn from '../../src/control/pawn';
import Character from '../../src/render/character';

describe("Pawn", () => {
    let pawn;

    beforeEach(() => {
        pawn = new Pawn({
            character: new Character({
                noAsset: true,
                position: {x: 0, y: 0}
            })
        });
    });

    afterEach(() => {
        pawn = null;
    });

    it("should be able to set destination", () => {
        const mouseEvent = {
            layerX: 5, layerY: 6
        };
        pawn.onMouseDown(mouseEvent);

        const character = pawn.getCharacter();
        expect(character.getDestination().x).to.be(5);
        expect(character.getDestination().y).to.be(6);
    });

});
