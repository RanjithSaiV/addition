// document.addEventListener('DOMContentLoaded', function () {
//     function generateRandomNumber() {
//         return Math.floor(Math.random() * 9) + 1;
//     }

//     function resetQuiz() {
//         const num1 = generateRandomNumber();
//         const num2 = generateRandomNumber();
//         const result = num1 + num2;
//         document.getElementById('random-num1').textContent = num1;
//         document.getElementById('random-num2').textContent = num2;
//         document.getElementById('user-answer').value = '';
//         document.getElementById('result').textContent = '';
//         document.getElementById('check-answer').disabled = false;
//         document.getElementById('play-again').style.display = 'none';

//         document.getElementById('check-answer').addEventListener('click', function () {
//             const userAnswer = parseInt(document.getElementById('user-answer').value);
//             if (userAnswer === result) {
//                 document.getElementById('result').textContent = 'Correct Answer!';
//                 document.getElementById('check-answer').disabled = true;
//                 document.getElementById('play-again').style.display = 'inline-block';
//             } else {
//                 document.getElementById('result').textContent = 'Wrong Answer. Try Again!';
//             }
//         });

//         document.getElementById('play-again').addEventListener('click', function () {
//             resetQuiz();
//         });
//     }

//     resetQuiz();
// });

    // JavaScript code for the addition quiz levels

    let currentLevel = 1;
    document.addEventListener('DOMContentLoaded', function () {
        currentLevel = 1; // Start at level 1

        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function resetQuiz() {
            let minRange, maxRange;

            if (currentLevel === 1) {
                minRange = 1;
                maxRange = 9;

            } else if (currentLevel === 2) {
                minRange = 10;
                maxRange = 99;
            } else if (currentLevel === 3) {
                minRange = 100;
                maxRange = 999;
                document.getElementById('next-level').style.display = 'none';

            }

            const num1 = generateRandomNumber(minRange, maxRange);
            const num2 = generateRandomNumber(minRange, maxRange);
            const result = num1 + num2;

            document.getElementById('random-num1').textContent = num1;
            document.getElementById('random-num2').textContent = num2;
            document.getElementById('user-answer').value = '';
            document.getElementById('result').textContent = '';
            document.getElementById('check-answer').disabled = false;
            document.getElementById('play-again').style.display = 'none';
            // document.getElementById('Previous-level').style.display = 'none';

            document.getElementById('next-level').style.display = 'none';

            document.getElementById('check-answer').addEventListener('click', function () {
                const userAnswer = parseInt(document.getElementById('user-answer').value);
                if (userAnswer === result) {
                    document.getElementById('result').textContent = 'Correct Answer!';
                    document.getElementById('check-answer').disabled = true;
                    document.getElementById('Previous-level').style.display = 'inline-black';

                    document.getElementById('play-again').style.display = 'inline-block';
                    document.getElementById('next-level').style.display = 'inline-block';
                } else {
                    document.getElementById('result').textContent = 'Wrong Answer. Try Again!';
                }
            });

            document.getElementById('play-again').addEventListener('click', function () {
                resetQuiz();
            });

            document.getElementById('Previous-level').addEventListener('click', function () {
                if ((currentLevel ==2) || (currentLevel ==3) ) {
                    currentLevel= currentLevel-1;
                    resetQuiz();
                }
            });

            document.getElementById('next-level').addEventListener('click', function () {
                if (currentLevel < 3) {
                    currentLevel++;
                    resetQuiz();
                }
            });
        }

        resetQuiz();
    });


