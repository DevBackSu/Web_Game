import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        this.load.image('mouse', '../asset/image/mouse1.png');
    }

    create() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');
    }
}
