export class Drawable {
  #color;
  #thickness;
  #fillColor;

  #boundingBox;

  constructor(color, thickness) {
    this.#color = color;
    this.#thickness = thickness;
  }

  get color() {
    return this.#color;
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
}