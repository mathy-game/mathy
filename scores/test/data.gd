var name = "Test"
var level = "EZ.1"
var background = ""
var music = ""
var author = ""

func update(elapsed: int):
	if elapsed == 100:
		pass
		
static func get_function(x):
	if x < 10:
		return func(x):
			return sin(x)
	if x >= 10:
		return func(x):
			return x - 10
			
static func get_tap(x):
	if x == 100:
		return 1
	elif x == 200:
		return 2
	else:
		return null
