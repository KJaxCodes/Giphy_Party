document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM CONTENT LOADED');

    // look back at the <readme.md> file for some hints //
    // working API key //
    const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
    const gifButton = document.getElementById("generate-button");
    const displayDiv = document.getElementById("display-div");
    const clearButton = document.getElementById("clear-all");
    const searchInput = document.getElementById("search");

    // searchInput.addEventListener("oninput", function () {

    //     console.log(searchTerm);
    // })

    function generateRandomNumber(multiplier {
        return Math.floor(Math.random() * multipler);

});


gifButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("I clicked the button");
    const inputValue = searchInput.value;
    giphyRequest(inputValue);
});

async function giphyRequest(searchTerm) {
    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=5`)
    console.log(response.data);
    const arrLength = response.data.data.length;
    const random = generateRandomNumber(arrLength);

    displayDiv.innerHTML = "";
    let h4 = document.createElement("h4");
    h4.innerHTML = response.data.data[random].title;
    displayDiv.appendChild(h4);

    const image = document.createElement("img");




    image.src = response.data.data[random].images.downsized.url;
    image.alt = response.data.data[random].alt_text;
    image.id = "gif";
    displayDiv.appendChild(image);
};

clearButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Clear all");
    console.log(displayDiv);
    displayDiv.innerHTML = "";
    searchInput.value = "";
    //clear the input/search term?
});


// - set limit parameter - get the first 10... - got this
// - offset/pagination - get the next 10... - look up pagination
// - Attribution? We require all apps that use GIPHY API to conspicuously display "Powered By GIPHY" attribution marks where the API is utilized (see SDK attribution guide here). You can find approved official logo marks here.


// async function giphyRequest() {
//     const response = await axios.get(`http://api.giphy.com/v1/gifs/trending?api_key=${giphyApiKey}&q=${searchTerm}`);
//     console.log(response);
//     console.log(response.status);
//     console.log(response.data.data.length);
//     console.log(response.data.data[0].images.downsized.url); //gets the first giphy result URL
//     console.log(response.data.data[0].rating); //gets the first giphy result rating
//     console.log(searchTerm);
//   }

});


//add next button to show the next set of GIFs?