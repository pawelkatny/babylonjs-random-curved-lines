const createGround = (width, height) => {
    const ground = new BABYLON.MeshBuilder.CreateGround('ground', {width: width, height: height});
    return ground;
}

const createScene = (engine, canvas) => {
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    const ground = createGround(50, 1000);

    return scene;
}

const canvas = document.getElementById('renderCanvas');
const engine = new BABYLON.Engine(canvas, true);

const scene = createScene(engine, canvas);

engine.runRenderLoop(() => {
    scene.render();
})