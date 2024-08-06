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

        // 점수를 레지스트리에서 가져오고 undefined일 경우 0으로 설정
        const score = this.registry.get('score') || 0;

        // Game Over 텍스트
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 150, 'Game Over', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        // 점수에 따라 다른 엔딩 문구 설정
        let endingText = '';
        if (score >= 100) {
            endingText = '벌레 잡기의 신입니다!';
        } else if (score >= 50) {
            endingText = '그냥저냥 하네요.';
        } else {
            endingText = '벌레 잡기는 다른 사람에게 맞깁시다.';
        }

        // 엔딩 문구를 화면에 추가
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 50, endingText, {
            fontSize: '32px',
            fill: '#fff',
            fontFamily: 'Arial',
            align: 'center'
        }).setOrigin(0.5);

        // 점수 표시
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, `Your Score: ${score}`, {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        // 게임 재시작 텍스트
        this.add.text(this.scale.width / 2, this.scale.height / 2 + 150, 'Click to Restart', {
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
