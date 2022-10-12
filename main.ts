let velocidad = 200
for (let index = 0; index < 3; index++) {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(velocidad)
            basic.clearScreen()
        }
    }
    basic.showIcon(IconNames.Yes)
    velocidad += -80
}
