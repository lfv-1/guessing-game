class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round((this.min + this.max) / 2)
        return this.result
    }

    lower() {
        this.max = this.result
        this.guess()
    }

    greater() {
        this.min = this.result
        this.guess()
    }
}

module.exports = GuessingGame;
