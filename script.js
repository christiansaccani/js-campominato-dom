function progressiveNum (squares) {

    for (i = 0; i < squares; i++) {

        const newElement = document.createElement("div");
        newElement.innerText = (i + 1);
        document.querySelector(".map-container").append(newElement);
        newElement.classList.add("square");  

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
            this.classList.add("active");  

            }
        )
    }
}

const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", function() {

    document.querySelector(".map-container").innerHTML = '';   //Per svuotare la pagina corrente al click

    const userChoice = document.querySelector("#difficult-select").value
    console.log(userChoice);

    if (userChoice == "easy") {

        progressiveNum (100);

    } else if (userChoice == "medium") {

        progressiveNum (81);

    } else if (userChoice == "hard") {

        progressiveNum (49);

    }
}
)