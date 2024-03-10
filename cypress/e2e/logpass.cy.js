describe('Тестирование формы логина и пароля', function () {
    
    it('позитивный кейс тестирования войти', function () {
        cy.visit('https://login.qa.studio/'); //вхожу на сайт
        cy.get('#mail').click().should('have.focus'); //проверяю что инпут мейла выделен при нажатии
        cy.get('#mail').type('german@dolnikov.ru'); //ввожу логин
        cy.get('#loginButton').should('be.disabled'); //проверяю что кнопка войти задизейблена
        cy.get('#pass').click().should('have.focus'); //проверяю что инпут пароля выделен при нажатии
        cy.get('#pass').type('iLoveqastudio1'); //ввожу пароль
        cy.get('#pass').should('have.attr', 'type', 'password'); //проверяю что пароль скрыт
        cy.get('#loginButton').should('be.enabled'); // проверяю что кнопка войти кликабельна
        cy.get('#loginButton').click(); // вхожу
        cy.get('#messageHeader').should('contain', 'Авторизация прошла успешно'); //проверяю наличие сообщения
        cy.get('#exitMessageButton > .exitIcon').should('exist'); // проверяю наличие крестика
        })
        
})

describe('Тестирование кнопки "Забыли пароль"', function () {
    
    it('позитивный кейс', function () {
        cy.visit('https://login.qa.studio/'); //вхожу на сайт
        cy.get('#forgotEmailButton').click(); //нажимаю забыли пароль
        cy.get('#forgotForm').should('exist'); // проверяю что появилась форма ввода
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввожу почту
        cy.get('#restoreEmailButton').click(); //кликаю отправить код
        cy.get('#messageHeader').should('contain', 'Успешно отправили пароль на e-mail'); //проверяю успех
        cy.get('#exitMessageButton > .exitIcon').should('exist'); // проверяю наличие крестика

        })
        
})

describe('Тестирование кнопки "Забыли пароль не вводя логин"', function () {
    
    it('позитивный кейс', function () {
        cy.visit('https://login.qa.studio/'); //вхожу на сайт
        cy.get('#forgotEmailButton').click(); //нажимаю забыли пароль
        cy.get('#forgotForm').should('exist'); // проверяю что появилась форма ввода
        cy.get('#restoreEmailButton').click(); //кликаю отправить код
        cy.get('#messageHeader').should('contain', 'Нужно исправить проблему валидации'); //проверяю наличие валидации
        cy.get('#exitMessageButton > .exitIcon').should('exist'); // проверяю наличие крестика

        })
        
})
describe('Тестирование ввода неверного пароля"', function () {
    
    it('негативный кейс', function () {
        cy.visit('https://login.qa.studio/'); //вхожу на сайт
        cy.get('#mail').click().should('have.focus'); //проверяю что инпут мейла выделен при нажатии
        cy.get('#mail').type('german@dolnikov.ru'); //ввожу логин
        cy.get('#loginButton').should('be.disabled'); //проверяю что кнопка войти задизейблена
        cy.get('#pass').click().should('have.focus'); //проверяю что инпут пароля выделен при нажатии
        cy.get('#pass').type('iLoveqastudio'); //ввожу неправильный пароль
        cy.get('#pass').should('have.attr', 'type', 'password'); //проверяю что пароль скрыт
        cy.get('#loginButton').should('be.enabled'); // проверяю что кнопка войти кликабельна
        cy.get('#loginButton').click(); // вхожу
        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет'); //проверяю наличие сообщения
        cy.get('#exitMessageButton > .exitIcon').should('exist'); // проверяю наличие крестика

        })
        
})

describe('Тестирование ввода неверного логина"', function () {
    
    it('негативный кейс', function () {
        cy.visit('https://login.qa.studio/'); //вхожу на сайт
        cy.get('#mail').click().should('have.focus'); //проверяю что инпут мейла выделен при нажатии
        cy.get('#mail').type('german@dolnkov.ru'); //ввожу логин
        cy.get('#loginButton').should('be.disabled'); //проверяю что кнопка войти задизейблена
        cy.get('#pass').click().should('have.focus'); //проверяю что инпут пароля выделен при нажатии
        cy.get('#pass').type('iLoveqastudio1'); //ввожу неправильный пароль
        cy.get('#pass').should('have.attr', 'type', 'password'); //проверяю что пароль скрыт
        cy.get('#loginButton').should('be.enabled'); // проверяю что кнопка войти кликабельна
        cy.get('#loginButton').click(); // вхожу
        cy.get('#messageHeader').should('contain', 'Такого логина или пароля нет'); //проверяю наличие сообщения
        cy.get('#exitMessageButton > .exitIcon').should('exist'); // проверяю наличие крестика

        })
        
})

describe('Тестирование ввода логина без @', function () {
    
    it('негативный кейс', function () {
        cy.visit('https://login.qa.studio/'); //вхожу на сайт
        cy.get('#mail').click().should('have.focus'); //проверяю что инпут мейла выделен при нажатии
        cy.get('#mail').type('germandolnikov.ru'); //ввожу логин
        cy.get('#loginButton').should('be.disabled'); //проверяю что кнопка войти задизейблена
        cy.get('#pass').click().should('have.focus'); //проверяю что инпут пароля выделен при нажатии
        cy.get('#pass').type('iLoveqastudio'); //ввожу неправильный пароль
        cy.get('#pass').should('have.attr', 'type', 'password'); //проверяю что пароль скрыт
        cy.get('#loginButton').should('be.enabled'); // проверяю что кнопка войти кликабельна
        cy.get('#loginButton').click(); // вхожу
        cy.get('#messageHeader').should('contain', 'Нужно исправить проблему валидации'); //проверяю наличие сообщения
        cy.get('#exitMessageButton > .exitIcon').should('exist'); // проверяю наличие крестика

        })
        
})