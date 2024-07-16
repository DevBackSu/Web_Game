import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        this.load.image('mouse', '../asset/image/mouse1.png');
    }

    create() {
        // 마우스 커서를 숨깁니다.
        this.input.setDefaultCursor('none');
        this.mouseImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');
    }

    update(){
        this.mouseImage.x = this.input.activePointer.x;
        this.mouseImage.y = this.input.activePointer.y;
    }
}
