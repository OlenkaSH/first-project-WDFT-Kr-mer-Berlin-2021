class Game {
    constructor () {
        this.backGround = new Background()
        this.backgroundImages

    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/1.png') }
        ]

    }




    draw() {
        console.log('game drowing')

        this.background.draw()
    }
    
}