let button = $("input");
button.click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos",
        success: function (result) {
            for (let data of result) {
                if (data.completed === true) {
                    console.log("COMPLETED");
                    console.log(data.id + " " + data.title)
                }
                else {
                    console.log("UNCOMPLETED")
                    console.log(data.id + " " + data.title)
                }
            }
        }
    })




})