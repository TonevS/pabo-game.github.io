import CanvasUtil from '../CanvasUtil.js';
import KeyListener from '../KeyListener.js';
import LevelOne from './LevelOne.js';
import Scene from './Scene.js';

export default class SceneStart extends Scene {
  private starting: boolean;

  // choice - 0 to 3 => 1 for LevelOne, 2 for LevelTwo, 3 for LevelThree
  private choice: number;

  public constructor(maxX: number, maxY: number) {
    super(maxX, maxY);
    this.starting = false;
    this.background = CanvasUtil.loadNewImage('./assets/backgroundSceneStart.png');
    this.choice = 0;
  }

  /**
   * if ENTER is pressed then start the game
   *
   * @param keyListener see if player clicked 1, 2 or 3
   */
  public override processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_1)) {
      this.starting = true;
      this.choice = 1;
    }
    // Remove commenting when Level 2 and 3 are implemented
    // if (keyListener.keyPressed(KeyListener.KEY_2)) {
    // this.starting = true;
    // this.choice = 2;
    // }
    // if (keyListener.keyPressed(KeyListener.KEY_3)) {
    // this.starting = true;
    // this.choice = 3;
    // }
  }

  /**
   * @returns next Scene
   */
  public override update(): Scene {
    if (this.starting) {
      switch (this.choice) {
        case 1:
          return new LevelOne(this.maxX, this.maxY);
        case 2:
        case 3:
        default:
          break;
      }
    }
    return null;
  }

  /**
   *
   * @param canvas background jpg
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasUtil.drawImage(
      canvas,
      this.background,
      0,
      0,
    );
  }
}
