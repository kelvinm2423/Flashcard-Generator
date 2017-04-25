var basic = function(front, back) {
    this.front = front;
    this.back = back;

}

basic.prototype.printCard = function() {
    console.log('Front: ' + this.front + ', ' + 'Back: ' + this.back);
};

basic.prototype.printFront = function() {
    console.log(this.front);

}


basic.prototype.printAnswer = function() {
    console.log('Sorry, the correct answer is ' + this.back + '.');
}

module.exports = basic;