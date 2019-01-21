export class RandomHelper{
    constructor(){

    }
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    getRandomRange(min,max){
        return Math.floor(Math.random() * (max - min) + min);

    }
    coinFlip() {
        return (Math.floor(Math.random() * 2) == 0)
    }
}

export var randomHelper = new RandomHelper();
