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

func _input(event):
	if event is InputEventKey:
		for i in range(x - 20, x + 20):
			var tap = data.get_tap(i / config.s)
			if tap != null:
				print("Get!")
			print(tap)
