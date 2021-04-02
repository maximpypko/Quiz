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
            correctAnswer: 'Стоять на месте'
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
    'geography': [
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
    activTopic = null;
    count = null;

    constructor(questions) {
        this.questions = questions;
        this.getTopicQuestions()
    }

    getTopicQuestions() {
    
        this.$topicsContainer.addEventListener('click', e => {
           
            if (e.target.tagName === 'BUTTON' && this.$QuestionsContainer.childNodes.length === 0) {
                e.target.classList.add('topics__item--activ');

                const arrayTarget = Array.from(e.target.parentElement.children);
                arrayTarget.map(el =>  el.disabled = true);

                const topicName = e.target.textContent.toLowerCase();
                this.activTopic = this.questions[topicName];
                this.count = 0;
                this.renderTopic();
            }
        })
    }

    renderTopic() {
        
        if (this.$QuestionsContainer.firstChild) {
            this.$QuestionsContainer.firstChild.remove(); 
        }
        
        this.$QuestionsContainer.insertAdjacentHTML('afterbegin',
            `<div class = 'questions__wrapper'>
                <h1 class = 'questions__title'>${this.activTopic[this.count].question}</h1>
                <ul class = 'questions__list'>
                    <li class = 'questions__item'>${this.activTopic[this.count].option1}</li>
                    <li class = 'questions__item'>${this.activTopic[this.count].option2}</li>
                    <li class = 'questions__item'>${this.activTopic[this.count].option3}</li>
                    <li class = 'questions__item'>${this.activTopic[this.count].option4}</li>
                </ul>
                <div class = 'questions__buttons'>
                    <button class = 'questions__skip'>Пропустить вопрос</button>
                    <button class = 'questions__end'>Закончить тест</button>
                    <div class = 'questions__index'>${this.count + 1} из ${this.activTopic.length}</div>
                </div>
            </div>`
        );
        this.handlerClick();
    }

    handlerClick() {

        this.$QuestionsContainer.addEventListener('click', (e) => {
            e.stopImmediatePropagation();
            
            if (e.target.closest('.questions__item') && this.count < this.activTopic.length - 1) {
                this.checksAnswer(this.activTopic[this.count].correctAnswer, e.target);
                this.renderTopic(++this.count);
                
            } else if (e.target.closest('.questions__skip') &&
                this.count < this.activTopic.length - 1) {
                this.result.push(0);
                this.renderTopic(++this.count);

            } else if (e.target.closest('.questions__end') &&
                this.count <= this.activTopic.length - 1) {
                this.result = [];
                this.resetStateTopicItem();

            } else if (e.target.closest('.questions__next-test')) {
                this.resetStateTopicItem();
            }
                
            else if (this.count === this.activTopic.length - 1) {
                this.checksAnswer(this.activTopic[this.count].correctAnswer, e.target);
                this.getResult();
                this.count = 0;
            } 
        })
    }

    resetStateTopicItem() {
        this.$QuestionsContainer.firstChild.remove();
        const arrayTarget = Array.from(this.$topicsContainer.children);
        arrayTarget.map(el => {
            el.disabled = false;
            if (el.closest('.topics__item--activ')) {
                el.classList.remove('topics__item--activ');
            }
        });
    }
    
    checksAnswer(correctAnswer, target) {
        target.textContent === correctAnswer ? this.result.push(1) : this.result.push(0); 
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
            `<div class = 'questions__wrapper'>
                <h1 class = 'questions__title'>Ваш результат:</h1>
                <p class = 'questions__result'>${messageResult}</p>
                <button class = 'questions__next-test'>К другому тесту</button>
            </div>`
        );
        this.result = [];
    }
}
new Quiz(questions);