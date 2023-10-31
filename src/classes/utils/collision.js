export class Collision {
  
  shape;

  constructor(shape) {
    this.shape = shape;
  }

  // Returns true if the shape is colliding with the other shape
  isCollidingWith(otherShape) {
    // Get position of gameObject
    const pos1 = this.getPosition();
    const pos2 = otherShape.getPosition();
    // select depending on the shape type
    if (this.shape.type === "rectangle") {
      return this.isCollidingWithRectangle(pos1, pos2, otherShape);
    }
    // etc
  }
}