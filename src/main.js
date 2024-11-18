import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Main' });
        // this.score = 0;
        // this.timeLeft = 5;
    }

    preload() {
        // 음악 파일 적당한 거 찾아서 넣기
        this.load.image('mouse', '../asset/image/mouse1.png');
        this.load.image('bug', '../asset/image/bug.png');
        this.load.image('ghosts', '../asset/image/ghosts.png'); // 새로운 이미지 로드
    }

    create() {
        // 음악 재생

        this.score = 0; // 점수 초기화
        // this.timeLeft = 30; // 남은 시간 초기화
        this.timeLeft = this.registry.get('gameTime') || 30; // 남은 시간 초기화 (기본값 30초)

        // 게임 타이머 설정
        this.time.addEvent({
            delay: 1000, // 1초마다 실행
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });

        // 1초마다 새로운 버그 이미지를 추가하는 타이머 설정
        this.bugSpeed = this.registry.get('bugSpeed') || 1000; // 버그 생성 속도
        this.time.addEvent({
            delay: this.bugSpeed, // 1초마다 실행
            callback: this.addRandomBug,
            callbackScope: this,
            loop: true
        });

        this.input.setDefaultCursor('none'); // 마우스 포인터 숨기기
        this.mouseImage = this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');
        this.mouseImage.setDepth(1); // 마우스 이미지의 깊이를 1로 설정해 다른 이미지보다 앞에 있도록 함

        // 점수 텍스트를 화면에 추가
        this.scoreText = this.add.text(10, 10, `Score: ${this.score}`, {
            fontSize: '32px',
            fill: '#fff'
        });

        // 남은 시간 텍스트를 화면에 추가
        this.timerText = this.add.text(10, 50, `Time Left: ${this.timeLeft}`, {
            fontSize: '32px',
            fill: '#fff'
        });
    }

    update() {
        // 이미지의 위치를 마우스 포인터 위치로 할당
        this.mouseImage.x = this.input.activePointer.x;
        this.mouseImage.y = this.input.activePointer.y;
    }

    updateTimer() {
        this.timeLeft -= 1; // 남은 시간 감소
        this.timerText.setText(`Time Left: ${this.timeLeft}`); // 남은 시간 텍스트 업데이트

        if (this.timeLeft <= 0) {
            this.gameOver(); // 남은 시간이 0이 되면 게임 종료
        }
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
            // console.log('Bug clicked!');
            bug.setTexture('ghosts'); // 클릭 시 이미지 변경
            this.incrementScore(); // 점수 증가

            this.time.addEvent({
                delay: 200, // 0.2초 후에 버그 이미지 삭제
                callback: () => {
                    bug.destroy();
                },
                callbackScope: this
            });
        });

        this.time.addEvent({
            delay: this.bugSpeed,
            callback: () => {
                bug.destroy();
            },
            callbackScope: this
        });
    }

    incrementScore() {
        this.score += 1; // 점수 증가
        this.scoreText.setText(`Score: ${this.score}`); // 점수 텍스트 업데이트
        this.registry.set('score', this.score); // 점수 저장
    }

    gameOver() {
        // 씬 넘어가기 전에 메인 음악 종료
        // this.input.setDefaultCursor(true); // 마우스 포인터 보이기
        // if(this.mouseImage) {  // 마우스 이미지 삭제
        //     this.mouseImage.destroy();
        // }
        this.scene.start('End'); // EndScene으로 전환
    }
}
