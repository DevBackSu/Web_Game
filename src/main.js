import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        this.load.image('mouse', '../asset/image/mouse1.png');
    }

    create() {
        this.input.setDefaultCursor('none'); //마우스 포인터 숨기기
        this.mouseImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');
    }

    update(){
        //이미지의 위치를 마우스 포인터 위치로 할당
        this.mouseImage.x = this.input.activePointer.x;
        this.mouseImage.y = this.input.activePointer.y;
    }
}