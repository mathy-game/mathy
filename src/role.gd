extends Sprite2D

var config = load("res://src/config.gd")
var elapsed = 0
var data = load("res://scores/test/data.gd")
var x = 0.0

func _process(delta):
	x += config.speed * delta
	var y = data.get_function(x / config.s).call(x / config.s) * config.s
	position.x = x
	position.y = y
	elapsed += 1

func _draw():
	draw_circle(Vector2(0, 0), 30, "yellow")
