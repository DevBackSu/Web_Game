import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {
    constructor() {
        super({ key: 'End' });
    }

    preload() {
        this.input.setDefaultCursor('auto'); // 마우스 포인터 보이기
        // this.load.image('mouse', '../asset/image/mouse1.png');
    }

    create() {
        // this.mouseImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');

        // 점수를 레지스트리에서 가져오고 undefined일 경우 0으로 설정
        const score = this.registry.get('score') || 0;

        // 난이도를 레지스트리에서 가져오기
        const bugSpeed = this.registry.get('bugSpeed');
        let level = '';

        if (bugSpeed === 1500) {
            level = 'Level 1';
        } else if (bugSpeed === 1000) {
            level = 'Level 2';
        } else if (bugSpeed === 500) {
            level = 'Level 3';
        }

        // Game Over 텍스트
        this.add.text(this.scale.width / 2, this.scale.height / 2 - 150, 'Game Over', {
            fontSize: '64px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        // 점수에 따라 다른 엔딩 문구 설정
        let endingText = '';
        if (level === 'Level 3') {
            if (score >= 30) {
                endingText = '벌레 잡기의 신입니다!';
            } else if (score >= 15) {
                endingText = '그냥저냥 하네요.';
            } else {
                endingText = '벌레 잡기는 다른 사람에게 맞깁시다.';
            }
        } else if (level === 'Level 2') {
            if (score >= 30) {
                endingText = '벌레 사냥 고수입니다!';
            } else if (score >= 15) {
                endingText = '괜찮은 성과입니다.';
            } else {
                endingText = '조금 더 연습이 필요합니다.';
            }
        } else if (level === 'Level 1') {
            if (score >= 30) {
                endingText = '시간을 잘 활용했습니다!';
            } else if (score >= 15) {
                endingText = '여유롭게 잘 하셨어요.';
            } else {
                endingText = '한 번 더 도전해보세요.';
            }
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
        const retry = this.add.text(this.scale.width / 2, this.scale.height / 2 + 150, 'Click to Restart', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        retry.setInteractive();
        retry.on('pointerdown', () => {
            this.scene.start('Main');
        })

        // Intro 화면으로 이동
        const Intro = this.add.text(this.scale.width / 2, this.scale.height / 2 + 200, 'Main', {
            fontSize: '24px',
            fill: '#fff'
        }).setOrigin(0.5, 0.5);

        Intro.setInteractive();
        Intro.on('pointerdown', () => {
            this.scene.start('Intro');
        })
    }

    // update() {
    //     // 이미지의 위치를 마우스 포인터 위치로 할당
    //     this.mouseImage.x = this.input.activePointer.x;
    //     this.mouseImage.y = this.input.activePointer.y;
    // }
}
