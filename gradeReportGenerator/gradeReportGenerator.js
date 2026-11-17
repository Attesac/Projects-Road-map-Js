function getLetterGrade(score){
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassed(score) {
    if (score >= 60) {
        return true;
    }
    return false;
}

function getFeedback(grade) {
    if (grade === 'A') {
        return 'Excellent work!';
    } else if (grade === 'B') {
        return 'Good job!';
    } else if (grade === 'C' || grade === 'D') {
        return 'You passed';
    } else {
        return 'Keep practicing';
    }
}

function createGradeReport(name, score) {
    const grade = getLetterGrade(score);
    const passed = hasPassed(score);
    const feedback = getFeedback(grade);

    return {
        name: name,
        score: score,
        grade: grade,
        passed: passed,
        feedback: feedback
    };
}

console.log(createGradeReport('Ava', 92));
console.log(createGradeReport('Noah', 48));
console.log(createGradeReport('Mina', 75));
console.log(createGradeReport('Sam', 60));
