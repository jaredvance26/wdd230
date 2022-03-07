json_file = "https://raw.githubusercontent.com/jaredvance26/wdd230/main/chamber/directory/js/data.json";
fetch(json_file)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })