$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);
            //				$('.timer').html(countdownTimer.time);
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };
   
    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'What year did the Seattle Seahawks join the NFL?',
        possibleAnswers: ['A. 1976',
            'B. 2002',
            'C. 1995',
            'D. 1968'],
        flags: [true, false, false, false],
        answer: 'A. 1976'
    };

    var q2 = {
        question: 'Who coached the Seahawks to their first post-season appearance?',
        possibleAnswers: ['A. MIKE HOLMGREN',
            'B. CHUCK KNOX',
            'C. JACK PATERA',
            'D. PETE CARROLL'],
        flags: [false, true, false, false],
        answer: 'B. CHUCK KNOX'
    };

    var q3 = {
        question: 'Which Seahawks RB was nicknamed "Beast Mode?',
        possibleAnswers: ['A. CHRIS WARREN',
            'B. MARSHAWN LYNCH ',
            'C. CURT WARNER ',
            'D. SHAUN ALEXANDER'],
        flags: [false, true, false, false],
        answer: 'B. MARSHAWN LYNCH'
    };

    var q4 = {
        question: 'WHO WAS THE FIRST SEATHAWK TO WIN THE NFL MVP AWARDS?',
        possibleAnswers: ['A. SHAUN ALEXANDER  ',
            'B. RICHARD SHERMAN',
            'C. RUSSELL WILSON',
            'D. STEVE LARGENT'],
        flags: [true, false, false, false],
        answer: 'A. SHAUN ALEXANDER'
    };

    var q5 = {
        question: 'What nickname for the Seahawks secondary was coined in 2011?',
        possibleAnswers: ['A. THE PURPLE PEOPLE EATER',
            'B. LEGION OF BOOM',
            'C. THE KILLERS',
            'D. DOOM PATROL'],
        flags: [false, true, false, false],
        answer: 'B. LEGION OF BOOM'
    };

    var q6 = {
        question: 'In what round of the NFL draft was cornerback Richard Sherman drafted?',
        possibleAnswers: ['A. FIFTH ROUND',
            'B. FIRST ROUND',
            'C. SEVENTH ROUND',
            'D. THIRD ROUND'],
        flags: [true, false, false, false],
        answer: 'A. FIFTH ROUND'
    };

    var q7 = {
        question: 'What player did the Seahawks acquire from the Houston Oilers in 1976 for an eighth-round draft pick?',
        possibleAnswers: ['A.KENNY EASLEY',
            'B. WALTER JONES',
            'C. STEVE LARGENT',
            'D. CORTEZ KENNEDY'],
        flags: [false, false, true, false],
        answer: 'C. STEVE LARGENT'
    };

    var q8 = {
        question: 'Which player holds the team record for longest kick return?',
        possibleAnswers: ['A. LEON WASHINGTON',
            'B. TYLER LOCKETT',
            'C. STEVE BROSSAURD',
            'D. CHRIS WARREN'],
        flags: [false, true, false, false],
        answer: 'B. TYLER LOCKETT'
    };

    var q9 = {
        question: 'What player broke nine tackles on a 67-yard touchdown run during a Wild Card game?',
        possibleAnswers: ['A. CORTEZ KENNEDY',
            'B. SHAUN ALEXANDER',
            'C. CHRIS WARREN',
            'D. MARSHAWN LYNCH'],
        flags: [false, false, false, true],
        answer: 'D. MARSHAWN LYNCH'
    };

    var q10 = {
        question: 'Who did the Seahawks defeat to win their first Super Bowl?',
        possibleAnswers: ['A. PATRIOTS',
            'B. BRONCOS',
            'C. STEELERS',
            'D. BILLS'],
        flags: [false, true, false, false],
        answer: 'B. BRONCOS'
    }

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
        //  getAnswer();  
        //  nextQuestion(index);
    }

    //function nextQuestion() {
    //	index = index++;
    //	console.log(index);
    //}

    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {

        //  nextQuestion();
        $('.answerchoice').on('click', function () {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }
    //		for (var i=0; i<questionArray.length; i++) {
    //			$('.question').append('<p>'+questionArray[i].question+'</p>');
    //			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
    //				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
    //			}
    //			$('#possibleAnswers').on('click', function() {


    //		console.log("click");
    //		countdownTimer.start();
    //		for (var i = 0; i < questionArray.length; i++) {
    //			console.log(i);

    //			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
    //			$('.question').html(questionArray[i].question);
    //			while (countdownTimer != 0) {

    //			}

    //	});
    //	$('#startButton').click(countdownTimer.start);

    //}
    setup();
    $('.answerchoice').on('click', function () {
        console.log($(this));
        if (this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if (this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });


    //	$('#start').click(countdownTimer.start);
});