/**
 * class for every scene which renderer could render
 */
class Scene {
    constructor(props) {
        this.props = props;
        this._renderer = null;
        this._assetsData = {};
        this._onFinish = () => {};
    }

    setRenderer(renderer){
        this._renderer = renderer;
    }

    getAssetsDate() {
        return this._assetsData;
    }

    onAssetsFinish() {
        return this._onFinish;
    }
}

 export default Scene;