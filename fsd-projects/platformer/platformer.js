$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0, 250,  150, 15);
    createPlatform(200, 150, 15, 100);
    createPlatform(340, 250, 150, 15);
    createPlatform(700, 250, 50, 12);
    createPlatform(950, 250, 50, 10);
    createPlatform(1250, 250 , 50, 12);
    createPlatform(1250, 500, 300, 10);
    createPlatform(950, 450,  75, 8);
    createPlatform(700, 425,  50 , 10);
    createPlatform(400, 500, 75, 8 );
    createPlatform(175,  500, 300, 10);
    createPlatform(175, 500, 5 , 40);
    createPlatform(125,625, 75, 12 );
    createPlatform(650, 650, 30, 10);
    
    





    // TODO 3 - Create Collectables
    createCollectable("warrior", 375, 200);
    createCollectable("warrior ", 1025, 150);
    createCollectable("warrior", 1350, 200, 0);
    createCollectable("warrior", 1025, 400);
    createCollectable("warrior", 300, 350);
    createCollectable("warrior", 100, 600);
    createCollectable("warrior", 650, 600);
    createCollectable("warrior", 1300, 600);






    
    // TODO 4 - Create Cannons
    createCannon("right", 200, 1600);
    createCannon("right", 375,1300);
    createCannon("right", 800, 950)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
