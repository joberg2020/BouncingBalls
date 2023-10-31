Responsibilities:
- PhysicsEngine: Collision detection, updating of physics objects.
- PhysicsObject: Contains the physics properties of a game object. Position, velocity, mass, etc. This might be an interface or abstract class.
- GameBoard: Defines the area an dcan contain solid physics objects that doesn´t move but that can be collided with.
- Shape: Base class for description of physics objects geometrical properties. Used by PhysicsEngine to determine the collision of two objects.
- Circle: Shape that describes a circle.
- Rectangle: Shape that describes a rectangle.

Also maybe an EventManager to offer Event hooks for collision and other events.

Not decided how to handle the shape of the GameBoard, should it be a composite shape or a simple rectangle? Should some shapes be predefined?

After some more thinking. 
PhysicsObject should be responsible for knowing the position and velocity of the object. Further, the responsibility of knowing its shape and to answer if it collides with another object should be delegated to a CollisionManager which every gameObject has as a field.
