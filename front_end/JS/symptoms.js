/*A JavaScript to provide basic symptoms diagnostics for user*/
function symptomsQuestion() {
    const questSegments = [
        "Segment1",
        "Segment2",
        "Segment3",
        "Segment4"
    ];
    /*function to loop through questions and user answer*/
    for (let i = 0; i < questSegments.length; i++) {
        const segmentQuestions = window[`${questSegments[i].replace(/\s/g, '')}Questions`];
        if (segmentQuestions && Array.isArray(segmentQuestions)) {
            const segAnswers = askQuestion(segmentQuestions);
            console.log(`${questSegments[i]} Answers:`, segAnswers);
        }
    }
}


/*Functions to ask question for given segments*/
function askQuestion(questions) {
    let answers = [];

    for (let i = 0; i < questions.length; i++) {
        const ans = checkBoxprompt(questions[i].question);
        answers.push({
            question: questions[i].question, ans });
    }

    return answers;
}

/*Function to create checkbox answers*/
function checkBoxprompt(question) {
    const options = ["Frequently", "Moderately", "Not distracted", "Sometime"];
    let answer = prompt(`${question}\n\n${generateCheckboxOptions(options)}`);
    return answer;
}

/*Function to creat Html for checkbox*/
function generateCheckboxOptions(options) {
    let checkboxesHTML = "";
    for (let i = 0; i < options.length; i++) {
        checkboxesHTML += `<input type="checkbox" id="${options[i]}" name="${options[i]}">
                           <label for="${options[i]}">${options[i]}</label><br>`;
    }
    return checkboxesHTML;
}

/*Questions for Each Segment as defined by name*/
const Segment1 = [
    { question: "How easily do you get distracted by unrelated issues?"},
    { question: "How often do you Struggles to stay focused on tasks or activities? "},
    { question: "How often do you Make frequent errors due to lack of attention to detail?"},
    { question: "How Frequently do you forgets routine tasks or appointments?" },
    { question: "Do you have difficulty organising tasks and activities." },
    { question: "Do you Avoid or are reluctant to engage in tasks that require sustained mental effort." },
    { question: "How Frequently do you shifts from one unfinished activity to another"},
    { question: "Do you Misplace personal belongings regularly"}
];

const Segment2 = [
    { question: "Appears unable to sit still, fidgets, or taps hands and feet"},
    { question: "Talks excessively and has difficulty waiting for a turn in conversations."},
    { question: "Acts without thinking about the consequences."},
    { question: "Interrupts or intrudes on conversations or games"},
    { question: "Finds it challenging to engage in quiet activities without restlessness."}
];

const Segment3 = [
    { question: "Trouble following through on instructions or completing tasks"},
    { question: "Poor time management, often running late or underestimating time needed for tasks."},
    { question: "Difficulty planning and organizing tasks and activities."},
    { question: "Tends to delay tasks until the last minute."},
    { question: "Finds it challenging to shift attention from one activity to another"}
];

const Segment4 = [
    { question: "Difficulty in academic settings, such as completing assignments and staying focused in class."},
    { question: "Challenges in the workplace, including time management and organization."},
    { question: "Challenges in maintaining relationships due to forgetfulness or impulsivity."},
    { question: "Difficulty regulating emotions, leading to mood swings."},
    { question: "Struggles with self-esteem due to academic or interpersonal difficulties."}
];

/*Function to call page once it loads*/
window.onload = function () {
    symptomsQuestion();
};