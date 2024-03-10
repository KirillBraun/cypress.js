describe('Автотест на покупку нового фото для своего тренера', function () {
    
    it('Приступим', function () {
        cy.visit('https://pokemonbattle.me/login/'); //вхожу на сайт
        cy.get(':nth-child(1) > .auth__input').type('логин'); //ввожу логин
        cy.get('#password').click().should('have.focus'); //проверяю что инпут пароля выделен при нажатии
        cy.get('#password').type('пароль'); //ввожу пароль
        cy.get('#password').should('have.attr', 'type', 'password'); //проверяю что пароль скрыт
        cy.get('.auth__button').should('be.enabled'); // проверяю что кнопка войти кликабельна
        cy.get('.auth__button').click(); // вхожу
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov');
        cy.get('.pay__payform-v2').click();// вот эту строку добавил, так как в исходной команде один клик, и после ввода имени кнопка остается некликабельной
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__adv').click();
        })
        
})



