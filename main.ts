enum ActionKind {
    Walking,
    Idle,
    Jumping,
    DIe,
    HavalyWakingFly
}
namespace SpriteKind {
    export const Empaque = SpriteKind.create()
    export const Martillo = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . c . . . . . . . . . . 
. . . . . c c . . . . . . . . . 
. . . . . . c c . . . . . . . . 
. . . . . . . c c . . . . . . . 
. . . . . . . c c c c c c . . . 
. . . . . . . c c . . . c . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . c c . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, 50, 0)
    controller.moveSprite(projectile2, 0, 0)
    Animacion3 = animation.createAnimation(ActionKind.DIe, 50)
    Animacion3.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . c c . . . . 
. . . c c c c c c c . . . . . . 
. . . . . . . . . . c c . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Animacion3.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . c c . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . . . . c c . . . . 
. . . . . . . . . . . c c . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Animacion3.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . c . . . . . . . . . . 
. . . . . . c . . . . . . . . . 
. . . . . . c . . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . c c . . . . . . . 
. . . . . . . . c c . . . . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . . . c c . . . . . 
. . . . . . . . . c . . . . . . 
. . . . . . . . . c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    Animacion3.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c . . . . . . . . 
. . . c c . c . . . . . . . . . 
. c c . c c . . . . . . . . . . 
. . . . . . c . . . . . . . . . 
. . . . . . c . . . . . . . . . 
. . . . . . c c . . . . . . . . 
. . . . . . . c . . . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    animation.attachAnimation(projectile2, Animacion3)
    AnimacionDeArmaDeReparaBotYDeNadieMasDeNadieAbsolubtamenteNadieMas()
})
function AnimacionDeArmaDeReparaBotYDeNadieMasDeNadieAbsolubtamenteNadieMas () {
    animation.setAction(projectile2, ActionKind.DIe)
}
function EmpiezaNivel () {
    scene.setTileMap(levels[SiguienteNivel])
    scene.setTile(1, img`
. . . . . . d d d . . . . . . . 
. . . . . . d . d . . . . . . . 
. . . . d d d . . d d . . . . . 
. . . d d . d . . d d . . . . . 
. . . d . . d . . d d d . . . . 
. . d d . . d . . d . d . . . . 
. . d d . . d . . d . d . . . . 
. d . d . . . d . d . d . . . . 
. d . d . . . d . d . d . . . . 
. d . d . . . d . d . d . . . . 
. d . d . . . d . d . d . . . . 
. d . . d . 5 d . d . d . . . . 
. d . . d . 5 d . d . . d . . . 
. d . . d . . d . d . . d . . . 
. d . . d d d d d d d . . . . . 
. . d d d . . . . . . . . . . . 
`, true)
    scene.setTile(4, img`
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
`, true)
    scene.setTile(14, img`
8 8 8 8 8 a 8 c 8 8 8 8 8 8 8 8 
8 8 8 8 8 c c c 8 8 8 c c c 8 8 
8 8 8 8 c a a a c c c 8 8 8 c 8 
8 8 8 8 c a 8 a c c a c c 8 c 8 
8 8 8 c 8 a a a c c a a 8 c c 8 
8 8 8 c a 8 a c c 8 c 8 a c c c 
8 8 8 c 8 a c c c c c c c 8 c c 
8 8 8 c 8 c c c c a 8 c a 8 c c 
8 8 8 c a c c c c 8 c 8 a 8 c c 
8 8 8 c a c c c c 8 c 8 a c c c 
8 8 a c c 8 c c c c c a c 8 c c 
8 8 a c c 8 c c a c a c 8 8 c c 
8 8 8 a c 8 8 c c c c 8 c c c c 
8 8 8 8 a c c c c c c c c 8 8 8 
8 8 8 8 8 a a a 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, false)
    scene.setTile(12, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
    scene.setTile(10, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, false)
    scene.setTile(7, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
e 7 7 e 7 7 7 7 7 7 7 7 7 7 e 7 
e e e e 7 7 7 e 7 7 7 e e 7 7 e 
e e e e 7 e e e e 7 e e e e e e 
e e e e 7 e e e e e e e e e e e 
e e e e e 7 e e e e e e e e e e 
e e e e e 7 e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    scene.setTile(3, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    scene.setTile(2, img`
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
. . . . . . . . . . . . . . . 6 
`, true)
    scene.setTile(9, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(8, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
    scene.setTile(15, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
6 . . 6 . . . . . . 6 6 . . 6 6 
7 6 6 7 6 6 . . 6 6 7 7 6 6 7 7 
7 7 7 7 7 6 6 6 7 7 7 7 7 7 7 7 
7 e 7 7 7 7 7 e 7 7 e 7 7 e 7 7 
7 7 7 e 7 7 7 7 7 7 7 7 7 7 7 7 
7 e 7 7 7 7 7 7 e 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 e 7 7 e 7 7 
7 7 7 7 7 7 e 7 7 7 7 7 7 7 7 7 
`, true)
    scene.placeOnRandomTile(Hero, 9)
}
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    scene.placeOnRandomTile(Hero, 14)
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    game.over(false)
})
function ElPajaroVOlaraYtuNoPorQueNoTienesAlasYElSiYElTeDaSemillasQueTuNoTienes () {
    animation.setAction(Pajaro, ActionKind.HavalyWakingFly)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Hero.vy == 0) {
        Hero.vy = -150
    }
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    SiguienteNivel += 1
    if (SiguienteNivel == levels.length) {
        game.showLongText("Gracias Por Jugar este demo ", DialogLayout.Center)
        game.showLongText("muy pronto ,:)", DialogLayout.Center)
        game.over(true)
    } else {
        EmpiezaNivel()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
scene.onHitTile(SpriteKind.Player, 1, function (sprite) {
    scene.setTile(1, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    Pajaro = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. f f f f f 9 9 9 9 9 9 9 f . . 
. f 6 9 f 9 9 9 9 9 9 9 9 f . . 
. . f 6 9 f 9 9 9 9 9 9 9 f . . 
. . f 9 6 9 f 9 9 9 1 1 9 f f . 
f f f f 9 6 9 f 9 9 1 f 9 4 f . 
f 8 8 f 9 9 6 f 9 9 9 9 4 4 4 4 
f 8 8 8 f f f 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`, SpriteKind.Empaque)
    Pajaro.setPosition(14, 22)
    Pajaro.setVelocity(50, 0)
    Animacion2 = animation.createAnimation(ActionKind.HavalyWakingFly, 50)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 6 f 9 9 9 9 9 9 9 f . . 
. . . f 6 9 f 9 9 9 1 1 9 f f . 
f f f f 6 6 9 f 9 9 1 f 9 4 f . 
f 8 8 f 6 9 6 f 9 9 9 9 4 4 4 4 
f 8 8 8 f f f 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 6 f 9 9 9 9 9 9 9 f . . 
. . . f 6 9 f 9 9 9 1 1 9 f f . 
f f f f 6 6 9 f 9 9 1 f 9 4 f . 
f 8 8 f 6 9 6 f 9 9 9 9 4 4 4 4 
f 8 8 8 f f f 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 1 1 9 f f . 
f f f f 9 9 f f 9 9 1 f 9 4 f . 
f 8 8 f f f f 9 9 9 9 9 4 4 4 4 
f 8 8 8 9 9 9 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 1 1 9 f f . 
f f f f 9 9 f f 9 9 1 f 9 4 f . 
f 8 8 f f f f 9 9 9 9 9 4 4 4 4 
f 8 8 8 9 9 9 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 9 9 9 f . . 
. . . f 6 9 9 9 9 9 1 1 9 f f . 
f f f f 6 9 9 f 9 9 1 f 9 4 f . 
f 8 8 f 6 6 9 f f 9 9 9 4 4 4 4 
f 8 8 8 f 6 6 9 f 9 9 4 4 4 4 . 
f 8 8 8 f f 6 6 f 9 9 9 9 9 f . 
f 8 8 8 9 f f f 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 9 9 9 f . . 
. . . f 6 9 9 9 9 9 1 1 9 f f . 
f f f f 6 9 9 f 9 9 1 f 9 4 f . 
f 8 8 f 6 6 9 f f 9 9 9 4 4 4 4 
f 8 8 8 f 6 6 9 f 9 9 4 4 4 4 . 
f 8 8 8 f f 6 6 f 9 9 9 9 9 f . 
f 8 8 8 9 f f f 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. . . . f f 9 9 9 9 9 9 9 f . . 
. . . . f 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 9 9 9 f . . 
. . . f 9 9 9 9 9 9 1 1 9 f f . 
f f f f 9 9 f f 9 9 1 f 9 4 f . 
f 8 8 f f f f 9 9 9 9 9 4 4 4 4 
f 8 8 8 9 9 9 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. f f f f f 9 9 9 9 9 9 9 f . . 
. f 6 9 f 9 9 9 9 9 9 9 9 f . . 
. . f 6 9 f 9 9 9 9 9 9 9 f . . 
. . f 9 6 9 f 9 9 9 1 1 9 f f . 
f f f f 9 6 9 f 9 9 1 f 9 4 f . 
f 8 8 f 9 9 6 f 9 9 9 9 4 4 4 4 
f 8 8 8 f f f 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    Animacion2.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f f 9 9 9 9 f f f . . 
. f f f f f 9 9 9 9 9 9 9 f . . 
. f 6 9 f 9 9 9 9 9 9 9 9 f . . 
. . f 6 9 f 9 9 9 9 9 9 9 f . . 
. . f 9 6 9 f 9 9 9 1 1 9 f f . 
f f f f 9 6 9 f 9 9 1 f 9 4 f . 
f 8 8 f 9 9 6 f 9 9 9 9 4 4 4 4 
f 8 8 8 f f f 9 9 9 9 4 4 4 4 . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f 8 8 8 9 9 9 9 9 9 9 9 9 9 f . 
f f 8 9 9 9 9 9 9 9 9 9 9 f f . 
. f f f f 4 f f f 4 f f f f . . 
. . . . . 4 4 4 . 4 4 4 . . . . 
`)
    animation.attachAnimation(Pajaro, Animacion2)
    ElPajaroVOlaraYtuNoPorQueNoTienesAlasYElSiYElTeDaSemillasQueTuNoTienes()
})
scene.onHitTile(SpriteKind.Empaque, 4, function (sprite) {
    Pajaro.destroy()
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(Hero, ActionKind.Walking)
    scene.cameraFollowSprite(Hero)
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    scene.placeOnRandomTile(Hero, 12)
})
let Animacion2: animation.Animation = null
let Pajaro: Sprite = null
let Animacion3: animation.Animation = null
let projectile2: Sprite = null
let levels: Image[] = []
let SiguienteNivel = 0
let Hero: Sprite = null
scene.setBackgroundColor(9)
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 
f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 1 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f b b b d d d d b b b b f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f b b b d d d d d d d b b b b f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f b b b b b d d d d d d d b b b b b f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f b b b b b b d d d d d d d b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 f f f f 
f f b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f 
f f b b b b b d d d b b b b b b d d d d b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 4 2 2 2 2 2 2 2 2 2 2 2 f f 
f b b b b b b d d d b b b b b b d d d d b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 4 4 2 2 2 2 2 2 2 2 2 2 f f 
f b b d d d d d d d b b b b b b d d d d b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 2 2 2 f 
f b b d d d d d d d b b b b b b b d d d b b b f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 4 4 4 4 4 4 2 2 2 2 f 
f b b f d d d d d d d d b b b b b d d d b b b b f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 2 f 
f f b f f d d d d d d d d b b b b d d d b b b b f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 2 4 4 4 2 2 2 2 2 4 4 4 4 4 4 4 2 2 2 2 f 
f f b b b f d d d d d d d b b b b b b b b b b b f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f 2 4 4 4 4 2 2 2 2 4 4 4 4 4 4 2 2 2 2 2 f 
f f b f f d d d d d d d d d b b b b b b b b b b f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f 2 4 4 4 4 2 2 4 2 4 4 4 4 4 4 4 4 2 2 2 f 
f f f b f b f d d d d d d d d d b b b b b b b b f f f f f f f f f f c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f 2 4 4 4 2 2 2 4 4 4 4 4 4 4 4 4 2 2 2 f 
f f f b b f b b d d d d d d d d b b d d d b b f f f f f f f f f f c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f 2 2 4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 2 2 2 f 
f f f b b f d d d d d d d d d d b b d d d b f f f f f f f f f c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f 2 2 2 f 4 f 4 4 4 4 4 4 4 2 4 4 4 2 2 f f 
f f f f f f f d d b b b b b b b b b d d d f f f f f f f f f c c c c c c c a a a a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f 2 2 f 2 4 4 4 4 4 4 2 4 4 4 4 2 2 f f 
f f f f f d d d f d f b f b b b b b b b f f f f f f f f f f c c c c c c c c a a a a a a a a a a a a a a a 9 9 9 9 9 9 9 1 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f 2 2 f 4 f 2 4 4 4 4 4 2 2 4 2 2 2 2 f f 
f f f f f f d d d d d b b b f b b b b f f f f f f f f f f c c c c c c c c c a a a a a a a a a a a a a a a 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 9 1 9 9 9 9 1 1 1 1 1 1 1 9 9 1 9 1 9 9 9 9 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f 2 2 4 4 2 2 2 4 2 2 4 4 2 2 2 2 2 f f 
f f f f f f f d f d d f f f b b b f f f f f f f f f f f c c c c c c c c c c c c a a a a a a a a a a a a a 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 1 9 9 9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f 2 2 4 4 f 4 4 f 4 f 2 2 2 2 2 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 1 9 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f 2 4 f f f 2 2 4 4 2 2 2 f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f c c c c c c c c c c c a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 1 9 9 1 9 9 9 1 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 1 9 9 1 1 9 9 1 9 9 9 9 1 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f 2 f f 4 2 2 2 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c a a a a a a a a a a 1 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 1 9 9 1 1 9 9 9 9 9 9 9 1 1 9 9 9 1 1 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f c c c c f c c c c c c c c c c c c c c c c a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f c c c f c c f c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f 1 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f c c c c f c f c c c f c c f c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f c f c c f c f c c c c c c f c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f c c c c f c f c c c c f c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f c c f f c f f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f c c f f f f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f c c f c f f c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f c c f c c c f f c f f c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c f f f f c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 1 1 f f f f f f f f f f 1 f f f f f f f f f f f c f f c c f f f f f c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f c f f f c c c c c c f f f c f c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f c f f f c c f c f f c f f f f c f c c c c c c c c c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f c f f f c c c c f f f c c c f f f f f f f c c c f f f f f f f f c c f c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a f f f f f f f 1 f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f c c c f f f f f f f f f f f f f f f c c c c c c c c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f c c c c c c c c c c c f f f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f c c f f c c c c f c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 
f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 7 7 7 f f f 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 f f f f f f f f f f f f 1 1 1 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f 
f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 
f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f 
f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f 
f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f 
f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f 
f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
game.showLongText("En 2700 el planeta Tierra se contaminó con mucha basura y plástico", DialogLayout.Bottom)
scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 1 f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 1 f f f f c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f 
f f f f f 1 f f f f f f f c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f c c c c c c c a a a a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f 
f f f f f f f f f f f f f c c c c c c c c a a a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f 
f f f f f f f f f f f f f c c c c c c c c a a a a a a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f 
f f f f f f f f f f f c c c c c c c c c c a a a a a a a a a a a a a a a 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 9 9 1 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f 
f f f f f f f f f f f c c c c c c c c c c c a a a a a a a a a a a a a a 9 9 1 9 9 9 9 9 9 1 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 1 9 9 9 9 9 1 1 9 1 1 9 1 9 1 9 9 9 1 9 9 9 9 9 9 1 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f 
f f f f f f f f f f c c c c c c c c c c c c c a a a a a a a a a a a a a 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 1 9 9 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 1 1 9 9 9 9 1 1 9 9 9 9 9 9 1 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f 
f f f f f f f f f c c c c c c c c c c c c c c c a a a a a a a a a a a a 9 9 1 9 9 9 9 9 9 1 9 1 9 9 9 9 9 9 9 9 1 1 9 9 9 1 1 9 9 9 9 9 9 9 1 1 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 1 1 9 9 9 1 9 9 9 9 9 1 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f 
f f f f f f f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a 9 9 9 1 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 1 1 9 9 9 9 9 9 9 9 1 9 9 9 9 9 1 1 9 9 9 9 9 9 9 9 9 9 1 9 9 9 1 9 9 9 9 9 1 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f 
f f f f f f f c c c c c f c c c c c c c c c c c c c a a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 1 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f 
f f f f f f c c c c c c f c c c c c c c c c c c c c c a a a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f 
f f f f f c c c c c c c f c c c c c c c c c c c c c c c c a a a a a a a 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
f f f f c c c c c c c f c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
f c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
f c f c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
f c f c c c c c f c c c c f c c c f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
f c c f f c c c f c c c c f f f c c c c c f c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
f c c c c f c f c f c c c c c c f c c f c c f c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f 
f c c c c c f f c c f c c c c c f c c c f c c f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f 
f f f f c c c f f c f c c c c c c c c c f f c c f c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f 
f f f f f c c c f c c f c f c c c c c c f c c c c f c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f 
f f f f f f c c c f c c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f 
f f f f f f f f c c f c c f f f c c f c f c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f 
f f f f f f f f c c c f c c f c f c c f f f c c c c c c f f c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f 
f f f f f f f f f c c c f c c f c c c c f f f c c c c c c f c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f 
f f f f f f f f f f c c c f c c f c c c c c c f f c c c c c f c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f 
f f f f f f f f f f f c c c f c c f c f c c c c c f c c c c c f f c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f 
f f f f f f f f f f f f f c c f f c f c f f c c c c f c f c c c c f c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f 
f f f f f f f f f f f f f f c c c c c f f c f c c c c c c c c c f c f c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f c c c c f c f f f f c c c f f f c f f c f f f c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f c c c c c f f c f f c c c c c c c f c c c c f c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f c c c c f f c f c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f c c c c c c f f f f c c c c c c c c c c c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f 1 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f c c c f c c c c c f f f f f c c c c c c c c c c c c c c c c c c c c f c c c c f c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 1 f f f f f f f f f c c c f f c c f f c c c c c f f f f c c c c c c c c c c f c c c c c f c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f c c f c c c f f f f f f f f c f f c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 
f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c c c c c c c b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f c c c c c c c c c b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f c c c c c c c b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f c f c c c f c c c c c c c c b b b b b b b b b f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 9 8 8 8 9 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 8 8 8 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 9 9 8 9 9 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 1 f f f f f f 1 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f 1 1 f f f f f f f 7 7 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f 
f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 1 f 
f f f f f f f 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f 1 f 
f f f f f f 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f 
f f f 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 f f f f f 
f f f 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 f f f f 
f f 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 f f 
8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`)
game.showLongText("Asi que los humanos decidieron bajar al robot que estuvieron construyendo", DialogLayout.Bottom)
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 4 5 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 4 4 4 2 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 2 2 4 4 2 2 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 2 4 5 4 4 5 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 4 2 5 5 5 4 4 4 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 1 9 6 6 4 4 5 2 4 4 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 1 6 6 6 4 4 4 4 2 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d e e e e 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 5 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e 4 2 2 5 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 4 d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 4 2 4 2 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d 2 2 2 2 2 2 2 2 2 2 4 4 5 2 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 9 1 9 6 6 6 9 1 9 6 6 8 8 8 d d d d d 4 4 4 4 4 d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 4 2 4 2 5 5 4 e e d d d d d d d d d d d d d d 4 d d d d d d d d d d 2 2 2 2 2 2 2 2 5 4 4 2 2 5 4 5 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 1 6 6 6 9 9 1 6 6 8 8 8 d d d d d 4 4 4 4 4 4 d d d d d d d d d d d 7 7 7 7 7 9 9 9 9 9 4 2 5 4 2 4 4 7 e e d d d d d d d d d d d c 4 4 c c d d 4 d d d d d 2 2 2 9 1 9 2 2 2 2 4 4 2 5 5 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d e e e e 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d d d d d 7 7 7 7 7 7 9 9 9 9 1 4 2 4 4 2 4 7 7 7 e c c c c c c c c c c c 4 4 4 c c d d 4 d d d d d 2 2 2 9 9 1 2 2 2 5 2 4 5 4 2 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e f e e e e e e 
d d d d 4 4 5 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 1 2 2 4 4 7 7 7 7 e a a a a a a a a a a 4 4 4 4 c c d d 4 4 d d d d 2 2 2 9 9 9 2 2 2 9 9 2 2 5 4 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e 5 e 
d d d d 4 4 5 4 4 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 5 2 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 9 1 9 7 7 7 7 7 7 e a a a a a a a a a 4 4 4 4 4 c c d d 4 5 4 d d d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e e e e e 5 5 e 
d d d 4 4 4 4 2 2 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 5 2 2 2 4 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a a a a a a a 4 2 2 2 4 4 c c d 4 4 5 2 4 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e 9 f e 8 5 6 e e 
d d d 4 2 2 4 4 2 4 e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 2 5 5 4 4 4 4 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 1 9 a 4 4 5 4 5 2 4 c c c 2 2 5 5 2 5 5 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d 7 7 2 e e f f 7 5 5 8 8 f e 
2 2 2 4 2 4 5 2 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 5 5 4 2 4 5 2 2 4 5 5 9 1 9 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 9 1 a 4 2 4 5 5 4 4 c c c 4 2 5 2 2 4 5 f 2 2 2 9 1 9 2 2 2 9 1 9 2 2 e e e d d d d 4 2 4 4 d d d d a a a a a a d d d d d d d d d d e e e f f e e 9 7 f 5 e e e f e f 
2 2 2 4 4 5 5 5 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 2 4 4 4 5 2 4 5 5 9 9 1 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a 9 9 9 a 5 5 2 2 5 5 a c c c 1 4 4 4 4 5 1 f 2 2 2 9 9 1 2 2 2 9 9 1 2 2 e e e a a a a 4 4 5 4 a a a a a a a a a a d d d d d d d d e e e e e 2 7 9 9 7 9 5 e e 9 9 f 8 7 
2 2 9 4 2 2 2 4 4 1 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 4 2 4 5 2 5 5 5 9 9 9 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a 4 2 5 4 4 5 a c c c 1 9 9 1 9 9 1 f 2 2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 3 3 3 4 5 2 2 2 3 3 3 3 3 3 3 a a a d d d d d d d e e e 4 e 5 2 9 7 7 5 9 5 2 e e 7 f 9 9 
2 2 9 9 1 2 2 2 9 9 1 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a 2 5 4 4 a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 2 5 4 4 3 3 3 3 3 3 3 3 a a a d d d d d d d e e e f b b 5 5 5 5 e 8 e e 8 e b 7 f 7 
2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a 2 a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 1 9 3 3 a a a d d d d d d e 4 5 5 f 5 5 e e e e 4 4 7 5 f 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 9 1 3 3 a a a d d d d d d 4 4 f e 4 e e e e e e e e e 5 6 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 4 5 3 3 3 3 9 9 9 3 3 a a a d d d 4 4 4 4 9 9 e 4 6 6 6 9 b 2 7 4 e 5 4 9 b 7 f 6 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 9 9 3 3 3 3 3 9 9 9 3 3 a a a d d 4 e 4 4 4 f e 5 5 4 e e 9 6 b 9 4 e 5 7 8 b 5 2 e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 d 2 4 4 4 5 5 e 7 8 e e 9 7 7 f f 9 e 5 8 4 b 5 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 f f f 1 f f f f 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 4 4 e e e 5 7 f 2 e 9 9 7 f f 7 f 9 e 8 7 4 4 9 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f f 1 1 f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 e e e e e 5 f 4 e e e e e 7 7 6 e 9 8 6 6 6 9 e 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f 1 1 f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 4 9 2 7 f 2 8 4 e e e 8 7 6 b f f 5 7 f e e 8 
b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b f f f f f f f f 1 f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e 4 e 9 7 9 9 f 2 9 4 5 5 5 e e 7 e b 9 f 5 f 7 e 8 
b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 9 6 4 2 9 f 5 5 5 5 2 7 7 2 e b f f f 5 7 e 8 
b b b 9 9 9 9 9 b b b b 9 9 9 b b b b b b b b f f f f f f f f f f f f f f f f f f f b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 9 7 7 6 f e 2 e 4 4 7 7 f f f 9 b 7 7 f f e 8 
b b 9 9 9 9 9 9 9 b b b 9 9 9 b b b b b b b f f f f f f f 1 1 1 f f f f f f f f f f 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b e e 9 9 9 9 9 e e e e e e f f 4 5 5 9 6 6 6 6 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b b b f f f f f f 1 1 1 1 f f f f f f f f f 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 b b b 9 b b e e e e e 5 5 5 5 5 8 8 e 5 5 e 4 4 7 8 8 8 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b f f f f f f f f 1 1 1 1 f f f f f f f f f b 9 9 9 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b 9 b b b 9 b b b b e e e e 8 8 8 8 e e e e e e e 2 2 e e e e e b 
b b b 9 9 9 9 9 9 9 9 9 b b b b b b f f f f f f f f f 1 1 1 1 1 f f f f f f f f f b b b 8 8 b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b 9 9 b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b 8 8 b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b 9 9 9 b b 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b 9 9 9 9 9 b f f f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b 9 9 9 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b f f f f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 9 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
game.showLongText("Y le dieron una misión de reparar la tierra", DialogLayout.Bottom)
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 4 5 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 4 4 4 2 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 2 2 4 4 2 2 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 2 4 5 4 4 5 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 4 2 5 5 5 4 4 4 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 1 9 6 6 4 4 5 2 4 4 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 1 6 6 6 4 4 4 4 2 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d e e e e 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 5 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e 4 2 2 5 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 4 d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 4 2 4 2 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d 2 2 2 2 2 2 2 2 2 2 4 4 5 2 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 9 1 9 6 6 6 9 1 9 6 6 8 8 8 d d d d d 4 4 4 4 4 d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 4 2 4 2 5 5 4 e e d d d d d d d d d d d d d d 4 d d d d d d d d d d 2 2 2 2 2 2 2 2 5 4 4 2 2 5 4 5 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 1 6 6 6 9 9 1 6 6 8 8 8 d d d d d 4 4 4 4 4 4 d d d d d d d d d d d 7 7 7 7 7 9 9 9 9 9 4 2 5 4 2 4 4 7 e e d d d d d d d d d d d c 4 4 c c d d 4 d d d d d 2 2 2 9 1 9 2 2 2 2 4 4 2 5 5 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d e e e e 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d d d d d 7 7 7 7 7 7 9 9 9 9 1 4 2 4 4 2 4 7 7 7 e c c c c c c c c c c c 4 4 4 c c d d 4 d d d d d 2 2 2 9 9 1 2 2 2 5 2 4 5 4 2 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e f e e e e e e 
d d d d 4 4 5 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 1 2 2 4 4 7 7 7 7 e a a a a a a a a a a 4 4 4 4 c c d d 4 4 d d d d 2 2 2 9 9 9 2 2 2 9 9 2 2 5 4 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e 5 e 
d d d d 4 4 5 4 4 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 5 2 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 9 1 9 7 7 7 7 7 7 e a a a a a a a a a 4 4 4 4 4 c c d d 4 5 4 d d d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e e e e e 5 5 e 
d d d 4 4 4 4 2 2 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 5 2 2 2 4 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a a a a a a a 4 2 2 2 4 4 c c d 4 4 5 2 4 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e 9 f e 8 5 6 e e 
d d d 4 2 2 4 4 2 4 e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 2 5 5 4 4 4 4 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 1 9 a 4 4 5 4 5 2 4 c c c 2 2 5 5 2 5 5 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d 7 7 2 e e f f 7 5 5 8 8 f e 
2 2 2 4 2 4 5 2 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 5 5 4 2 4 5 2 2 4 5 5 9 1 9 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 9 1 a 4 2 4 5 5 4 4 c c c 4 2 5 2 2 4 5 f 2 2 2 9 1 9 2 2 2 9 1 9 2 2 e e e d d d d 4 2 4 4 d d d d a a a a a a d d d d d d d d d d e e e f f e e 9 7 f 5 e e e f e f 
2 2 2 4 4 5 5 5 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 2 4 4 4 5 2 4 5 5 9 9 1 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a 9 9 9 a 5 5 2 2 5 5 a c c c 1 4 4 4 4 5 1 f 2 2 2 9 9 1 2 2 2 9 9 1 2 2 e e e a a a a 4 4 5 4 a a a a a a a a a a d d d d d d d d e e e e e 2 7 9 9 7 9 5 e e 9 9 f 8 7 
2 2 9 4 2 2 2 4 4 1 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 4 2 4 5 2 5 5 5 9 9 9 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a 4 2 5 4 4 5 a c c c 1 9 9 1 9 9 1 f 2 2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 3 3 3 4 5 2 2 2 3 3 3 3 3 3 3 a a a d d d d d d d e e e 4 e 5 2 9 7 7 5 9 5 2 e e 7 f 9 9 
2 2 9 9 1 2 2 2 9 9 1 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a 2 5 4 4 a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 2 5 4 4 3 3 3 3 3 3 3 3 a a a d d d d d d d e e e f b b 5 5 5 5 e 8 e e 8 e b 7 f 7 
2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a 2 a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 1 9 3 3 a a a d d d d d d e 4 5 5 f 5 5 e e e e 4 4 7 5 f 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 9 1 3 3 a a a d d d d d d 4 4 3 e 4 e e e e e e e e e 5 6 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 4 5 3 3 3 3 9 9 9 3 3 a a a d d d 4 4 4 4 9 9 3 4 6 6 6 9 b 2 7 4 e 5 4 9 b 7 f 6 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 9 9 3 3 3 3 3 9 9 9 3 3 a a a d d 4 e 4 4 4 f e 5 3 4 e e 9 6 b 9 4 e 5 7 8 b 5 2 e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 d 2 4 4 4 5 5 e 7 3 e e 9 7 7 f f 9 e 5 8 4 b 5 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 f f f 1 f f f f 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 4 4 e e e 5 7 f 2 3 9 9 7 f f 7 f 9 e 8 7 4 4 9 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f f 1 1 f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 e e e e e 5 f 4 e 3 e e e 7 7 6 e 9 8 6 6 6 9 e 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f 1 1 f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 4 9 2 7 f 2 8 4 3 e e 8 7 6 b f f 5 7 f e e 8 
b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b f f f f f f f f 1 f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e 4 e 9 7 9 9 f 2 9 4 5 5 5 e e 7 e b 9 f 5 f 7 e 8 
b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 9 6 4 2 9 f 5 5 5 5 2 7 7 2 e b f f f 5 7 e 8 
b b b 9 9 9 9 9 b b b b 9 9 9 b b b b b b b b f f f f f f f f f f f f f f f f f f f b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 9 7 7 6 f e 2 e 4 4 7 7 f f f 9 b 7 7 f f e 8 
b b 9 9 9 9 9 9 9 b b b 9 9 9 b b b b b b b f f f f f f f 1 1 1 f f f f f f f f f f 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b e e 9 9 9 9 9 e e e e e e f f 4 5 5 9 6 6 6 6 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b b b f f f f f f 1 1 1 1 f f f f f f f f f 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 b b b 9 b b e e e e e 5 5 5 5 5 8 8 e 5 5 e 4 4 7 8 8 8 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b f f f f f f f f 1 1 1 1 f f f f f f f f f b 9 9 9 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b 9 b b b 9 b b b b e e e e 8 8 8 8 e e e e e e e 2 2 e e e e e b 
b b b 9 9 9 9 9 9 9 9 9 b b b b b b f f f f f f f f f 1 1 1 1 1 f f f f f f f f f b b b 8 8 b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b 9 9 b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b 8 8 b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b 9 9 9 b b 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b 9 9 9 9 9 b f f f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b 9 9 9 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b f f f f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 9 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
game.showLongText("Y le  nombraron ReparaBot", DialogLayout.Bottom)
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 4 5 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 4 4 4 2 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 2 2 4 4 2 2 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 2 4 5 4 4 5 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 4 2 5 5 5 4 4 4 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 1 9 6 6 4 4 5 2 4 4 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 1 6 6 6 4 4 4 4 2 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d e e e e 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 5 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e 4 2 2 5 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 4 d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 4 2 4 2 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d 2 2 2 2 2 2 2 2 2 2 4 4 5 2 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 9 1 9 6 6 6 9 1 9 6 6 8 8 8 d d d d d 4 4 4 4 4 d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 4 2 4 2 5 5 4 e e d d d d d d d d d d d d d d 4 d d d d d d d d d d 2 2 2 2 2 2 2 2 5 4 4 2 2 5 4 5 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 1 6 6 6 9 9 1 6 6 8 8 8 d d d d d 4 4 4 4 4 4 d d d d d d d d d d d 7 7 7 7 7 9 9 9 9 9 4 2 5 4 2 4 4 7 e e d d d d d d d d d d d c 4 4 c c d d 4 d d d d d 2 2 2 9 1 9 2 2 2 2 4 4 2 5 5 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d e e e e 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d d d d d 7 7 7 7 7 7 9 9 9 9 1 4 2 4 4 2 4 7 7 7 e c c c c c c c c c c c 4 4 4 c c d d 4 d d d d d 2 2 2 9 9 1 2 2 2 5 2 4 5 4 2 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e f e e e e e e 
d d d d 4 4 5 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 1 2 2 4 4 7 7 7 7 e a a a a a a a a a a 4 4 4 4 c c d d 4 4 d d d d 2 2 2 9 9 9 2 2 2 9 9 2 2 5 4 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e 5 e 
d d d d 4 4 5 4 4 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 5 2 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 9 1 9 7 7 7 7 7 7 e a a a a a a a a a 4 4 4 4 4 c c d d 4 5 4 d d d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e e e e e 5 5 e 
d d d 4 4 4 4 2 2 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 5 2 2 2 4 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a a a a a a a 4 2 2 2 4 4 c c d 4 4 5 2 4 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e 9 f e 8 5 6 e e 
d d d 4 2 2 4 4 2 4 e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 2 5 5 4 4 4 4 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 1 9 a 4 4 5 4 5 2 4 c c c 2 2 5 5 2 5 5 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d 7 7 2 e e f f 7 5 5 8 8 f e 
2 2 2 4 2 4 5 2 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 5 5 4 2 4 5 2 2 4 5 5 9 1 9 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 9 1 a 4 2 4 5 5 4 4 c c c 4 2 5 2 2 4 5 f 2 2 2 9 1 9 2 2 2 9 1 9 2 2 e e e d d d d 4 2 4 4 d d d d a a a a a a d d d d d d d d d d e e e f f e e 9 7 f 5 e e e f e f 
2 2 2 4 4 5 5 5 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 2 4 4 4 5 2 4 5 5 9 9 1 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a 9 9 9 a 5 5 2 2 5 5 a c c c 1 4 4 4 4 5 1 f 2 2 2 9 9 1 2 2 2 9 9 1 2 2 e e e a a a a 4 4 5 4 a a a a a a a a a a d d d d d d d d e e e e e 2 7 9 9 7 9 5 e e 9 9 f 8 7 
2 2 9 4 2 2 2 4 4 1 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 4 2 4 5 2 5 5 5 9 9 9 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a 4 2 5 4 4 5 a c c c 1 9 9 1 9 9 1 f 2 2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 3 3 3 4 5 2 2 2 3 3 3 3 3 3 3 a a a d d d d d d d e e e 4 e 5 2 9 7 7 5 9 5 2 e e 7 f 9 9 
2 2 9 9 1 2 2 2 9 9 1 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a 2 5 4 4 a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 2 5 4 4 3 3 3 3 3 3 3 3 a a a d d d d d d d e e e f b b 5 5 5 5 e 8 e e 8 e b 7 f 7 
2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a 2 a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 1 9 3 3 a a a d d d d d d e 4 5 5 f 5 5 e e e e 4 4 7 5 f 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 9 1 3 3 a a a d d d d d d 4 4 3 e 4 e e e e e e e e e 5 6 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 4 5 3 3 3 3 9 9 9 3 3 a a a d d d 4 4 4 4 9 9 3 4 6 6 6 9 b 2 7 4 e 5 4 9 b 7 f 6 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 9 9 3 3 3 3 3 9 9 9 3 3 a a a d d 4 e 4 4 4 f e 5 3 4 e e 9 6 b 9 4 e 5 7 8 b 5 2 e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 d 2 4 4 4 5 5 e 7 3 e e 9 7 7 f f 9 e 5 8 4 b 5 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 f f f 1 f f f f 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 4 4 e e e 5 7 f 2 3 9 9 7 f f 7 f 9 e 8 7 4 4 9 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f f 1 1 f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 e e e e e 5 f 4 e 3 e e e 7 7 6 e 9 8 6 6 6 9 e 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f 1 1 f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 4 9 2 7 f 2 8 4 3 e e 8 7 6 b f f 5 7 f e e 8 
b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b f f f f f f f f 1 f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e 4 e 9 7 9 9 f 2 9 4 5 5 5 e e 7 e b 9 f 5 f 7 e 8 
b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 9 6 4 2 9 f 5 5 5 5 2 7 7 2 e b f f f 5 7 e 8 
b b b 9 9 9 9 9 b b b b 9 9 9 b b b b b b b b f f f f f f f f f f f f f f f f f f f b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 9 7 7 6 f e 2 e 4 4 7 7 f f f 9 b 7 7 f f e 8 
b b 9 9 9 9 9 9 9 b b b 9 9 9 b b b b b b b f f f f f f f 1 1 1 f f f f f f f f f f 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b e e 9 9 9 9 9 e e e e e e f f 4 5 5 9 6 6 6 6 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b b b f f f f f f 1 1 1 1 f f f f f f f f f 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 b b b 9 b b e e e e e 5 5 5 5 5 8 8 e 5 5 e 4 4 7 8 8 8 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b f f f f f f f f 1 1 1 1 f f f f f f f f f b 9 9 9 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b 9 b b b 9 b b b b e e e e 8 8 8 8 e e e e e e e 2 2 e e e e e b 
b b b 9 9 9 9 9 9 9 9 9 b b b b b b f f f f f f f f f 1 1 1 1 1 f f f f f f f f f b b b 8 8 b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b 9 9 b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b 8 8 b b b b b b b b b b b 8 8 8 8 8 8 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b 9 9 9 b b 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b 9 9 9 9 9 b f f f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b 9 9 9 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b f f f f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b a a a a a a a a a b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a b b b b b b b b b b b b b 9 9 9 b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a b b b b b b b b b b b b 9 9 9 9 b 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 9 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
game.showLongText("Y empezó su misión de reparar el mundo", DialogLayout.Top)
scene.setBackgroundImage(img`
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 8 d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 8 8 4 5 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 4 4 4 2 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 8 8 8 8 8 8 8 8 4 2 2 4 4 2 2 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 2 4 5 4 4 5 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 4 2 5 5 5 4 4 4 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 1 9 6 6 4 4 5 2 4 4 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 1 6 6 6 4 4 4 4 2 4 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d e e e e 4 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e 4 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d d d d d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 d d d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 5 4 4 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e e e e 4 2 2 5 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 4 4 4 4 d d d d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 4 4 2 4 2 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d 2 2 2 2 2 2 2 2 2 2 4 4 5 2 4 2 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d d 4 4 4 d d d d d d d 6 6 6 9 1 9 6 6 6 9 1 9 6 6 8 8 8 d d d d d 4 4 4 4 4 d d d d d d d d d d d d d 7 7 7 7 7 7 7 7 7 4 2 4 2 5 5 4 e e d d d d d d d d d d d d d d 4 d d d d d d d d d d 2 2 2 2 2 2 2 2 5 4 4 2 2 5 4 5 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 1 6 6 6 9 9 1 6 6 8 8 8 d d d d d 4 4 4 4 4 4 d d d d d d d d d d d 7 7 7 7 7 9 9 9 9 9 4 2 5 4 2 4 4 7 e e d d d d d d d d d d d c 4 4 c c d d 4 d d d d d 2 2 2 9 1 9 2 2 2 2 4 4 2 5 5 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f d e e e e 
d d d d 4 4 4 4 d d d d d d d 6 6 6 9 9 9 6 6 6 9 9 9 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d d d d d 7 7 7 7 7 7 9 9 9 9 1 4 2 4 4 2 4 7 7 7 e c c c c c c c c c c c 4 4 4 c c d d 4 d d d d d 2 2 2 9 9 1 2 2 2 5 2 4 5 4 2 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e f e e e e e e 
d d d d 4 4 5 4 d d d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 4 4 4 d d d d d 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 1 2 2 4 4 7 7 7 7 e a a a a a a a a a a 4 4 4 4 c c d d 4 4 d d d d 2 2 2 9 9 9 2 2 2 9 9 2 2 5 4 2 e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e e 5 e 
d d d d 4 4 5 4 4 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 4 4 5 2 4 4 4 4 4 4 4 4 4 4 4 7 7 7 7 7 9 9 9 9 9 9 1 9 7 7 7 7 7 7 e a a a a a a a a a 4 4 4 4 4 c c d d 4 5 4 d d d 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d d 4 4 d d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e e e e e 5 5 e 
d d d 4 4 4 4 2 2 4 d d d d d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 4 5 2 2 2 4 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a a a a a a a 4 2 2 2 4 4 c c d 4 4 5 2 4 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d d d 7 f e e 9 f e 8 5 6 e e 
d d d 4 2 2 4 4 2 4 e e e e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 4 2 5 5 4 4 4 4 5 5 5 5 5 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 1 9 a 4 4 5 4 5 2 4 c c c 2 2 5 5 2 5 5 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e d d d d d d 4 4 4 d d d d d d d d d d d d d d d d d d d d d d 7 7 2 e e f f 7 5 5 8 8 f e 
2 2 2 4 2 4 5 2 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d 5 5 4 2 4 5 2 2 4 5 5 9 1 9 5 4 4 4 7 7 7 7 7 9 9 9 9 9 9 9 9 7 7 7 7 7 7 e a a 9 9 1 a 4 2 4 5 5 4 4 c c c 4 2 5 2 2 4 5 f 2 2 2 9 1 9 2 2 2 9 1 9 2 2 e e e d d d d 4 2 4 4 d d d d a a a a a a d d d d d d d d d d e e e f f e e 9 7 f 5 e e e f e f 
2 2 2 4 4 5 5 5 2 4 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 2 4 4 4 5 2 4 5 5 9 9 1 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a 9 9 9 a 5 5 2 2 5 5 a c c c 1 4 4 4 4 5 1 f 2 2 2 9 9 1 2 2 2 9 9 1 2 2 e e e a a a a 4 4 5 4 a a a a a a a a a a d d d d d d d d e e e e e 2 7 9 9 7 9 5 e e 9 9 f 8 7 
2 2 9 4 2 2 2 4 4 1 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 4 2 4 5 2 5 5 5 9 9 9 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a 4 2 5 4 4 5 a c c c 1 9 9 1 9 9 1 f 2 2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 3 3 3 4 5 2 2 2 3 3 3 3 3 3 3 a a a d d d d d d d e e e 4 e 5 2 9 7 7 5 9 5 2 e e 7 f 9 9 
2 2 9 9 1 2 2 2 9 9 1 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a 2 5 4 4 a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 2 5 4 4 3 3 3 3 3 3 3 3 a a a d d d d d d d e e e f b b 5 5 5 5 e 8 e e 8 e b 7 f 7 
2 2 9 9 9 2 2 2 9 9 9 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a 2 a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 1 9 3 3 a a a d d d d d d e 4 5 5 f 5 5 e e e e 4 4 7 5 f 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 2 2 4 3 3 3 9 9 1 3 3 a a a d d d d d d 4 4 f e 4 e e e e e e e e e 5 6 9 b 7 f 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 4 4 5 3 3 3 3 9 9 9 3 3 a a a d d d 4 4 4 4 9 9 e 4 6 6 6 9 b 2 7 4 e 5 4 9 b 7 f 6 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 9 9 9 3 3 3 3 3 9 9 9 3 3 a a a d d 4 e 4 4 4 f e 5 5 4 e e 9 6 b 9 4 e 5 7 8 b 5 2 e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 d d d d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 d 2 4 4 4 5 5 e 7 8 e e 9 7 7 f f 9 e 5 8 4 b 5 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 f f f 1 f f f f 5 5 5 5 5 5 5 5 5 5 5 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 e a a a a a a a a a a a a a c c c 1 1 1 1 1 1 1 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 e e e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 4 4 4 e e e 5 7 f 2 e 9 9 7 f f 7 f 9 e 8 7 4 4 9 e e 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f f 1 1 f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 2 2 2 2 2 2 2 2 2 2 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 e e e e e 5 f 4 e e e e e 7 7 6 e 9 8 6 6 6 9 e 8 
2 2 2 2 2 2 2 2 2 2 2 2 2 e e e b b b b b b b b b b f f f f f f f 1 1 f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 4 9 2 7 f 2 8 4 e e e 8 7 6 b f f 5 7 f e e 8 
b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b f f f f f f f f 1 f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e 4 e 9 7 9 9 f 2 9 4 5 5 5 e e 7 e b 9 f 5 f 7 e 8 
b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 4 e 9 6 4 2 9 f 5 5 5 5 2 7 7 2 e b f f f 5 7 e 8 
b b b 9 9 9 9 9 b b b b 9 9 9 b b b b b b b b f f f f f f f f f f f f f f f f f f f b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b e 9 7 7 6 f e 2 e 4 4 7 7 f f f 9 b 7 7 f f e 8 
b b 9 9 9 9 9 9 9 b b b 9 9 9 b b b b b b b f f f f f f f 1 1 1 f f f f f f f f f f 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b e e 9 9 9 9 9 e e e e e e f f 4 5 5 9 6 6 6 6 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b b b f f f f f f 1 1 1 1 f f f f f f f f f 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 b b b 9 b b e e e e e 5 5 5 5 5 8 8 e 5 5 e 4 4 7 8 8 8 f e e 
b b b 9 9 9 9 9 9 9 b 9 9 b b b b b b b f f f f f f f f 1 1 1 1 f f f f f f f f f b 9 9 9 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b 9 b b b 9 b b b b e e e e 8 8 8 8 e e e e e e e 2 2 e e e e e b 
b b b 9 9 9 9 9 9 9 9 9 b b b b b b f f f f f f f f f 1 1 1 1 1 f f f f f f f f f b b b 8 8 b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b 9 9 b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b 8 8 b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b 9 9 9 b b 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b 9 9 9 9 9 9 9 9 9 b b b f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b 9 9 9 9 9 b f f f f f f f f f f f f f f 1 1 1 1 f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b 9 9 9 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 8 8 8 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b f f f f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 9 9 b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
f 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 9 9 9 9 9 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
1 1 1 f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
`)
game.showLongText("Aprieta \"A\" O \"Espacio\" o \"Enter\" para empezar", DialogLayout.Bottom)
info.startCountdown(200)
Hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . . . 
. . . . . . . d . . . . c . c . 
. d . . . d d d d d d . c c c . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . c . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b b b b b b b . . . . . 
. . . . b c c c c c b . . . . . 
. . . . b b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let Animacion1 = animation.createAnimation(ActionKind.Walking, 50)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . . . 
. . . . . . . d . . . . c . c . 
. d . . . d d d d d d . c c c . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . c . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b b b c b b b . . . . . 
. . . . b b b c b b b . . . . . 
. . . . b b b c b b b . . . . . 
. . . . . . . . . . . . . . . . 
`)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . c . 
. . . . . . . d . . . . . . c c 
. d . . . d d d d d d . . c c . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . . . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b b b b c b b . . . . . 
. . . . b b c c b b b . . . . . 
. . . . b c b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . c . 
. . . . . . . d . . . . . . c c 
. d . . . d d d d d d . . c c . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . . . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b b b b c b b . . . . . 
. . . . b b c c b b b . . . . . 
. . . . b c b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . . . 
. . . . . . . d . . . . . . . . 
. d . . . d d d d d d . . . c c 
. . d d d d c 2 c d d d d c c . 
. d . . . d c c c d . . . . c c 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b c b b b b b . . . . . 
. . . . b b c c c b b . . . . . 
. . . . b b b b b c b . . . . . 
. . . . . . . . . . . . . . . . 
`)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . c . 
. . . . . . . d . . . . . . c c 
. d . . . d d d d d d . . c c . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . . . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b b b b c b b . . . . . 
. . . . b b c c b b b . . . . . 
. . . . b c b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . c . c . 
. . . . . . . d . . . . c c c . 
. d . . . d d d d d d . . c . . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . . . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b b b b b b b . . . . . 
. . . . b c c c c b b . . . . . 
. . . . b b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`)
Animacion1.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . 1 1 d 1 1 . . . . . . 
. . . . . 1 f d 1 f . . . . . . 
. . . . . d d f f d . . . . c . 
. . . . . . . d . . . . . . c c 
. d . . . d d d d d d . . c c . 
. . d d d d c 2 c d d d d c . . 
. d . . . d c c c d . . . . . . 
. . . . . d c c c d . . . . . . 
. . . . . b b b b b . . . . . . 
. . . . b c b b b b b . . . . . 
. . . . b b c c c b b . . . . . 
. . . . b b b b b c b . . . . . 
. . . . . . . . . . . . . . . . 
`)
animation.attachAnimation(Hero, Animacion1)
Hero.ay = 350
info.setLife(5)
scene.cameraFollowSprite(Hero)
SiguienteNivel = 0
levels = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 
. . . . . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 
. 9 . . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 4 
. . . . . . . . 7 7 . . . . 7 . . . . . 7 7 7 . . . . . . . . 7 7 7 7 7 . . . . . . . . . 7 . . . 4 
. . . . 7 7 7 . . . . 7 7 . . . . . . . . . . 7 7 7 . . . 7 . . . . . . . 7 . . 1 . . . . . 7 . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 . . . . . 4 
7 7 7 7 7 7 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 
`]
EmpiezaNivel()
controller.moveSprite(Hero, 100, 0)
forever(function () {
    music.playMelody("F C5 A E B G D C5 ", 130)
})
