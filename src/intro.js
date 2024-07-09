import Phaser from 'phaser';

export default class IntroScene extends Phaser.Scene {
    constructor() {
        super({key : 'Intro'})
    }

    preload() {

    }

    create() {
        this.add.text(this.game.scale.width / 2, 200, 'Web Game',{
            fontFamily: 'Arial',
            fontSize: 80,
            color: 'red'
        }).setOrigin(0.5, 0.5)
        this.textTap = this.add.text(this.game.scale.width/2, 500, 'Tap to continue', {
            fontFamily: 'Arial',
            fontSize:50,
            color: 'white'
        }).setAlpha(1).setOrigin(0.5, 0.5)

        this.input.on('pointerdown', (point) => {
            this.scene.start('Main') //Main 씬으로 이동
        })
        this.tweens.add({
            targets: this.textTap,
            alpha: 0, 
            duration: 500,
            ease: 'Linear',
            yoyo: true,
            repeat: -1
        })
    }
}