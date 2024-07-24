const names = ["Guadalupe", "Ollie", "Aki"];
const surprise = "surprise"

function writeCards(names, event) {

    const newArray = []

    for (let x = 0; x < names.length; x++) {

    newArray.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`)

    }

    return newArray;

}

function countDown(start) {

let x = start;

while (x >= 0) {
  console.log(x--);
}
}




