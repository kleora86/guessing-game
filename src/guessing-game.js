class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minNumber = min;
        this.maxNumber = max;
    }

    guess() {
        return Math.round((this.maxNumber + this.minNumber) / 2);
    }

    lower() {
        this.maxNumber = Math.round((this.maxNumber + this.minNumber) / 2);
    }

    greater() {
        this.minNumber = Math.round((this.maxNumber + this.minNumber) / 2);
    }
}

module.exports = GuessingGame;
