var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.image('backdrop', 'http://allroundnews.com/wp-content/uploads/2012/03/grass-texture-5.jpg');
    game.load.image('tree', 'tree.gif');
    game.load.spritesheet('tree', 'http://imageshack.com/a/img838/1018/0g4i.png', 24 , 25);
}

function moveBirds(tree, event){
	console.log(tree);
	console.log(event);
	tree.angle += 3;
	tree.angle -= 3;
	tree.animations.play('select');
}

function animationLooped(sprite, animation){
	animation.loop = false;
}

function makeTrees(width, height) {
	for (var s = 0; s < 10; s++){
		for (var x = 0; x < 10; x++){
		  treeX = Math.floor(Math.random() * (width + 1));		
  		  treeY = (85*s) + Math.floor(Math.random() * (45));
  		  console.log('adding twee: ' + treeX + ' ' + treeY); 	
 	      tree = game.add.sprite(treeX, treeY, 'tree');

	      anim = tree.animations.add('select', [0, 1, 2, 3, 2, 1,0], 10);	

	      anim.onLoop.add(animationLooped, this);

 	      tree.inputEnabled = true;
 	      tree.events.onInputDown.add(moveBirds,this);
 	    }
    }
}

function create() {
    game.world.setBounds(0, 0, game.cache.getImage('backdrop').width* 2, game.cache.getImage('backdrop').height * 2);
    game.add.tileSprite(0, 0, game.cache.getImage('backdrop').width * 2, game.cache.getImage('backdrop').height * 2, 'backdrop');
    makeTrees(game.cache.getImage('backdrop').width* 2, game.cache.getImage('backdrop').height* 2);
}

