import Phaser from 'phaser';

// Phaser 3 게임 생성 (사용 X 파일)
const config = {
    type: Phaser.AUTO,
    parent: 'index',
    scale: {
        // mode : Phaser.Scale.FIT, //종횡비를 유지하며 캔버스를 창 크기에 맞춤
        // mode: Phaser.Scale.RESIZE, //종횡비를 무시하고 캔버스를 창 크기에 맞춤
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH, //높이를 꽉 채우고 비율에 맞게 가로를 조정
        // mode : Phaser.Scale.WIDTH_CONTROLS_HEIGHT도 가능

        // 게임은 아래의 해상도로 렌더링 됨
        width: 800,
        height: 600,
        // autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY,
        autoCenter: Phaser.Scale.Center.CENTER_BOTH // 가로 및 세로 방향으로 중앙에 배치
    },
    scene : {
        preload: preload,
        create : create
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
