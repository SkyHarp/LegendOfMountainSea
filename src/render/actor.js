//@flow

import ElementCore from './elementCore';
import Coordinates from '../core/coordinates';

type ActorPropsType = {
    assetData: Object | null,
	position: Coordinates,
	onRender: number => void | null,
	onClick: void => void | null,
}

/**
 * class for rendering interactive element in the game
 * @extends ElementCore
 */
class Actor extends ElementCore {

    _position: Coordinates | null;
    _sprite: any;
    _initPosition: Coordinates;
    _assetData: Object | null;
    _onRender: (any,number) => void | null;
    _onClick: void => void | null;

	constructor(props: ActorPropsType) {
		super(props);
		this._position = null;
		this._sprite = null;
		this._initPosition = props.position;
		this._assetData = props.assetData;
		this._onRender = props.onRender;
		this._onClick = props.onClick;
	}

	DIRECTION_RIGHT = 1;
	DIRECTION_LEFT = -1;

	getRenderObject() {
		return this._sprite;
	}

	setTransform(transform: Coordinates): Actor{
		if(this._sprite){
			this._sprite.x += transform.x;
			this._sprite.y += transform.y;
		}
		return this;
	}

	setPosition(position: Coordinates): Actor{
		this._position = position;
		if (this._sprite) {
			this._sprite.x = position.x;
			this._sprite.y = position.y;
		}

		return this;
	}

	getPosition(): Coordinates{
		return this._position? this._position : this._initPosition;
	}

	toGlobalPosition(): Coordinates{
		const worldTransformX = this._sprite.worldTransform.tx,
			worldTransformY = this._sprite.worldTransform.ty;

		return new Coordinates(worldTransformX, worldTransformY);
	}

	bindRender(onRender: (number) => void): Actor{
		this._onRender = onRender;
		return this;
	}

	render(delta: number) {
		this.tick(delta);
		this.onRender(delta);
	}

	onRender(delta: number) {
		if (this._sprite && this._onRender) {
			this._onRender(this._sprite, delta);
		}
	}

	tick(delta: number) {
	}

	dispose(option: boolean = false){
		super.dispose(option);
		const disposeChildren = option;
		this._sprite.destroy({children: disposeChildren, texture: disposeChildren, baseTexture: disposeChildren});
	}
}

export default Actor;