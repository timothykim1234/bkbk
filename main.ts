input.onPinPressed(TouchPin.P0, function () {
    basic.showString("CHoo CHoo")
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("ALL ABOARD!")
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.Square)
        basic.clearScreen()
        basic.pause(100)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . . . .
        . . . # #
        # # # # #
        # # # # #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        # # # # .
        # # # # #
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . #
        # # # . #
        # # # # #
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . # #
        # # . # #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        # . # # #
        # . # # #
        # # # # #
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # #
        . # # # #
        # # # # #
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        . # . # .
        `)
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # .
            # # # # #
            # . # . .
            `)
        basic.showLeds(`
            . . . . .
            # # # . #
            # # # . #
            # # # # #
            . # . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . # #
            # # . # #
            # # # # #
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            # . # # #
            # . # # #
            # # # # #
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # #
            . # # # #
            # # # # #
            . . # . #
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("SPEED")
    basic.showNumber(randint(30, 60))
})
