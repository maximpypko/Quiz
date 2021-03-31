const questions = {
    math: [
        {
            option1: 'Вариант 1',
            option2: 'Вариант 2',
            option3: 'Вариант 3',
            option4: 'Вариант 4',
            question:'math1?',
            correctAnswer: 'Вариант 4'
        },
        {
            option1: 'Вариант 21',
            option2: 'Вариант 22',
            option3: 'Вариант 23',
            option4: 'Вариант 24',
            question:'math2?',
            correctAnswer: 'Вариант 21'
        },
        {
            option1: 'Вариант 31',
            option2: 'Вариант 32',
            option3: 'Вариант 33',
            option4: 'Вариант 34',
            question:'math3?',
            correctAnswer: 'Вариант 33'
        },
        {
            option1: 'Вариант 41',
            option2: 'Вариант 42',
            option3: 'Вариант 43',
            option4: 'Вариант 44',
            question:'math3?',
            correctAnswer: 'Вариант 44'
        },
        {
            option1: 'Вариант 51',
            option2: 'Вариант 52',
            option3: 'Вариант 53',
            option4: 'Вариант 54',
            question:'math3?',
            correctAnswer: 'Вариант 52'
        },
        {
            option1: 'Вариант 61',
            option2: 'Вариант 62',
            option3: 'Вариант 63',
            option4: 'Вариант 64',
            question:'math3?',
            correctAnswer: 'Вариант 63'
        },
    ],
    geography: [
        {
            option1: 'q',
            option2: 'qq',
            option3: 'qqq',
            option4: 'qqqq',
            question:'geography?',
            correctAnswer: 'qqqqqqqqqqq'
        },
        {
            option1: 'q',
            option2: 'qq',
            option3: 'qqq',
            option4: 'qqqq',
            question:'geography?',
            correctAnswer: 'qqqqqqqqqqq'
        },
        {
            option1: 'q',
            option2: 'qq',
            option3: 'qqq',
            option4: 'qqqq',
            question:'geography?',
            correctAnswer: 'qqqqqqqqqqq'
        },
        {
            option1: 'q',
            option2: 'qq',
            option3: 'qqq',
            option4: 'qqqq',
            question:'geography?',
            correctAnswer: 'qqqqqqqqqqq'
        },
    ],
}

class Quiz {
    $topicsContainer = document.querySelector('.topics')
    $QuestionsContainer = document.querySelector('.questions');
    result = [];

    constructor(questions) {
        this.questions = questions;
        this.getTopicQuestions()
    }

    getTopicQuestions() {
        
        this.$topicsContainer.addEventListener('click', e => {
            
            if (e.target.tagName === 'BUTTON' &&
                this.$topicsContainer.nextElementSibling.childNodes.length === 0) {

                const activeElement = document.querySelector('#topics__item--activ')
                activeElement ? activeElement.id = '' : e.target.id = 'topics__item--activ';
                
                const topicName = e.target.textContent.toLowerCase();
                this.renderTopic(this.questions[topicName]);
            } else if (e.target.tagName === 'BUTTON' &&
                this.$topicsContainer.nextElementSibling.childNodes) {
                this.$topicsContainer.nextElementSibling.firstChild.remove();
            }
        })
    }

    renderTopic(topicQuestion, count = 0) {

        if (this.$QuestionsContainer.firstChild) {
            this.$QuestionsContainer.firstChild.remove()
        }

        this.$QuestionsContainer.insertAdjacentHTML('afterbegin',
            `<div class = 'question__wrapper'>
                <h1 class = 'question__title'>${topicQuestion[count].question}</h1>
                <ul class = 'question__list'>
                    <li class = 'question__item'>${topicQuestion[count].option1}</li>
                    <li class = 'question__item'>${topicQuestion[count].option2}</li>
                    <li class = 'question__item'>${topicQuestion[count].option3}</li>
                    <li class = 'question__item'>${topicQuestion[count].option4}</li>
                </ul>
                <button class = 'questions__skip'>Skip</button>
            </div>`
        )
        
        this.$QuestionsContainer.addEventListener('click', (e) => {
            e.stopImmediatePropagation()

            if (e.target.closest('.question__item') && count < topicQuestion.length - 1) {
                this.renderTopic(topicQuestion, ++count)

            } else if(count === topicQuestion.length - 1) {
                console.log('end');
            }
        })    
    }
}

new Quiz(questions);