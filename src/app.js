import render from './pages/index';

render('main');

//partition-bundle example
let button = document.getElementById('contactsButton');
button.addEventListener('click', () => {
    loadjs(['./src/pages/contacts'], (contacts) => {
        contacts.default();
    });
});
