// EndScene.js
import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'End' });
    }

    preload() {
        this.load.image('mouse', '../asset/image/mouse1.png');
    }

    create() {

        this.mouseImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');

        this.add.text(this.scale.width / 2, this.scale.height / 2, 'Game Over', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        // 점수 표시
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 100, `Your Score: ${this.registry.get('score')}`, {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        // 게임 재시작 텍스트
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 200, 'Click to Restart', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        this.input.on('pointerdown', () => {
            this.scene.start('Main'); // MainScene으로 다시 시작
        });
    }

    update() {
        // 이미지의 위치를 마우스 포인터 위치로 할당
        this.mouseImage.x = this.input.activePointer.x;
        this.mouseImage.y = this.input.activePointer.y;
    }
}
