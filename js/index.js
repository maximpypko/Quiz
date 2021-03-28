const questions = {
    math: [
        {
            question:'math1?',
            option1: 'q1',
            option2: 'qq1',
            option3: 'qqq1',
            option4: 'qqqq1',
            correctAnswer: 'qq1'
        },
        {
            question:'math2?',
            option1: 'q2',
            option2: 'qq2',
            option3: 'qqq2',
            option4: 'qqqq2',
            correctAnswer: 'qq2'
        },
        {
            question:'math3?',
            option1: 'q3',
            option2: 'qq3',
            option3: 'qqq3',
            option4: 'qqqq3',
            correctAnswer: 'qqq3'
        },
    ],
    geography: [
        {
            question:'geography?',
            option1: 'q',
            option2: 'qq',
            option3: 'qqq',
            option4: 'qqqq',
            correctAnswer: 'qqqqqqqqqqq'
        },
    ],
}

class Quiz {
    $topicsContainer = document.querySelector('.topics')
    
    constructor(questions) {
        this.questions = questions;
        this.getTopicName()
    }

    getTopicName() {
        this.$topicsContainer.addEventListener('click', e => {
            const topicName = e.target.textContent.toLowerCase();
            this.renderTopic(this.questions[topicName]);
        })
    }

    getRandomNumberArr(quantityNumber) {
        let arrNumber = [];
        do {
            const num = Math.floor(Math.random() * quantityNumber);
            arrNumber.push(num);
            arrNumber = arrNumber.filter((item, index) => {
                return arrNumber.indexOf(item) === index;
            });
        } while (arrNumber.length < quantityNumber);
        
        return arrNumber;
    }

    renderTopic(topic) {
        
        const arrNumber = this.getRandomNumberArr(topic.length)

        this.$topicsContainer.insertAdjacentHTML('afterbegin',
            `<ul>
                <li></li>
            </ul>
        `)

    }
}

new Quiz(questions);