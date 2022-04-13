input.onButtonPressed(Button.A, function () {
    Sprite_2.move(-1)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(game.score())
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Sprite_2.move(1)
})
input.onPinPressed(TouchPin.P1, function () {
    game.pause()
})
input.onGesture(Gesture.Shake, function () {
    game.resume()
    while (true) {
        Sprite = game.createSprite(randint(0, 5), 0)
        for (let index = 0; index < 4; index++) {
            Sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        if (Sprite.isTouching(Sprite_2)) {
            game.addScore(1)
        }
        Sprite.delete()
    }
})
let Sprite: game.LedSprite = null
let Sprite_2: game.LedSprite = null
Sprite_2 = game.createSprite(randint(0, 5), 5)
game.setScore(0)
basic.forever(function () {
	
})
