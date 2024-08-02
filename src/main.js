import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
    }

    preload() {
        this.load.image('mouse', '../asset/image/mouse1.png');
        this.load.image('bug', '../asset/image/bug.png')
    }

    create() {
        // phaser는 객체 추가 순서대로 z-index(레이어 순서)가 결정되기 때문에 bug를 먼저 생성하고 마우스를 생성하도록 수정 -> 근데 안 됨
        this.time.addEvent({
            delay: 1000, // 1초마다 실행
            callback: this.addRandomBug,
            callbackScope: this,
            loop: true
        });

        this.input.setDefaultCursor('none'); //마우스 포인터 숨기기
        this.mouseImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');
        this.mouseImage.setDepth(1); //마우스 이미지의 깊이를 1로 설정해 다른 이미지보다 앞에 있도록 함

        // this.bugImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'bug');
    }

    update(){
        //이미지의 위치를 마우스 포인터 위치로 할당
        this.mouseImage.x = this.input.activePointer.x;
        this.mouseImage.y = this.input.activePointer.y;
    }

    addRandomBug() {
        const { width, height } = this.scale;

        // 랜덤 위치 생성
        const x = Phaser.Math.Between(0, width);
        const y = Phaser.Math.Between(0, height);

        // 랜덤 크기 생성
        const scale = Phaser.Math.FloatBetween(0.05, 0.4);

        // 새로운 버그 이미지 추가
        const bug = this.add.image(x, y, 'bug');
        bug.setScale(scale);
        bug.setDepth(0);
        bug.setInteractive(); // 버그 이미지에 대해 인터랙티브 설정

        // 클릭 이벤트 추가
        bug.on('pointerdown', () => {
            console.log('Bug clicked!');
            bug.destroy(); // 클릭 시 버그 이미지 삭제
        });

        this.time.addEvent({
            delay: 1000, // 3초 후에 실행
            callback: () => {
                bug.destroy();
            },
            callbackScope: this
        });
    }
}