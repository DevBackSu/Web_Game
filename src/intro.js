import Phaser from 'phaser';

export default class IntroScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Intro' })
    }

    create() {
        this.add.text(this.game.scale.width / 2, 200, 'catching bugs', {
            fontFamily: 'Arial',
            fontSize: 80,
            color: '#87CEFA'
        }).setOrigin(0.5, 0.5)

        // const button = this.add.text(this.game.scale.width, 500, 'Game Start', {
        //     fontFamily: 'Arial',
        //     fontSize:50,
        //     color: 'white'
        // }).setInteractive()
        // .on('pointerdown', () => this.scene.start('Main'));

        this.textTap = this.add.text(this.game.scale.width/2, 500, 'Tap to continue', {
            fontFamily: 'Arial',
            fontSize:50,
            color: 'white'
        }).setAlpha(1).setOrigin(0.5, 0.5)

        this.input.on('pointerdown', (point) => {
            this.scene.start('Diff') //Diff 씬으로 이동
        })

        this.tweens.add({    // 애니메이션 설정 -> 텍스트가 0.5초간 투명 -> 불투명을 반복
            targets: this.textTap,  // 애니메이션을 적용할 대상
            alpha: 0,        // alpha 값을 0으로 변경하여 투명하게 만듦
            duration: 500,   // 애니메이션의 지속 시간 (밀리초)
            ease: 'Linear',  // 애니메이션의 보간 방법 (선형 보간)
            yoyo: true,      // 애니메이션이 끝나면 반대 방향으로 재생
            repeat: -1       // 애니메이션을 무한히 반복
        })
    }
}