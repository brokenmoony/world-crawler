scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    color.FadeToBlack.startScreenEffect(1000)
    tiles.setCurrentTilemap(tilemap` `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight5, function (sprite, location) {
    pause(1000)
    scene.cameraShake(8, 1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 3498, 1, 255, 0, 216, SoundExpressionEffect.Warble, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    game.over(false)
})
scene.setBackgroundImage(assets.image`myImage`)
pause(1000)
music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 912, 717, 255, 0, 3000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.InBackground)
color.FadeToBlack.startScreenEffect()
pause(1000)
tiles.setCurrentTilemap(tilemap`forsty times`)
let jan = sprites.create(assets.image`JAn`, SpriteKind.Player)
scene.cameraFollowSprite(jan)
tiles.placeOnTile(jan, tiles.getTileLocation(26, 48))
controller.moveSprite(jan, 100, 100)
color.startFadeFromCurrent(color.originalPalette, 2000)
game.setDialogFrame(assets.image`frame1`)
game.showLongText("Ah...", DialogLayout.Bottom)
game.showLongText("Where am i...?", DialogLayout.Bottom)
