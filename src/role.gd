extends Sprite2D

var x = 0.0
var speed = 50
var s = 50.0 # Interval
var elapsed = 0
var data = load("res://scores/test/data.gd")

func _process(delta):
	x += speed * delta
	var y = data.get_function(x / s).call(x / s) * s
	position.x = x
	position.y = y
	elapsed += 1

func _draw():
	draw_circle(Vector2(0, 0), 30, "yellow")
