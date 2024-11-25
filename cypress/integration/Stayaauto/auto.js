describe('Проверка формы логина', function () {
	it('Вход на сат', function () {
		cy.visit('https://staya.dog/')
        cy.get(
					'[href="/catalog/collars"] > .category-link__canvas-wrapper > .category-link__canvas'
				).click();
        cy.get(
					':nth-child(1) > .product-list > :nth-child(1) > .SProductCard__galleryWrapper > .CurtainGallery'
				).click()
        cy.get(':nth-child(3) > .option-body > .option__name').click()

        cy.get('.CTA > .s-button__content').click()

        cy.contains('Оформить заказ');
	})


	it('Авторизация правильный логин и пароль', function () {
	cy.reload()
	cy.get('.header-bottom__right--link').click()
	cy.get('[type="email"]').type('vladislavgrek61@gmail.com')
	cy.get('.auth-form__submit').should('be.disabled')
	cy.get('[type="password"]').type('17m16b02s')
	cy.get('.auth-form__submit').should('not.be.disabled')
	cy.get('.auth-form__submit').click()
	cy.url().should('eq', 'https://staya.dog/profile/orders')
	})


	it('Авторизация правильный логин и  неверный пароль', function () {
		cy.visit('https://staya.dog/')
		cy.get('.header-bottom__right--link').click()
		cy.get('[type="email"]').type('vladislavgrek61@gmail.com')
		cy.get('.auth-form__submit').should('be.disabled')
		cy.get('[type="password"]').type('17m16b02R')
		cy.get('.auth-form__submit').should('not.be.disabled')
		cy.get('.auth-form__submit').click()
		cy.contains('Невозможно войти с предоставленными учетными данными.')
	})
})

