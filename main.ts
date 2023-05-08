basic.showIcon(IconNames.Giraffe)
music.playMelody("E B D G E C5 C - ", 303)
basic.forever(function () {
    radio.setGroup(165)
    while (false) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.mysterious), SoundExpressionPlayMode.InBackground)
        basic.showString("sus")
    }
})
