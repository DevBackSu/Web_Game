// Phaser 3 게임 생성
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

// 리소스 로드
function preload() {
    // 타이틀 화면에 필요한 리소스 로드 (예: 이미지, 사운드 등)
}

// 타이틀 화면 생성
function create() {
    // 타이틀 화면 UI 구현
    const titleText = this.add.text(config.width / 2, config.height / 2, '타이틀 화면', { fontSize: '32px', fill: '#fff' });
    titleText.setOrigin(0.5);

    // 시작 버튼 추가
    const startButton = this.add.text(config.width / 2, config.height / 2 + 50, '시작하기', { fontSize: '24px', fill: '#fff' });
    startButton.setOrigin(0.5);
    startButton.setInteractive();

    // 시작 버튼 클릭 시 이벤트 처리
    startButton.on('pointerdown', () => {
        this.scene.start('MainScene');
    });
}
