let button = document.getElementById("button");
button.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            response.json()
                .then(data => {
                    for (let i of data)
                        if (i.completed === true) {
                            console.log("COMPLETED");
                            console.log(i.id + " " + i.title)
                        } else {
                            console.log("UNCOMPLETED")
                            console.log(i.id + " " + i.title)
                        }
                })
        })
        .catch(err => {
            console.log(err)
        })


})