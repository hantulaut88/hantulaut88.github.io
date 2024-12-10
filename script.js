// Daftar pertanyaan dan jawaban yang benar
const questions = [
    { question: "Apa warna langit?", answer: "biru" },
];

let currentQuestion = 0;

// Menampilkan pertanyaan pertama
document.getElementById("question").textContent = questions[currentQuestion].question;

// Fungsi untuk mengirim jawaban
document.getElementById("submit-btn").addEventListener("click", function() {
    const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();

    // Cek jawaban
    if (userAnswer === correctAnswer) {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            document.getElementById("question").textContent = questions[currentQuestion].question;
            document.getElementById("answer").value = "";
        } else {
            // Setelah 10 pertanyaan, tampilkan jumpscare
            setTimeout(function() {
                document.getElementById("jumpscareImage").style.display = "block";
                var audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
                audio.play();
            }, 1000); // Tampilkan setelah 1 detik
        }
    } else {
        alert("Jawaban salah! Coba lagi.");
    }
});
