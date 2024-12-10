// Daftar pertanyaan dan jawaban yang benar
const questions = [
    { question: "Apa warna langit?", answer: "biru" },
    { question: "Berapa banyak bulan di bumi?", answer: "1" },
    { question: "Siapa presiden pertama Indonesia?", answer: "Soekarno" },
    { question: "Apa ibu kota Jepang?", answer: "Tokyo" },
    { question: "Siapa penemu telepon?", answer: "Alexander Graham Bell" },
    { question: "Apa nama planet terdekat dengan matahari?", answer: "Merkurius" },
    { question: "Berapa banyak negara di dunia?", answer: "195" },
    { question: "Siapa pencipta Facebook?", answer: "Mark Zuckerberg" },
    { question: "Apa warna darah manusia?", answer: "merah" },
    { question: "Siapa yang menulis Harry Potter?", answer: "J.K. Rowling" },
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
