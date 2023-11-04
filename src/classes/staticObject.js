import { GameObject } from "./gameObject";

export class StaticObject extends GameObject {

  #isHole;

  constructor(shape, isHole = false) {
    super(shape);
    this.#isHole = isHole;
  }

  get isHole() {
    return this.#isHole;
  }
}