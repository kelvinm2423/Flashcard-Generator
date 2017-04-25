var cloze = function(text, cloze) {

    this.text = text;
    this.cloze = this.text.match[1];
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    this.message = this.text.replace('(' + this.cloze + ')', '________');

}

cloze.prototype.printAnswer = function() {

    console.log('Incorrect. Here is the full sentence: \n' + this.text.replace(, ''));
}

module.exports = cloze;
