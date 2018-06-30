class App {

    constructor (canvasId) {
        this.canvas = document.getElementById(canvasId);

        this.engine = new BABYLON.Engine(this.canvas, true);

        this.map = new Map(this.engine);
        this.initCamera(this.scene, this.canvas);

        this.engine.runRenderLoop(function () {
            this.map.scene.render();
        }.bind(this));

        window.addEventListener('resize', function () {
            if (this.engine) {
                this.engine.resize();
            }
        }.bind(this), false);
    }

    initCamera(scene, canvas) {
        this.camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
        this.camera.setTarget(BABYLON.Vector3.Zero());
        this.camera.attachControl(canvas, true);
    }

}

document.addEventListener('DOMContentLoaded', function () {
    new App('renderCanvas');
}, false);