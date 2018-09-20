const app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});

document.body.appendChild(app.view);

PIXI.loader.add('tank', 'tank.svg').load((loader, resources) => {
    const tank = new PIXI.Sprite(resources.tank.texture);

    // Setup the position of the tank
    tank.x = app.renderer.width / 2;
    tank.y = app.renderer.height / 2;

    // Rotate around the center
    tank.anchor.x = 0.5;
    tank.anchor.y = 0.5;

    // Add the tank to the scene we are building
    app.stage.addChild(tank);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the tank around a bit
        tank.rotation += 0.01;
    });
});