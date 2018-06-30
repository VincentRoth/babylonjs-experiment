class Materials {

    constructor (scene) {
        this.groundMaterial = new BABYLON.StandardMaterial('groundTexture', scene);
        this.groundMaterial.diffuseColor = new BABYLON.Color3(0, 0, 1);

        this.sphereMaterial = new BABYLON.StandardMaterial('sphereTexture', scene);
        this.sphereMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
    }

}