import { Game, AUTO, Scale, Types } from 'phaser';
import { HelloScene } from './scenes/HelloScene';

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 400,
  height: 600,
  parent: document.body,
  backgroundColor: '#faf8ef',
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [HelloScene],
};

new Game(config);
