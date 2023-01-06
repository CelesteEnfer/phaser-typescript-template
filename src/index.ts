import Phaser from 'phaser';
import Game from './scenes/game';
import './style.css';

const config = {
  gameTitle: 'Phaser Typescript Template',
  premultipliedAlpha: true,
  antialias: false,
  roundPixels: true,
  type: Phaser.AUTO,
  backgroundColor: '#FFF',
  disableContextMenu: true,
  width: 948,
  height: 533,
  scene: Game,
};

new Phaser.Game(config);
