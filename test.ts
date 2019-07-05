// Add your code here

/**
 * demo1: Routine for measuring water TDS values
 */
NaturalScience.setK(2.68)
basic.forever(function () {
    NaturalScience.showUserText(0, NaturalScience.getK())
    NaturalScience.showUserNumber(2, NaturalScience.getTDS())
    basic.pause(1000)
    NaturalScience.clear()
})

/**
 * demo2: Get information about the temperature, humidity, and atmospheric pressure of the environment
 */
basic.forever(function () {
    NaturalScience.showUserText(0, NaturalScience.readBME280Data(NaturalScience.BME280Data.Temperature))
    NaturalScience.showUserText(1, NaturalScience.readBME280Data(NaturalScience.BME280Data.Humidity))
    NaturalScience.showUserText(2, NaturalScience.readBME280Data(NaturalScience.BME280Data.Pressure))
    basic.pause(1000)
    NaturalScience.clear()
})

/**
 * demo3: Get water temperature, UV, sound intensity, natural light and other values, and display on OLED
 */
basic.forever(function () {
    NaturalScience.showUserNumber(0, NaturalScience.TemperatureNumber())
    NaturalScience.showUserText(1, NaturalScience.getUV())
    NaturalScience.showUserNumber(2, NaturalScience.getNoise())
    NaturalScience.showUserNumber(3, NaturalScience.getC())
    basic.pause(1000)
    NaturalScience.clear()
})

/**
 * demo5: Set the LED light switch
 */
basic.forever(function () {
    NaturalScience.setLed(NaturalScience.STM32_LED_STATUS.ON)
    basic.pause(1000)
    NaturalScience.setLed(NaturalScience.STM32_LED_STATUS.OFF)
    basic.pause(1000)
})

