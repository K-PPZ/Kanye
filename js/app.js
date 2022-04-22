fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {




        const Quote = document.getElementById("Quote");

        Quote.addEventListener('click', event => {
            let Div = document.createElement("div");
            document.getElementById("main").appendChild(Div);
          });




    })
    .catch((error) => console.log(error));