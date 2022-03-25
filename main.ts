input.onButtonPressed(Button.A, function () {
    light2 += 1
})
basic.showString("PinL")
let light2 = 0
basic.forever(function () {
    basic.showNumber(light2)
    if (light2 >= 5) {
        light2 = 0
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
    if (light2 == 1) {
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
    if (light2 == 2) {
        pins.digitalWritePin(DigitalPin.P14, 1)
    }
    if (light2 == 3) {
        pins.digitalWritePin(DigitalPin.P15, 1)
    }
    if (light2 == 4) {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
