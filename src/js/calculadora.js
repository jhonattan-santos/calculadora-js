let Calculadora = {
	ADICAO: '+',
	SUBTRACAO: '-',
	DIVISAO: '/',
	MULTIPLICACAO: '*',

	adicionar: (num1, num2) => {
		return Calculadora.calcular(num1, num2, Calculadora.ADICAO);
	},

	subtrair: (num1, num2) => {
		return Calculadora.calcular(num1, num2, Calculadora.SUBTRACAO);
	},

	dividir: (num1, num2) => {
		return Calculadora.calcular(num1, num2, Calculadora.DIVISAO);
	},

	multiplicar: (num1, num2) => {
		return Calculadora.calcular(num1, num2, Calculadora.MULTIPLICACAO);
	},

	calcular: (num1, num2, operacao) => {
		num1 = +num1;
		num2 = +num2;

		if (isNaN(num1) || isNaN(num2)) {
			return 0;
		}

		switch (operacao) {
			case Calculadora.ADICAO:
				return num1 + num2;
			case Calculadora.DIVISAO:
				if (num2 === 0) {
					return 'Erro';
				}
				return num1 / num2;
			case Calculadora.MULTIPLICACAO:
					return num1 * num2;
			case Calculadora.SUBTRACAO:
					return num1 - num2;
			default:
				return 0;
		}
	}
};

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Calculadora;
}
