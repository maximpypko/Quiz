const questions = {
    'детский тест' : [
        {
            option1: 'Дюна',
            option2: 'Утёс',
            option3: 'Скала',
            option4: 'Гора',
            question:'Подвижный холм песка в пустыне называется…',
            correctAnswer: 'Дюна'
        },
        {
            option1: 'Три дня ничего не ели',
            option2: 'Убивали мамонта',
            option3: 'Танцевали вокруг костра с бубном в руках',
            option4: 'Ходили с зонтиком и говорили «кажется, дождь начинается…»',
            question:'Что делали древние люди, чтобы вызвать дождь?',
            correctAnswer: 'Танцевали вокруг костра с бубном в руках'
        },
        {
            option1: 'Стоять на месте',
            option2: 'Поднять в воздух автомобиль',
            option3: 'Вырвать с корнями дерево',
            option4: 'Разрушить здание',
            question:'Чего не может торнадо?',
            correctAnswer: 'Стоять на мест'
        },
        {
            option1: 'Приправу',
            option2: 'Бумагу',
            option3: 'Резину',
            option4: 'Шёлк',
            question:'В древности китайцы научились делать из коконов шелковичных червей…',
            correctAnswer: 'Шёлк'
        },
        {
            option1: 'На кончике языка',
            option2: 'В зубе',
            option3: 'На хвосте',
            option4: 'В капюшоне',
            question:'Где находится яд у кобры?',
            correctAnswer: 'В зубе'
        },
        {
            option1: 'Пожимают руки',
            option2: 'Целуются',
            option3: 'Трутся носами',
            option4: 'Обнимаются',
            question:'Как приветствуют друг друга эскимосы?',
            correctAnswer: 'Трутся носами'
        },
        {
            option1: 'Божья коровка',
            option2: 'Подёнка',
            option3: 'Водомерка',
            option4: 'Стрекоза',
            question:'Какое насекомое скользит по воде и не тонет?',
            correctAnswer: 'Водомерка'
        },
        {
            option1: 'Драгоценности',
            option2: 'Продукты',
            option3: 'Папирус',
            option4: 'Плюшевого мишку',
            question:'Чтобы в загробной жизни фараон ни в чем не нуждался, в саркофаг вместе с мумией клали…',
            correctAnswer: 'Драгоценности'
        },
        {
            option1: 'Келья',
            option2: 'Кубрик',
            option3: 'Квартира',
            option4: 'Кабинет',
            question:'Как называется помещение на судне, где живут матросы?',
            correctAnswer: 'Кубрик'
        },
        {
            option1: 'Жемчуг',
            option2: 'Кораллы',
            option3: 'Золото',
            option4: 'Алмазы',
            question:'Что образуется в раковинах устриц?',
            correctAnswer: 'Жемчуг'
        }
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

                const activeElement = document.querySelector('#topics__item--activ');
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
            this.$QuestionsContainer.firstChild.remove();
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
                <button class = 'questions__skip'>Пропустить вопрос</button>
            </div>`
        )
        
        this.$QuestionsContainer.addEventListener('click', (e) => {
            e.stopImmediatePropagation();

            if (e.target.closest('.question__item') && count < topicQuestion.length - 1) {
                
                this.checksAnswer(e.target.textContent,topicQuestion[count].correctAnswer,e.target);
                this.renderTopic(topicQuestion, ++count);

            } else if (e.target.closest('.questions__skip') && count < topicQuestion.length - 1) {
                this.result.push(0);
                this.renderTopic(topicQuestion, ++count);

            } else if (count === topicQuestion.length - 1) {
                this.checksAnswer(e.target.textContent, topicQuestion[count].correctAnswer, e.target);
                
                this.getResult();
                count = 0;
            }
        })    
    }

    checksAnswer(option, correctAnswer, target) {
        
        if (option === correctAnswer) {
            target.classList.add('question__item--green');
            this.result.push(1);
           
        } else {
            target.classList.add('question__item--red');
            this.result.push(0);
        }
    }

    getResult() {
        
        const sumCorrectAnswers = this.result.reduce((acc, el) => acc += el);
        const resultIndex = sumCorrectAnswers / this.result.length;
        let messageResult = '';
        
        if (resultIndex === 1) {
            messageResult = `${sumCorrectAnswers} из ${this.result.length}. Идеально, вы чертов гений. Похоже вы всю жизнь только и делаете что учитесь. Вы уроки не даёте?`;
        } else if (0.8 <= resultIndex && resultIndex <= 0.9) {
            messageResult = `${sumCorrectAnswers} из ${this.result.length}. Молодец! Практически идеально.`
            
        } else if (0.4 <= resultIndex && resultIndex <= 0.7) {
            messageResult = `${sumCorrectAnswers} из ${this.result.length}. Ну такое! Рекомендую взяться за голову пока не поздно. Еще чуть-чуть и будет поздно.`
        } else if (0.1 <= resultIndex && resultIndex <= 0.3) {
            messageResult = `${sumCorrectAnswers} из ${this.result.length}. Ваши знания практически на нуле.`
        } else if (0 === resultIndex) {
            messageResult = `${sumCorrectAnswers} из ${this.result.length}. По-моему вы прогуливали школу. У меня нет слов. Ни одного правильного ответа - вот как так можно? Возьмите пожалуйста учебник в руки, я рекомендую начать с азов!`
        }
              
        this.$QuestionsContainer.firstChild.remove();
                
        this.$QuestionsContainer.insertAdjacentHTML('afterbegin',
            `<div class = 'question__wrapper'>
                <h1 class = 'question__title'>Ваш результат:</h1>
                <p class = 'question__result'>${messageResult}</p>
            </div>`
        );
        this.result = [];
    }
}

new Quiz(questions);