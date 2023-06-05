class Title extends Phaser.Scene
{
    constructor()
    {
        super("title");
    }

    preload()
    {
        
    }

    create()
    {
        this.titleText = this.add.text
        (
            0,
            0,
            "Roly Poly: To the End",
            {
                font: "65px Arial",
                color: "#6ae0eb",
                align: "center",
            }
        );

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('slugs'));
        });
    }
}

class Slugs extends Phaser.Scene
{
    constructor()
    {
        super("slugs");
    }

    create()
    {
        this.titleText = this.add.text
        (
            0,
            0,
            "This is the slugs\n gameplay scene.",
            {
                font: "65px Arial",
                color: "#6ae0eb",
                align: "center",
            }
        );

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('snails'));
        });
    }
}

class Snails extends Phaser.Scene
{
    constructor()
    {
        super("snails");
    }

    create()
    {
        this.titleText = this.add.text
        (
            0,
            0,
            "This is the gameplay\n scene with the snails.",
            {
                font: "65px Arial",
                color: "#6ae0eb",
                align: "center",
            }
        );

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('snailSlugs'));
        });
    }
}

class SnailSlugs extends Phaser.Scene
{
    constructor()
    {
        super("snailSlugs");
    }

    create()
    {
        this.titleText = this.add.text
        (
            0,
            0,
            "This is the gameplay scene\n with both snails and slugs\n to avoid.",
            {
                font: "65px Arial",
                color: "#6ae0eb",
                align: "center",
            }
        );

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('victory'));
        });
    }
}

class Victory extends Phaser.Scene
{
    constructor()
    {
        super("victory");
    }

    create()
    {
        this.titleText = this.add.text
        (
            0,
            0,
            "This is the victory scene!",
            {
                font: "65px Arial",
                color: "#6ae0eb",
                align: "center",
            }
        );

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('title'));
        });
    }
}

let config = 
{
    type: Phaser.WEBGL,
    width: 960,
    height: 540,
    backgroundColor: "#004011",
    scene: [Title, Slugs, Snails, SnailSlugs, Victory],
}

let game = new Phaser.Game(config);