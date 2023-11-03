import { Position } from "../utils/position";
import { Drawable } from "./drawable";

export class Line extends Drawable {

  #start;
  #end;

  /**
   * 
   * @param {Position} start The position of the start point of the line.
   * @param {Position} end The position of the end point of the line.
   */
  constructor(start, end) {
    super();
    this.#start = start;
    this.#end = end;
    this.boundingBox = this.#initBoundingBoxLine();
  }

  move(dx, dy) {
    this.#start.x += dx;
    this.#start.y += dy;
    this.#end.x += dx;
    this.#end.y += dy;
  }

  #initBoundingBoxLine() {
    return new BoundingBox(
      Math.min(this.#start.x, this.#end.x),
      Math.min(this.#start.y, this.#end.y),
      Math.max(this.#start.x, this.#end.x),
      Math.max(this.#start.y, this.#end.y)
    );
  }
}