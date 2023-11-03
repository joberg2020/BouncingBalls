/**
 * Abstract class for the different shapes used in the library.
 */
export class Drawable {
  #color;
  #thickness;
  #fillColor;

  #boundingBox;

  constructor() {
    this.#color = "#000000";
    this.#thickness = 1;
  }

  get color() {
    return this.#color;
  }

  set color(value) {
    this.#color = value;
  }

  get thickness() {
    return this.#thickness;
  }

  set thickness(value) {
    this.#thickness = value;
  }

  get fillColor() {
    return this.#fillColor;
  }

  set fillColor(value) {
    this.#fillColor = value;
  }

  get boundingBox() {
    return this.#boundingBox;
  }

  overlaps(otherDrawable) {
  return this.#boundingBox.overlaps(otherDrawable.boundingBox);
  }

  move(dx, dy) {
    throw new Error("Must be implemented by subclasses");
  }
}