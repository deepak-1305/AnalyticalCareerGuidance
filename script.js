let current = 0;

let scores = {
    tech: 0,
    creative: 0,
    business: 0,
    health: 0,
    analysis: 0
};

function startTest() {
    intro.classList.add("hidden");
    quiz.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    question.innerText = questions[current].text;
    progress.innerText = `Question ${current + 1} of ${questions.length}`;
    bar.style.width = ((current + 1) / questions.length) * 100 + "%";
}

function answer(value) {
    questions[current].tags.forEach(tag => scores[tag] += value);
    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    let dominant = Object.keys(scores)
        .reduce((a, b) => scores[a] > scores[b] ? a : b);

    const careerMap = {
        tech: "Software Engineer, AI Engineer, Data Scientist",
        creative: "UI/UX Designer, Animator, Content Creator",
        business: "MBA, Entrepreneur, Marketing Manager",
        health: "Doctor, Psychologist, Nurse",
        analysis: "Researcher, Economist, Data Analyst"
    };

    career.innerHTML = `<h3>Recommended Career</h3><p>${careerMap[dominant]}</p>`;
    traits.innerHTML = `<p><b>Dominant Trait:</b> ${dominant.toUpperCase()}</p>`;

    drawChart();
}

function drawChart() {
    const ctx = document.getElementById("careerChart");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Technology", "Creative", "Business", "Healthcare", "Analytical"],
            datasets: [{
                data: [
                    scores.tech,
                    scores.creative,
                    scores.business,
                    scores.health,
                    scores.analysis
                ],
                backgroundColor: [
                    "#4facfe",
                    "#f093fb",
                    "#43e97b",
                    "#fa709a",
                    "#30cfd0"
                ]
            }]
        }
    });
}
