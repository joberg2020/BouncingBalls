import { Drawable } from "./drawable";
import { Position } from "../utils/position";

export class Polygon extends Drawable {

  #verticies = [];

  /**
   * Creates a new Polygon.
   *
   * @param  {...Position} verticies The x,y positions of each vertex of the polygon
   */
  constructor(...verticies) {
    this.super();
    this.verticies = verticies;
    this.#initBoundingBoxPolygon();
  }

  move(dx, dy) {
    this.#verticies.forEach(vertex => {
      vertex.x += dx;
      vertex.y += dy;
    });
  }

  #initBoundingBoxPolygon() {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    this.verticies.forEach(vertex => {
      minX = Math.min(minX, vertex.x);
      minY = Math.min(minY, vertex.y);
      maxX = Math.max(maxX, vertex.x);
      maxY = Math.max(maxY, vertex.y);
    });

    this.boundingBox = new BoundingBox(
      new Position(minX, minY),
      new Position(maxX, maxY));
  }

  get verticies() {
    return this.#verticies;
  }

  set verticies(value) {
    if(value instanceof Array) {
      this.#verticies = value;
    } else {
      throw new Error("Verticies must be an array");
    }
  }
}