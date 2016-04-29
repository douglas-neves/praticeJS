// Ou podemos declarar o nome explicitamente...
// define('myModule', function () {
define(function () {

    var _this;
    var escolha;

    var perguntas = [
    	{
			pergunta: 'Quem é o primeiro ministro do Reino Unido?',
			escolhas: ['David Cameron', 'Gordon Brown', 'Winston Churchill', 'Tony Blair'],
			respostaCorreta: 3,
		},
		{
			pergunta: 'Quem é o segundo ministro do Reino Unido?',
			escolhas: ['Douglas Xablau', 'Patrique Francisquino', 'Mel Gibson', 'Marcelinho'],
			respostaCorreta: 3,
		}
	];
	return {

		count: 0,
        rightAnswers: 0,
		answers: [],
		selectors: {
			questionBox: '#questionBox',
			questionHeader: '.questionHeader',
			listAnswers: '.listAnswers',
            nextQuestion: '.nextQuestion'
		},

		createQuestion: function(index){
			var questionHeader = $(this.selectors.questionHeader);
			questionHeader.html(perguntas[_this.count].pergunta);
		},

		createRadios: function(index){
			var listAnswers = $(this.selectors.listAnswers);
            for (escolha in perguntas[this.count].escolhas){
				var answer = '<li><input required type="radio" name="answer" value="' + escolha +'"/>'+perguntas[this.count].escolhas[escolha]+'</li>';

                listAnswers.append(answer);
			}
		},

		getAnswer: function(){
            $(this.selectors.questionBox).change(function(){
                _this.answers[_this.count] = $('input[name=answer]:checked', '#questionBox').val();
            });
		},

        initialize: function() {
            _this = this;

            this.createQuestion();
            this.createRadios();
            this.getAnswer();

            $(this.selectors.nextQuestion).click(function() {
                _this.rightAnswers += _this.answers[_this.count] == perguntas[_this.count].respostaCorreta ? 1:0;
                if (_this.count < perguntas.length - 1) {
                    _this.count++;
                    _this.createQuestion();
                    $(_this.selectors.listAnswers).find("li").remove();
                    _this.createRadios();
                } else {
                    alert("Voce acertou: " + _this.rightAnswers );
                }
            });
        },
	};
});
