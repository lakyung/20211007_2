let 가변저항 = 0
// 습도값 출력
basic.forever(function () {
    basic.showNumber(tinkercademy.MoistureSensor(AnalogPin.P1))
})
// 가변저항으로 선풍기 속도 조절
basic.forever(function () {
    가변저항 = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P8, 가변저항)
})
