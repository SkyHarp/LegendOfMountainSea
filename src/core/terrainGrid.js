//@flow
import Grid from './grid';
import Coordinates from './coordinates';
import Cube from './cube';

import type GridPropsType from './grid';

type TerrainGridPropsType = {
	point:Coordinates,
	test: string,
};

/**
 * class of terrain grid which provide navigation algorithm for terrain
 * @extends Grid
 */
class TerrainGrid extends Grid {
	/**
	 * create a terrain grid
	 * @param props {Object}
	 * @param props.point {Coordinates} position on terrain
	 */
	constructor(props: TerrainGridPropsType) {
		super(props);
	}

	// getData(center, range) {
    //
	// 	const length = range.radius * 2 + 1,
	// 		coordinatesSet = [];
    //
	// 	for (let index = 0; index < length; ++index) {
	// 		let blockRow = [];
	// 		for (let columnIndex = 0; columnIndex < length; ++columnIndex) {
	// 			let coordinatesX = center.x - (range.radius - 1) - Math.floor(index / 2) + columnIndex,
	// 				coordinatesY = center.y - range.radius + index;
	// 			blockRow.push(new Coordinates(coordinatesX, coordinatesY));
	// 		}
	// 		coordinatesSet.push(blockRow);
	// 	}
    //
	// 	return coordinatesSet;
	// }

	/**
	 * convert to cube Coordinates system
	 * @returns {Cube}
	 */
	convertToCube() {
		let z = this._point.y - (this._point.x - (this._point.x & 1)) / 2;
		let y = -this._point.x - z;
		return Cube(this._point.x, y, z);
	}
}

export default TerrainGrid;