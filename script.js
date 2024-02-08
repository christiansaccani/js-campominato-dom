function progressiveNum (squares) {

    for (i = 0; i < squares; i++) {

        const newElement = document.createElement("div");
        newElement.innerText = (i + 1);
        document.querySelector(".map-container").append(newElement);
        newElement.classList.add("square");
        
        if(numbersArray.includes(i + 1)) {
            newElement.classList.add("bomb"); 
        } 

        if (squares == 100) {

            newElement.classList.add("easy");     
            
        } else if (squares == 81) {

            newElement.classList.add("medium"); 

        } else if (squares == 49) {

            newElement.classList.add("hard"); 

        }

        newElement.addEventListener("click", function() {

            // this si riferisce a newElement
            console.log(this.innerText);

            if ( ! this.classList.contains("active")) {
                pointsCounter++;
            }

            this.classList.add("active");
            console.log(pointsCounter);
              

            if (this.classList.contains("bomb")) {

                this.classList.add("activated");
                pointsCounter--;
                console.log(pointsCounter);
                
                document.getElementById("result").append(`Partita finita! Il tuo punteggio è di ${pointsCounter}`);
                
                pointsCounter = 0; 

            }
            }            
        )
    }
}

function getRandomNumbersArray(range) {

    numbersArray.length = 0;   //per resettare l'array

    while (numbersArray.length < 16) {

        const randomNumber = Math.floor(Math.random() * range + 1);
  
        const newNumber = randomNumber;

        //controllo se il numero appena generato è già presente dentro il nostro array
        if( ! numbersArray.includes(newNumber) ) {

            numbersArray.push(newNumber);

        }
    }
    console.log(numbersArray);
    return numbersArray;

}




const startBtn = document.querySelector("#start-btn");
const container = document.getElementsByClassName("map-container");
const numbersArray = [];
let pointsCounter = 0; 




startBtn.addEventListener("click", function() {

    document.querySelector(".map-container").innerHTML = '';   //Per svuotare la pagina corrente al click
    document.getElementById("result").innerHTML = '';

    const userChoice = document.querySelector("#difficult-select").value
    console.log(userChoice);

    if (userChoice == "easy") {

        getRandomNumbersArray (100);
        progressiveNum (100);

    } else if (userChoice == "medium") {

        getRandomNumbersArray (81);
        progressiveNum (81);

    } else if (userChoice == "hard") {

        getRandomNumbersArray (49);
        progressiveNum (49);

    }
}
)

