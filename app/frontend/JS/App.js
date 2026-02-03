// // // App State
// let currentStep = 1;

// // Navigation
// function goToStep(step) {
//     document.querySelectorAll('.step-content')
//         .forEach(el => el.classList.remove('active'));

//     document.getElementById(`step-${step}`).classList.add('active');
//     currentStep = step;
//     updateInsights();
// }

// // Insights
// function updateInsights() {
//     const weeks = +document.getElementById('totalWeeks').value || 0;
//     const hours = +document.getElementById('dailyHours').value;
//     const fatigue = +document.getElementById('fatigueLevel').value;
//     const subjects = document.getElementById('subjects-container').children.length;

//     document.getElementById('total-hours-display').innerText =
//         (weeks * 5 * hours) + 'h';

//     document.getElementById('gene-count').innerText = subjects;
//     document.getElementById('fatigue-multiplier').innerText =
//         (1 + fatigue / 10).toFixed(1) + 'x';

//     document.getElementById('complexity-desc').innerText =
//         fatigue > 7 ? 'High fatigue detected.' : 'Configuration optimal.';
// }

// // Add Subject
// function addSubjectRow() {
//     const div = document.createElement('div');
//     div.className = 'subject-card';
//     div.innerHTML = `
//         <input placeholder="Subject">
//         <select>
//             <option value="1">Easy</option>
//             <option value="2" selected>Medium</option>
//             <option value="3">Hard</option>
//         </select>
//         <button onclick="this.parentElement.remove(); updateInsights()">🗑</button>
//     `;
//     document.getElementById('subjects-container').appendChild(div);
//     updateInsights();
// }

// // DOM SAFE INIT
// window.onload = () => {
//     document.getElementById('dailyHours').oninput = e => {
//         document.getElementById('study-hours-val').innerText = e.target.value + 'h';
//         updateInsights();
//     };

//     document.getElementById('fatigueLevel').oninput = e => {
//         document.getElementById('fatigue-val').innerText = e.target.value;
//         updateInsights();
//     };

//     document.getElementById('totalWeeks').oninput = updateInsights;

//     updateInsights();
// };

let currentStep = 1;

function goToStep(step) {
    document.querySelectorAll('.step-content')
        .forEach(el => el.classList.remove('active'));

    document.getElementById(`step-${step}`).classList.add('active');

    document.getElementById('step-dot-1').classList.toggle('active', step === 1);
    document.getElementById('step-dot-2').classList.toggle('active', step === 2);

    currentStep = step;
    updateInsights();
}

function addSubjectRow() {
    const div = document.createElement('div');
    div.className = 'subject-card';
    div.innerHTML = `
        <input placeholder="Subject name">
        <select>
            <option value="1">Easy</option>
            <option value="2" selected>Medium</option>
            <option value="3">Hard</option>
        </select>
        <button onclick="this.parentElement.remove(); updateInsights()">🗑</button>
    `;
    document.getElementById('subjects-container').appendChild(div);
    updateInsights();
}

function updateInsights() {
    const weeks = +document.getElementById('totalWeeks').value || 0;
    const hours = +document.getElementById('dailyHours').value;
    const fatigue = +document.getElementById('fatigueLevel').value;
    const count = document.getElementById('subjects-container').children.length;

    document.getElementById('study-hours-val').innerText = hours + 'h';
    document.getElementById('fatigue-val').innerText = fatigue;

    document.getElementById('total-hours-display').innerText =
        (weeks * 5 * hours) + 'h';

    document.getElementById('gene-count').innerText = count;
    document.getElementById('fatigue-multiplier').innerText =
        (1 + fatigue / 10).toFixed(1) + 'x';

    document.getElementById('complexity-desc').innerText =
        fatigue > 7 ? 'High fatigue detected. Shorter sessions recommended.'
                    : 'Configuration optimal.';
}

window.onload = () => {
    document.getElementById('dailyHours').oninput = updateInsights;
    document.getElementById('fatigueLevel').oninput = updateInsights;
    document.getElementById('totalWeeks').oninput = updateInsights;

    updateInsights();
};
