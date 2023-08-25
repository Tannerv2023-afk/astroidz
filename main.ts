namespace MultiplayerState {
    export const Statusbar = MultiplayerState.create()
}
mp.onControllerEvent(ControllerEvent.Connected, function (player2) {
    if (mp.getPlayerProperty(player2, mp.PlayerProperty.Number) == 1) {
        mp.setPlayerSprite(player2, sprites.create(img`
            ..ccc.........fffffff...
            ..f4cc.......ffcc22ff...
            ..f44cc...fffccccfff....
            ..f244cccc22224442cc....
            ..f224cc2222222244b9c...
            ..cf2222222222222b999c..
            .c22c222222222b11199b2c.
            f22ccccccc222299111b222c
            fffffcc222c222222222222f
            .....f2222442222222222f.
            ....f222244fc2222222ff..
            ...c222244ffffffffff....
            ...c2222cfffc2f.........
            ...ffffffff2ccf.........
            .......ffff2cf..........
            ........fffff...........
            `, SpriteKind.Player))
    } else if (mp.getPlayerProperty(player2, mp.PlayerProperty.Number) == 2) {
        mp.setPlayerSprite(player2, sprites.create(img`
            ..fff.........ffffff....
            ..f88f.......ff8888f....
            ..f888f...fff888888f....
            ..f8888fff888888888f....
            ..f888888888888888b9f...
            ..ff8888888888888b999f..
            .f888888888888b11199b8f.
            f888888888888899111b888f
            fffff888888888888888888f
            .....f8888888888888888f.
            ....f888888f88888888ff..
            ...f888888ffffffffff....
            ...f88888fff88f.........
            ...ffffffff888f.........
            .......ffff88f..........
            ........fffff...........
            `, SpriteKind.Player))
    } else if (mp.getPlayerProperty(player2, mp.PlayerProperty.Number) == 3) {
        mp.setPlayerSprite(player2, sprites.create(img`
            ..fff.........fffffff...
            ..f55f.......ff5555ff...
            ..f555f...fff5555fff....
            ..f5555fff555555555f....
            ..f555555555555555b9f...
            ..ff5555555555555b999f..
            .f555555555555b11199b5f.
            f555555555555599111b555f
            fffff555555555555555555f
            .....f5555555555555555f.
            ....f555555f55555555ff..
            ...f555555ffffffffff....
            ...f55555fff55f.........
            ...ffffffff555f.........
            .......ffff55f..........
            ........fffff...........
            `, SpriteKind.Player))
    } else if (mp.getPlayerProperty(player2, mp.PlayerProperty.Number) == 4) {
        mp.setPlayerSprite(player2, sprites.create(img`
            ..fff.........fffffff...
            ..f77f.......ff7777ff...
            ..f777f...fff7777fff....
            ..f7777fff77777777ff....
            ..f777777777777777b9f...
            ..ff7777777777777b999f..
            .f777777777777b11199b7f.
            f777777777777799111b777f
            fffff777777777777777777f
            .....f7777777777777777f.
            ....f777777f77777777ff..
            ...f777777ffffffffff....
            ...f77777fff77f.........
            ...ffffffff777f.........
            .......ffff77f..........
            ........fffff...........
            `, SpriteKind.Player))
    }
    mp.setPlayerState(player2, MultiplayerState.life, 3)
    mp.moveWithButtons(player2)
    mp.getPlayerSprite(player2).setStayInScreen(true)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mp.getPlayerSprite(player2), 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.life, -1)
    scene.cameraShake(4, 500)
    otherSprite.destroy()
})
let Bogey: Sprite = null
let projectile: Sprite = null
music.play(music.createSong(hex`007c000408040400001c00010a006400f401640000040000000000000000000000000005000004ae000200040001570400050001160800090001140c000e0001161000120001571400160001161600180001141a001c00010d2c002e00014b2e003000014b30003100010f32003300010f34003600014b36003700010d3c003e0001084200430001574400450001164800490001144c004d00011650005100015756005700011b5c005d0001196c006d00014b6e006f00014b70007100010f72007300010f74007500014b7600770001117c007d00010d05001c000f0a006400f4010a000004000000000000000000000000000000000272000c000d00010d14001500010d1a001b00010d20002100010d2e002f00010c30003100010f32003300010f36003700010d3c003d0001084c004d00010d54005500010d5a005b00010d60006100010d6c006d00014b6e006f00014b70007100010f72007300010f7600770001117c007d00010d06001c00010a006400f4016400000400000000000000000000000000000000025a0000000100020d190c000e00020d1914001600020d191a001c00020d1920002200020d192c002e00020d193c003e00010840004100020d194c004d00020d1954005500020d195a005b00020d1960006100020d196c006e00020d1909010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8009c0100000100020e050200030001050400050001050600070001050800090002050a0a000b0001050c000d000202050e000f000106100011000105120013000105140015000202061600170001061800190002050a1a001b0001051c001d0001071e001f000107200021000202052200230001052400250001052600270001052800290002050a2a002b0001052c002d000202052e002f00010530003100010632003300010734003500020106360037000201073800390002050a3a003b000201053c003d000201063e003f0002010740004100020e054200430001054400450001054600470001054800490002050a4a004b0001054c004d000202054e004f000105500051000105520053000105540055000202055600570001055800590002050a5a005b0001055c005d0001055e005f000105600061000202056200630001056400650001056600670001056800690002050a6a006b0001056c006d000202056e006f0001057000710002010672007300010774007500020106760077000201077800790001077a007b000201057c007d000201077e007f00020107`), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(500, function () {
    Bogey = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    Bogey.setVelocity(-100, 0)
    Bogey.setPosition(160, randint(5, 115))
    Bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
