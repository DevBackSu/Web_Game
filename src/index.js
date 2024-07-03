// src/index.js
import Phaser from 'phaser'

var game = new Phaser.Game({
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        width: 1280,
        height: 720,
        autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY
    }
})