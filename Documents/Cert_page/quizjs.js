//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 const questions = [
    {
        question: "Nombre del adaptador que se conecta con el fsp?",
        optionA: "Tejas",
        optionB: "Dusty",
        optionC: "Beard",
        optionD: "Novalink",
        correctOption: "optionC"
    },

    {
        question: "Nombre de la planar principal ?",
        optionA: "Dusty",
        optionB: "Gibbons",
        optionC: "Novalink",
        optionD: "Eliminator",
        correctOption: "optionB"
    },

    {
        question: "Locacion fisica para el adaptador que conecta con el FSP ?",
        optionA: "P2-C4",
        optionB: "P2-C1",
        optionC: "P1-C1",
        optionD: "P1-C4",
        correctOption: "optionC"
    },

    {
        question: "Locacion fisica de los procesadores?",
        optionA: "C49-C50",
        optionB: "C47-C48",
        optionC: "C44-C43",
        optionD: "C18-C19",
        correctOption: "optionB"
    },

    {
        question: "Locacion fisica de las controladoras SAS ?",
        optionA: "C49-C50",
        optionB: "C47-C48",
        optionC: "C44-C43",
        optionD: "C18-C19",
        correctOption: "optionA"
    },

    {
        question: "Nombre de la DASD backplane para ZZ 2U?",
        optionA: "Fandano",
        optionB: "Deguello",
        optionC: "Antenna",
        optionD: "Eliminator",
        correctOption: "optionA"
    },

    {
        question: "Nombre de la DASD backplane de bajo rendimiento para ZZ 4U",
        optionA: "Fandango",
        optionB: "Deguello",
        optionC: "Antenna",
        optionD: "Eliminator",
        correctOption: "optionB"
    },

    {
        question: "Nombre de la DASD backplane de alto rendimiento para ZZ 4U",
        optionA: "Fandango",
        optionB: "Deguello",
        optionC: "Antenna",
        optionD: "Eliminator",
        correctOption: "optionD"
    },

    {
        question: "Cual es la maxima capacidad de unidades de disco duro que soporta la DASD backplane Fandango?",
        optionA: "18",
        optionB: "12",
        optionC: "8",
        optionD: "16",
        correctOption: "optionC"
    },

    {
        question: "Cual es la maxima capacidad de unidades de disco duro que soporta la DASD backplane Eliminator",
        optionA: "18",
        optionB: "12",
        optionC: "8",
        optionD: "16",
        correctOption: "optionA"
    },

    {
        question: "Cual es el nombre de la controladora SAS que se necesita para la configuracion de la DASD backplane Eliminator?",
        optionA: "Coupe",
        optionB: "GXP",
        optionC: "Solstice",
        optionD: "Futura",
        correctOption: "optionB"
    },

    {
        question: "Cual es la maxima capacidad de unidades de disco duro que soporta la DASD backplane Antenna?",
        optionA: "18",
        optionB: "12",
        optionC: "8",
        optionD: "16",
        correctOption: "optionB"
    },


    {
        question: "Cual es la confiuracion minima de procesadores y memorias dimm para un ZZ?",
        optionA: "2 procesadores, 4 dimms",
        optionB: "1 procesador, 4 dimms",
        optionC: "1 procesador, 2 dimms",
        optionD: "2 procesadores, 2 dimms",
        correctOption: "optionC"
    },

    {
        question: "Cuales son las locaciones fisicas para la configuracion minima de un ZZ?",
        optionA: "C48, C25, C41",
        optionB: "C48, C26, C42",
        optionC: "C47, C18, C34",
        optionD: "C47, C17, C33",
        correctOption: "optionD"
    },

    {
        question: "Cual es la locacion fisica de la tarjeta VPD?",
        optionA: "P1-C14",
        optionB: "P1-C12",
        optionC: "P1-C13",
        optionD: "P1-C2",
        correctOption: "optionc"
    },
    /*
    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }
    */
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = ""
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "lightgray"
            document.getElementById(correctOption).style.backgroundColor = ""
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}