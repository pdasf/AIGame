import { Scene } from 'phaser';

export class HelloScene extends Scene {
  constructor() {
    super({ key: 'HelloScene' });
  }

  create() {
    const { width, height } = this.scale;

    // background
    this.cameras.main.setBackgroundColor('#faf8ef');

    // title
    this.add.text(width / 2, height / 2 - 60, '2048', {
      fontSize: '72px',
      color: '#776e65',
      fontFamily: 'Arial',
      fontStyle: 'bold',
    }).setOrigin(0.5);

    // subtitle
    this.add.text(width / 2, height / 2 + 20, 'Phaser + TypeScript', {
      fontSize: '24px',
      color: '#bbada0',
      fontFamily: 'Arial',
    }).setOrigin(0.5);

    // hint
    this.add.text(width / 2, height / 2 + 80, 'Environment Ready!', {
      fontSize: '20px',
      color: '#776e65',
      fontFamily: 'Arial',
    }).setOrigin(0.5);
  }
}
