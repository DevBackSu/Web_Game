import Phaser from 'phaser';

export default class DiffScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Diff' })
    }

    create() {
        this.add.text(this.scale.width / 2, 100, 'Choose Difficulty Level', {
            fontSize: '48px',
            fill: '#fff'
        }).setOrigin(0.5);

        // Level 1 버튼
        const level1 = this.add.text(this.scale.width / 2, 200, 'Level 1', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive();

        level1.on('pointerdown', () => {
            this.startGame(1500, 45); // 벌레 생성 시간 1.5초, 제한 시간 45초
        });

        // Level 2 버튼
        const level2 = this.add.text(this.scale.width / 2, 300, 'Level 2', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive();

        level2.on('pointerdown', () => {
            this.startGame(1000, 30); // 벌레 생성 시간 1초, 제한 시간 30초
        });

        // Level 3 버튼
        const level3 = this.add.text(this.scale.width / 2, 400, 'Level 3', {
            fontSize: '32px',
            fill: '#fff'
        }).setOrigin(0.5).setInteractive();

        level3.on('pointerdown', () => {
            this.startGame(500, 15); // 벌레 생성 시간 0.5초, 제한 시간 15초
        });
    }

    startGame(bugSpeed, gameTime) {
        this.registry.set('bugSpeed', bugSpeed);
        this.registry.set('gameTime', gameTime);
        this.scene.start('Main');
    }
}