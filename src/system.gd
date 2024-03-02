extends Sprite2D

var data = load("res://scores/test/data.gd")
var config = load("res://src/config.gd")

# Called when the node enters the scene tree for the first time.
func _ready():
	position.x = 300;
	position.y = 500;

func _process(delta):
	pass
	
func _draw():
	draw_line(Vector2(-10000, 0), Vector2(10000, 0), "white", 3)
	draw_line(Vector2(0, -10000), Vector2(0, 10000), "white", 3)
	for x in range(0,10000):
		var tap = data.get_tap(x)
		if tap == 1:
			draw_circle(Vector2(x, data.get_function(x / config.s).call(x / config.s) * config.s), 10, "skyblue")
		if tap == 2:
			draw_circle(Vector2(x, data.get_function(x / config.s).call(x / config.s) * config.s), 10, "yellow")
			
