json_file = "data.json";
fetch(json_file)
    .then(response = response.json())
    .then(data => {
        console.log(data.companies[0]);
    })