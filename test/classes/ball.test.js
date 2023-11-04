import { GameObject } from "../../src/classes/gameObject.js";
import { Circle } from "../../src/classes/shapes/circle.js";
import { Force } from "../../src/classes/utils/force.js";
import { Velocity } from "../../src/classes/utils/velocity.js";
import { Acceleration } from "../../src/classes/utils/acceleration.js";
import { Position } from "../../src/classes/utils/position.js";
import { Ball } from "../../src/classes/ball.js";

describe("Testing functions of the Ball class", () => {
  describe("Testing constructor", () => {
    it("should throw an error if mass is not a positive number", () => {
      expect(() => new Ball(new Position(0, 0), 10, -1, 1)).toThrow();
    });
    it("should throw an error if mass is not a number", () => {
      expect(() => new Ball(new Position(0, 0), 10, "a", 1)).toThrow();
    });
    it("should throw an error if mass is not defined", () => {
      expect(() => new Ball(new Position(0, 0), 10, undefined, 1)).toThrow();
    });
    it("should create a new ball if mass is a positive number", () => {
      expect(new Ball(new Position(0, 0), 10, 1, 1)).toBeInstanceOf(Ball);
    });
  });
  describe("Testing move", () => {
    it("should move the ball", () => {
      const ball = new Ball(new Position(0, 0), 10, 1, 1);
      ball.move(10, 10);
      expect(ball.drawableShape.center.x).toBe(10);
      expect(ball.drawableShape.center.y).toBe(10);
    });
  });
  describe("Testing acceleration", () => {
    it("should return the acceleration of the ball", () => {
      const ball = new Ball(new Position(0, 0), 10, 1, 1);
      ball.updateForce(new Force(10, 10));
      expect(ball.acceleration).toEqual(new Acceleration(10, 10));
    });
  });
  describe("Testing overlap", () => {
    it("should detect overlap between two balls", () => {
      const ball1 = new Ball(new Position(0, 0), 10, 1, 1);
      const ball2 = new Ball(new Position(10, 10), 10, 1, 2);
      expect(ball1.overlaps(ball2)).toBe(true);
    });
  });
});