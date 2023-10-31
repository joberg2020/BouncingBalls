import { Position } from "../utils/position";

export class BoundingBox {
  #minPoint;
  #maxPoint;
  
  /**
   * Creates a bounding box from min and max points
   *
   * @param {Position} minPoint 
   * @param {Position} maxPoint 
   */
  constructor(minPoint, maxPoint) {
    this.#minPoint = minPoint;
    this.#maxPoint = maxPoint;
  }

  get minPoint() {
    return this.#minPoint;
  }

  get maxPoint() {
    return this.#maxPoint;
  }

  get width() {
    return this.#maxPoint.x - this.#minPoint.x;
  }

  get height() {
    return this.#maxPoint.y - this.#minPoint.y;
  }

  /**
   * Checks if a point is contained within this bounding box.
   *
   * @param {Position} point 
   * @returns {boolean} True if point is contained insde box, false otherwise.
   */
  containsPoint(point) {
    return point.x >= this.#minPoint.x &&
           point.x <= this.#maxPoint.x &&
           point.y >= this.#minPoint.y &&
           point.y <= this.#maxPoint.y;
  }

  /**
   * Checks if this bounding box overlaps with another bounding box
   *
   * @param {BoundingBox} otherBox The other box to check overlap with.
   * @returns {boolean} True if overlap, false otherwise.
   */
  overlaps(otherBox) {
    return this.#minPoint.x < otherBox.#maxPoint.x &&
           this.#maxPoint.x > otherBox.#minPoint.x &&
           this.#minPoint.y < otherBox.#maxPoint.y &&
           this.#maxPoint.y > otherBox.#minPoint.y;
  }

}