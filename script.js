function submitQuiz() {
    let score = 0;
    const answers = { q1: "8" };
    
    const selectedAnswer = document.querySelector('input[name="q1"]:checked');
    if (selectedAnswer && selectedAnswer.value === answers.q1) {
        score++;
    }
    
    document.getElementById("quizResult").innerText = "Your Score: " + score + "/1";
}

function postComment() {
    const commentBox = document.getElementById("commentBox");
    const commentText = commentBox.value.trim();
    if (commentText) {
        const commentList = document.getElementById("commentsList");
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentBox.value = "";
    }
}