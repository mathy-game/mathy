extends Sprite2D

var data = load("res://scores/test/data.gd")
var config = load("res://src/config.gd")

static var taps = []

func _ready():
	var lastX = 0;
	for x in range(lastX,10000):
		var tap = data.get_tap(x)
		if tap == 1:
			var t = Sprite2D.new()
			t.position.x = x
			t.position.y = data.get_function(x / config.s).call(x / config.s) * config.s
			t.texture = load("res://static/role.svg")
			add_child(t)
		if tap == 2:
			draw_circle(Vector2(x, data.get_function(x / config.s).call(x / config.s) * config.s), 10, "yellow")
		lastX += 1

func _process(delta):
	pass
	
func _draw():
	draw_line(Vector2(-10000, 0), Vector2(10000, 0), "white", 3)
	draw_line(Vector2(0, -10000), Vector2(0, 10000), "white", 3)

