function calculateResults() {
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const averageMarks = totalMarks / 5;
    let grade = '';

    if (averageMarks >= 90) {
        grade = 'O';
        document.getElementById('resultContainer').style.backgroundImage = "url('https://tse2.mm.bing.net/th?id=OIP.5BEQ3AvJix423fKR0glxjAHaG9&pid=Api&P=0&h=180')";
    } else if (averageMarks >= 80) {
        grade = 'A+';
        document.getElementById('resultContainer').style.backgroundImage = "";
    } else if (averageMarks >= 70) {
        grade = 'B';
        document.getElementById('resultContainer').style.backgroundImage = "";
    } else if (averageMarks >= 60) {
        grade = 'C';
        document.getElementById('resultContainer').style.backgroundImage = "";
    } else {
        grade = 'U';
        document.getElementById('resultContainer').style.backgroundImage = "";
    }

    document.getElementById('totalMarks').innerText = `Total Marks: ${totalMarks}`;
    document.getElementById('averageMarks').innerText = `Average Marks: ${averageMarks.toFixed(2)}`;
    document.getElementById('grade').innerText = `Grade: ${grade}`;
}
