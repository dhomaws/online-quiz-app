function goHome() {
    hideAll();
    document.getElementById('homePage').style.display = 'block';
}

function goLessons() {
    hideAll();
    document.getElementById('lessonsPage').style.display = 'block';
}

function goExamples() {
    hideAll();
    document.getElementById('examplesPage').style.display = 'block';
}

function goQuiz() {
    hideAll();
    document.getElementById('quizPage').style.display = 'block';
}

function hideAll() {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('lessonsPage').style.display = 'none';
    document.getElementById('examplesPage').style.display = 'none';
    document.getElementById('quizPage').style.display = 'none';
}

function openLesson(lessonId) {
    var lessons = document.getElementsByClassName('lesson-content');
    for (var i = 0; i < lessons.length; i++) {
        lessons[i].style.display = 'none';
    }
    document.getElementById(lessonId).style.display = 'block';
}

function openExample(exampleId) {
    var examples = document.getElementsByClassName('example-content');
    for (var i = 0; i < examples.length; i++) {
        examples[i].style.display = 'none';
    }
    document.getElementById(exampleId).style.display = 'block';
}

function checkAnswers() {
    var totalQuestions = 15;
    var userAns = document.querySelectorAll('input:checked');
    
    if (userAns.length < totalQuestions) {
        alert("Please answer all 15 questions before getting the score!");
        return;
    }

    var score = 0;

    for(var i = 0; i < userAns.length; i++) {
        score = score + parseInt(userAns[i].value);
    }

    var allOptions = document.querySelectorAll('input[type="radio"]');

    for (var i = 0; i < allOptions.length; i++) {
        var radio = allOptions[i];
        var parentLabel = radio.parentElement;

        parentLabel.style.color = "#333";
        parentLabel.style.fontWeight = "normal";

        if (radio.value == "1") {
            parentLabel.style.color = "#27ae60";
            parentLabel.style.fontWeight = "bold";
            parentLabel.innerHTML = parentLabel.innerHTML.replace(" ✓", "") + " ✓"; 
        }

        if (radio.checked && radio.value == "0") {
            parentLabel.style.color = "#c0392b";
            parentLabel.style.fontWeight = "bold";
            parentLabel.innerHTML = parentLabel.innerHTML.replace(" ✗", "") + " ✗";
        }
    }

    var result = document.getElementById('myScore');
    result.innerHTML = "Your Score: " + score + " / " + totalQuestions;

    if(score === 15) {
        result.style.color = "green";
        result.innerHTML += " <br>(Perfect! You are a Java Master)";
    } else if (score >= 10) {
        result.style.color = "#2980b9";
        result.innerHTML += " <br>(Great Job! You have a good understanding)";
    } else {
        result.style.color = "#c0392b";
        result.innerHTML += " <br>(Don't give up! Keep practicing)";
    }
}
