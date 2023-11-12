let number = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 5)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else if (number == 1) {
        basic.showString("it is impossible to answer that.")
    } else if (number == 4) {
        basic.showString("definitely")
    } else if (number == 5) {
        basic.showString("never.")
    } else {
        basic.showString("i dunno.")
    }
})
