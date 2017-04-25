// //PseudoCode
// Basic flashcard - front(argument): question, back(argument): answer
// Cloze Card - front(text argument): , back(cloze argument):
//  - cloze-depleted portion of the text
//  - shows the partial text
//  - shows the full text
//  - log an error
//  You have to use prototypes

//import cards into main program
var basic = require("./basic");
var cloze = require("./cloze");
var inquirer = require("inquirer");
var fs = require("fs");
var correct = 0;
var wrong = 0;
var cardArray = [];

// flashcard beginning node 
var flashcards = function() {

        inquirer.prompt([{

                type: 'list',
                name: 'userType',
                message: 'What would you like to do?',
                choices: ['create-basic-cards', 'create-cloze-cards', 'basic-quiz', 'cloze-quiz', 'quit']
            }

        ]).then(function(choice) {

            if (choice.userType === 'create-basic-cards') {
                readCards('questions.txt');
                createCards(basicPrompt, 'questions.txt');
            } else if (choice.userType === 'create-cloze-cards') {
                readCards('questions.txt');
                createCards(clozePrompt, 'questions.txt');
            } else if (choice.userType === 'basic-quiz') {
                quiz('questions.txt', 0);
            } else if (choice.userType === 'cloze-quiz') {
                quiz('questions.txt', 0);
            } else if (choice.userType === 'quit') {
                console.log('Good study session!');
            }
        });
    }

var writeToLog = function(logFile, info) {

    fs.writeFile(logFile, info, function(err) {
        if (err)
            console.error(err);
    });
}

var basicPrompt = [{
    name: "front",
    message: "Enter Front of Card: "
}, {
    name: "back",
    message: "Enter Back of Card: "

}, {
    type: 'confirm',
    name: 'makeMore',
    message: 'Create another card (hit enter for YES)?',
    default: true
}]

var clozePrompt = [{
    name: "text",
    message: "Enter a sentence, putting the word you want to hide in parentheses, like this: 'I cannot tell a (lie)'",
    validate: function(value) {
        var parentheses = /\(\w.+\)/;
        if (value.search(parentheses) > -1) {
            return true;
        }
        return 'Please put a word in your sentence in parentheses'
    }
}, {
    type: 'confirm',
    name: 'makeMore',
    message: 'Create another card (hit enter for YES)?',
    default: true
}]

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); 

flashcards();