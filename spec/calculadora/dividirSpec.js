describe('Suíte de testes de divisão', () => {
	let Calculadora = require('../../src/js/calculadora');

	it('deve retornar 2 para 6 e 3', () => {
		expect(Calculadora.dividir(6,3)).toEqual(2);
	});

	it('deve retornar 2 para 6 e 3 no formato texto', () => {
		expect(Calculadora.dividir('6', '3')).toEqual(2);
	});

	it('deve retornar 1.5 para 4.5 e 3', () => {
		expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
	});

	it('deve retornar "Erro" para divião por 0', () => {
		expect(Calculadora.dividir(6, 0)).toEqual("Erro");
	});

	it('deve retornar 0 para valor 1 inválido', () => {
		expect(Calculadora.dividir(undefined, 5)).toEqual(0);
	});

	it('deve retornar 0 para valor 2 inválido', () => {
		expect(Calculadora.dividir(5, undefined)).toEqual(0);
	});

});
