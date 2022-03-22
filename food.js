// ########## VARIABLES ##########
let guestOne = {};
let guestTwo = {};

const foodForm = document.getElementById('food-form');
foodForm.addEventListener('submit', collectFoodForm);

function collectFoodForm(event) {
    event.preventDefault();
    guestOne.firstName = document.getElementById('first1').value;
    guestOne.lastName = document.getElementById('last1').value;
    guestOne.starter = document.getElementById('starter1').value;
    guestOne.main = document.getElementById('main1').value;
    guestOne.dessert = document.getElementById('dessert1').value;

    guestTwo.firstName = document.getElementById('first2').value;
    guestTwo.lastName = document.getElementById('last2').value;
    guestTwo.starter = document.getElementById('starter2').value;
    guestTwo.main = document.getElementById('main2').value;
    guestTwo.dessert = document.getElementById('dessert2').value;

    console.log(guestOne);
    console.log(guestTwo);
    document.getElementById('send').value = '✔️';
    document.getElementById('send').classList = 'sent';
}