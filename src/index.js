// src/index.js
import Phaser from 'phaser'
import IntroScene from './intro.js';
import MainScene from './main.js'

var game = new Phaser.Game({
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
    // scene : {
    //     preload: preload,
    //     create : create
    // }
    scene: [
        IntroScene,
        MainScene
    ]
})

function preload(){
    this.load.image('mouse', '../asset/image/mouse1.png'
        // , { frameWidth: 50, frameHeight: 50 } //이미지 로드 시 이미지 프레임 크기 설정
    )
}

function create(){
    //이미지가 생성되는 중심 좌표 위치로, 범위 내에 지정해야 함
    this.add.image(400, 300, 'mouse');
    // this.add.image(this.scale.width / 2, this.scale.height / 2, 'mouse');
}