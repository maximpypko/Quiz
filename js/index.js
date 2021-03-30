const questions = {
    math: [
        {
            option1: 'Вариант 1',
            option2: 'Вариант 2',
            option3: 'Вариант 3',
            option4: 'Вариант 4',
            question:'math1?',
            correctAnswer: 'qq1'
        },
        {
            option1: 'Вариант 21',
            option2: 'Вариант 22',
            option3: 'Вариант 23',
            option4: 'Вариант 24',
            question:'math2?',
            correctAnswer: 'qq2'
        },
        {
            option1: 'Вариант 31',
            option2: 'Вариант 32',
            option3: 'Вариант 33',
            option4: 'Вариант 34',
            question:'math3?',
            correctAnswer: 'qqq3'
        },
        {
            option1: 'Вариант 41',
            option2: 'Вариант 42',
            option3: 'Вариант 43',
            option4: 'Вариант 44',
            question:'math3?',
            correctAnswer: 'qqq3'
        },
        {
            option1: 'Вариант 51',
            option2: 'Вариант 52',
            option3: 'Вариант 53',
            option4: 'Вариант 54',
            question:'math3?',
            correctAnswer: 'qqq3'
        },
        {
            option1: 'Вариант 61',
            option2: 'Вариант 62',
            option3: 'Вариант 63',
            option4: 'Вариант 64',
            question:'math3?',
            correctAnswer: 'qqq3'
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
            }
        })
    }

    renderTopic(topicQuestion, count = 0) {
        const $QuestionsContainer = document.querySelector('.questions');
        const $QuestionsList = document.createElement('ul');
        $QuestionsList.classList.add('questions__list');

            for (let index = 1; index < 5; index++) {
                
            const $QuestionsItem = document.createElement('li');
            $QuestionsItem.classList.add('questions__item');
            const optionNumber = 'option' + (index);
            $QuestionsItem.textContent = topicQuestion[count][optionNumber];
            $QuestionsList.append($QuestionsItem);
        }

        $QuestionsContainer.append($QuestionsList);
        
        $QuestionsContainer.insertAdjacentHTML('beforeend',
            `<button class = 'questions__next'>Next</button>`)
        const $ButtonNext = document.querySelector('.questions__next');
        
        $ButtonNext.addEventListener('click', () => {
            if (count < topicQuestion.length - 1) {
                $QuestionsList.remove()
                $ButtonNext.remove()
                this.renderTopic(topicQuestion, ++count)
            } else {
                return
            }
        })    
    }
}

new Quiz(questions);