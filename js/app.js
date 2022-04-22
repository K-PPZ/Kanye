fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {




        const Quote = document.getElementById("Quote");

        Quote.addEventListener('click', event => {
            let Div = document.createElement("div");
            document.getElementById("main").appendChild(Div);

            let Button1 = document.createElement("button");
            Button1.textContent = "Up";
            document.getElementById("main").appendChild(Button1);

            let Button2 = document.createElement("button");
            Button2.textContent = "Down";
            document.getElementById("main").appendChild(Button2);
          });




    })
    .catch((error) => console.log(error));