

const userName = prompt("Qual'è il tuo nome?");
const userSurname = prompt("Qual'è il tuo cognome?");
const userFavouriteColor = prompt("Qual'è il tuo colore preferito?");

// alert(userName + userSurname + userFavouriteColor + "21");

//alert(`${userName}${userSurname}${userFavouriteColor}21`);

const userPswData = userName + userSurname + userFavouriteColor;

console.log(userPswData);

const userPassword = userPswData + "21";

console.log(userPassword);

alert(`Your password is: sonia${userPassword}`);

