describe('Проверка формы логина', function () {
	it('Позитивный кейс верный логин и пароль', function () {
		cy.visit('https://login.qa.studio/')
		cy.get('#mail').type('german@dolnikov.ru')
		cy.get('#loginButton').should('be.disabled')
		cy.get('#pass').type('iLoveqastudio1')
		cy.get('#loginButton').should('not.be.disabled')
		cy.get('#loginButton').click()
		cy.wait(1000)
		cy.contains('Авторизация прошла успешно').should('be.visible')
    cy.get('#exitMessageButton > .exitIcon')
	})


	it('Негативный кейс верный логин и  неверный пароль', function () {
		cy.reload()
		cy.get('#mail').type('german@dolnikov.ru')
		cy.get('#loginButton').should('be.disabled')
		cy.get('#pass').type('iLoveqastudio2')
		cy.get('#loginButton').should('not.be.disabled')
		cy.get('#loginButton').click()
		cy.wait(1000)
		cy.contains('Такого логина или пароля нет').should('be.visible')
		cy.get('#exitMessageButton > .exitIcon')
	})

	
	cy.reload()
	cy.get('.header-bottom__right--link').click()
	cy.get('[type="email"]').type('vladislavgrek61@gmail.com')
	cy.get('.auth-form__submit').should('be.disabled')
	cy.get('[type="password"]').type('17m16b02s')
	cy.get('.auth-form__submit').should('not.be.disabled')
	cy.get('.auth-form__submit').click()
	cy.url().should('eq', 'https://staya.dog/profile/orders')


    cy.reload()
	cy.get('.header-bottom__right--link').click()
	cy.get('[type="email"]').type('vladislavgrek61@gmail.com')
	cy.get('.auth-form__submit').should('be.disabled')
	cy.get('[type="password"]').type('17m16b02R')
	cy.get('.auth-form__submit').should('not.be.disabled')
	cy.get('.auth-form__submit').click()
	cy.contains('Невозможно войти с предоставленными учетными данными.')


	
}) 