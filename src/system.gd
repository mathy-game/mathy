extends Sprite2D


# Called when the node enters the scene tree for the first time.
func _ready():
	position.x = 300;
	position.y = 500;

func _process(delta):
	pass
	
func _draw():
	draw_line(Vector2(-10000, 0), Vector2(10000, 0), "white", 3)
	draw_line(Vector2(0, -10000), Vector2(0, 10000), "white", 3)
