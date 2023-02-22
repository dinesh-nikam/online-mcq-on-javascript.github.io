
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


function populate() {
    if (quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    //unit 01

    new Question("javascript is invented by____", ["James Gosling", "helsinki,linus", "Brendan Fich", "W3 Group"], "Brendan Fich"),
    new Question("Microsoft developed a compatible dialect of JavaScript called___", ["Jscript", "MS JavaScript", "MJavaScript", "Advanced JavaScript"], "Jscript"),
    new Question("Which type of JavaScript language is ___", ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"], "Object-Based"),
    new Question("Which one of the following also known as Conditional Expression?", ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"], "immediate if"),
    new Question("In JavaScript, what is a block of statement?", ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"], "block that combines a number of statements into a single compound statement"),
    new Question("When interpreter encounters an empty statement, what it will do:", ["Shows a warning", "Prompts to complete the statement", "Throws an error", "Ignores the statements"], "Ignores the statements"),
    new Question("The 'function' and ' var' are known as:", ["Keywords", "Data types", "Declaration statements", "Prototypes"], "Declaration statements"),
    new Question("Which of the following variables takes precedence over the others if the names are the same?", ["Global variable", "The local element", "The two of the above", "None of the above"], "The local element"),
    new Question("Which one of the following is the correct way for calling the JavaScript code?", ["Pre-processor", "Triggering Event", "RMI", "Function/Method"], "Function/Method"),
    new Question("In JavaScript the x===y statement implies that:", ["Both x and y are equal in value, type and reference address as well", "Both are x and y are equal in value only.", "Both are equal in the value and data type.", "Both are not same at all."], "Both are x and y are equal in value only."),
    new Question("Which one of the following statement is most suitable to check if the patternmatches with the sting 'text'?", ["test(text)", "equals(pattern)", "test(pattern)", "text==pattern"], "text==pattern"),
    new Question(" Which one of the following is a ternary operator?", ["?", ":", "-", "+"], "?"),
    //new Question("Which one of the following symbols is used for creating comments in the JavaScript?", ["\\", "//", "\**\", "\**/"], ")
    new Question("What are the three important manipulations for a loop on a loop variable?", ["Updation, Incrementation, Initialization", "Initialization, Testing, Incrementation", "Testing, Updation, Testing", "Initialization, Testing, Updation"], "Initialization, Testing, Updation"),
    new Question("The external JavaScript file must contain <script> tag. True or False?", ["True", "False", "", ""], "False"),
    //unit 02
    new Question("What method would you use to create a string from array elements and separate those elements with a hyphen?", ["shift()", "join()", "concat()", "strjoin()"], "join()"),
    new Question("What method is used to remove an element from the bottom of an array?"["push()", "pop()", "reverse()", "shift()"], "pop()"),
    new Question("What method is used to remove the first element from an array?", ["push()", "pop()", "reverse()", "shift()"], "shift()"),
    new Question("What method is used to place a new element at the end of an array?", ["push()", "pop()", "reverse()", "shift()"], "push()"),
    new Question("True or False. The length of an array is equal to the index of the last element of the array.", ["True", "False", "-", "-"], "False"),
    new Question("Which of the following method can’t be used to add array elements in JavaScript.", ["push()", "shift( )", "splice( )", "All are can be used"], "splice( )"),
    new Question("What method is used to create a new array using elements of another array?", ["slice()", "div()", "splice()", "shift()"], "slice()"),
    new Question("If an array with five elements a=[1,2,3,4,5]; what will do the expression a.length=0", ["checks length of array is 0 or not", "deletes all elements", "replaces all elements with 0", "adds 0 at the beginning"], "deletes all elements"),
    new Question("True or False. A delimiter string is used by the split() method to create an array of data elements.", ["True", "False"], "True"),
    new Question("True or False. The first character of a string array is string[1].", ["True", "False"], "False"),
    new Question("Which of the following function of String object returns the character at the specified index?", ["charAt()", "charCodeAt()", "concat()", "indexOf()"], "charAt()"),
    new Question("A Float is", ["An integer", "A whole number", "A decimal value", "A Unicode number"], "A decimal value"),
    new Question("What method would you use to divide a string of data delimited by a comma into an array of data?", ["parseFloat()", "split()", "parseInt()", "charCodeAt()"], "split()"),
    new Question("Which of the following function of String object returns the index within the calling String object of the first occurrence of the specified value?", ["substr()", "search()", "LastIndexOf()", "indexOf"], "indexOf"),
    new Question("The end position argument in the substring() method indicates what?", ["The position of the last character that is copied into the substring", "The position of the first character that is copied into the substring", "The position of the character following the last character that is copied into the substring", "The position of the character preceding the last character in the substring"], "The position of the last character that is copied into the substring"),
    new Question("Unicode is", ["A string that contains a numeric value", "A numeric value that represents characters, numbers, and symbols that can be displayed on the screen", "The end position used by the substr() method", "The end position used by the substring() method"], "A numeric value that represents characters, numbers, and symbols that can be displayed on the screen"),
    new Question("The second argument in the substr() method indicates what?", ["The position of the last character that is copied into the substring", "The number of characters that are to be copied from the string to the substring", "The position of the character preceding the last character that is copied into the substring", "The position of the character preceding the last character in the substring"], "The number of characters that are to be copied from the string to the substring"),
    new Question("True or False. The parseInt() method cannot be used with a mixed number (whole number and decimal).", ["True", "False"], "False"),
    new Question("What is the length value of a string object?", ["The total number of characters in the string", "The index of the last character in the string", "The length of the string minus spaces", "The length of the string minus trailing spaces"], "The total number of characters in the string"),
    new Question("True or False. The index of the last element in the string array is the same value as the string length.", ["True", "False"], "False"),
    new Question("True or False. A comma must separate arguments in a function definition.", ["True", "False", "", ""], "True"),
    new Question("A code block is used in a", ["Function call", "Function definition", "Return value", "Argument"], "Function definition"),
    new Question("The scope of a variable means", ["The size of the variable", "The data type of the variable", "The portion of a JavaScript that can access the variable", "The variable is used as a return value for a function"], "The portion of a JavaScript that can access the variable"),
    new Question("True or False. The statement that calls a function can ignore a value returned by a function.", ["True", "False"], "True"),
    new Question("A global variable can be accessed", ["Only by functions defi ned within the JavaScript", "Only outside of a function", "Only by the function that defi ned it", "From anywhere in the JavaScript"], "From anywhere in the JavaScript"),
    new Question("A local variable can be accessed", ["Only by functions defined within the JavaScript", "Only outside of a function", "Only by the function that defined it", "From anywhere in the JavaScript"], "Only by the function that defined it"),
    new Question("True or False. A function can be called by HTML code in a web page.", ["True", "False", "", ""], "True"),
    new Question("True or False. All functions must be defined in the tag.", ["True", "False", "", ""], "False"),
    new Question("True or False. Values passed to a function must correspond to the data type of arguments in the function definition.", ["True", "False"], "True"),
    new Question("A variable is out of scope when", ["The statement that calls a function ignores the value returned by the function", "The variable cannot be accessed by a statement", "A variable isn’t defi ned in a function", "A variable is passed to a function"], "The variable cannot be accessed by a statement"),
    //unit 03
    new Question("True or False. A check box is an element of a form.", ["True", "False", "", ""], "True"),
    new Question("What event occurs when an element comes into focus?", ["onblur", "onfocus", "onselect", "onchange"], "onfocus"),
    new Question("True or False. Values of an element cannot be changed once a user clicks the Submit button.", ["True", "False"], "True"),
    new Question("What is the program that processes a form?", ["Common Gateway Interface", "Common Program Interface", "Common Web Server Interface", "Common Web Server Gateway"], "Common Gateway Interface"),
    new Question("HTML Form elements are also called as", ["controls", "widgets", "button", "identifier"], "controls"),
    new Question("Which of the following are methods of form", ["reset()", "submit()", "both a and b", "none of the above"], "both a and b"),
    new Question("What is correct syntax of getElementById()", ["Var element =document. getElementById();", "element =document. getElementById(id);", "element =document. getelementbyId(id);", "element =document. getElementById();"], "element =document. getElementById(id);"),
    new Question("True or False  Initially Textarea is set at Read-only", ["True", "False", "", ""], "True"),
    new Question("Which is single line edit control", ["Text", "Textarea", "button", "Checkbox"], "Text"),
    new Question("Checkbox contain only two state true or false", ["True", "False", "", ""], "True"),
    new Question("When Keyup event occur", ["When key is pressed down", "When key is released", "When character key is pressed", "None of the above"], "When key is released"),
    new Question("The onmouseout event in javascript is used when", ["Mouse button is released", "Mouse button is pressed", "Mouse button is move over the element", "Mouse button is moved away  from element"], "Mouse button is moved away  from element"),
    new Question("What event occurs when an element loses focus?", ["onblur", "onfocus", "onselect", "onchange"], "onblur"),
    new Question(" What event occurs when a user highlights text in a text field?", ["onblur", "onfocus", "onselect", "onchange"], "onselect"),

    //unit 04
new Question("Cookies were originally designed for __________", ["Client-side programming", "Server-side programming", "Both Client-side & Server-side programming", "Web programming"], "Server-side programming"), 
new Question("The Cookie manipulation is done using which property?", ["cookie", "cookies", "manipulate", "modify"], "cookie"),
new Question("Which is the property that represents the content displayed in the window?", ["document", "content", "window", "frame"], "document"),
new Question("Which attribute is used to extend the lifetime of a cookie?", ["higher-age", "increase-age", "max-age", "lifetime"], "max-age"),
new Question("Which of the following defines the Cookie visibility?", ["domain Path", "local & session storage", "server storage", "transient Path"], "local & session storage"),
new Question("Which identifier is used to represent a web browser window or frame?", ["frames", "window", "location", "frame"], "window"),
new Question("How can you set a Cookie visibility scope to localStorage?", ["/", "%", "*", "//"], "/"), 
new Question("Which Window object method is used to display a message in a dialog box?", ["alert()", "prompt()", "message()", "console.log"], "alert()"), 
new Question("Which of the following function is used as a consequence of not including semicolons, commas or whitespace in the Cookie value?", ["encodeURIComponent()", "encodeURI()", "encodeComponent()", "encode()"], "encodeURIComponent()"),
new Question("What is the constraint on the data per cookie?", ["2 KB", "1 KB", "4 KB", "3 KB"], "4 KB"), 
new Question("Which object is the main entry point to all client-side JavaScript features and APIs?", ["Standard", "Location", "Window", "Position"], "Window"),








    //unit 05
    new Question("What would be the result of the following statement in JavaScript using regular expression methods?", ["Returns [“123″”456″”789”]", "Returns [“123″,”456″,”789”]", "Returns [1,2,3,4,5,6,7,8,9]", "Throws an exception"], "Returns [“123″,”456″,”789”]"),
    new Question("The regular expression to match any one character not between the brackets is ", ["[…]", "[^]", "[^…]", "[D]"], "[^…]"),
    new Question("What does /[^(]* regular expression indicate ?", ["Match one or more characters that are not open paranthesis", "Match zero or more characters that are open paranthesis", "Match zero or more characters that are not open paranthesis", "Match one or more characters that are open paranthesis"], "Match zero or more characters that are not open paranthesis"),
    //new Question("What will be the result when non greedy repetition is used on the pattern /a+?b/ ?", ["Matches the letter b preceded by the fewest number of a's possible", "Matches the letter b preceded by any number of a", "Matches letter a preceded by letter b, in the stack order", "None of the mentionen"])
    new Question("What does the subexpression /java(script)?/ result in ?", ["It matches 'java' followed by the optional 'script' ", "It matches 'java' followed by any number of 'script' ", "It matches 'java' followed by a minimum of one 'script' ", "None of the mentioned"], "It matches 'java' followed by the optional 'script'"),
    new Question("The method that performs the search-and-replace operation to strings for pattern matching is", ["searchandreplace()", "add()", "edit()", "replace()"], "add()"),
    new Question("The Crockford's subset doesnot include which function in JavaScript?", ["eval()", "coeval()", "equal()", "equivalent()"], "eval()"),
    new Question("Why does JavaScript subset disallow == and !=?", ["It uses bitwise checking", "It uses === and !== instead", "It uses equals() and notequals() instead", "None of the mentioned"], "It uses === and !== instead"),
    new Question("---- have special meaning when used in the context of regular expressions", ["dot", "comma", "bracket", "underscore"], "bracket"),
    new Question("what are used for to find the sequence contain in text", ["qualifier", "moderator", "opertor", "range character"], "qualifier"),
    new Question("which statement is used to check the given string with the pattern", ["if(p.test{str})", "if(p.teststr)", "if(p.test(str));", "if(p.test(str))"], "if(p.test(str))"),
    new Question("we can add an event to the HTML elements by using ------", ["addEventListener", "addEvent", "addEvent;", "removeEventListener"], "addEventListener"),
    new Question("nested documents inside the HTML documents can be created using----", ["nest", "frame", "iframe", "into"], "iframe"),
    new Question("when mouse is moved to any element of webpage,the appearance of that element will be changed.it is also called as", ["mouse", "mouseover", "frameover", "none of these"], "mouseover"),
    new Question("When the cursor of mouse is moved away from text then the function is called", ["onmouseout", "onmouseover", "onmousein", "none of these"], "onmouseout"),

];
// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
