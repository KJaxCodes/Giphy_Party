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


    //     function generateRandomNumber(multiplier {
    //         console.log("Upper limit is " + multipler);
    //         return Math.floor(Math.random() * multipler);
    // });

    let offset = 0;

    gifButton.addEventListener("click", function (e) {
        e.preventDefault();
        // console.log("I clicked the button");
        const inputValue = searchInput.value;
        giphyRequest(inputValue);
    });

    async function giphyRequest(searchTerm) {
        console.log("Offset: " + offset);
        const response = await axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}&limit=50`)
        console.log(response.data);
        // const arrLength = response.data.data.length;
        // const random = generateRandomNumber(arrLength);
        // we run the random number generator five times;
        // 5, 24, 31, 11, 3 
        //Push all of the results to an array = [5, 24, 31, 11, 3]
        //loop over that array
        // displayDiv.innerHTML = ""; commenting out so that the gif isn't cleared when the button is clicked

        let newDiv = document.createElement("div");
        displayDiv.appendChild(newDiv);
        console.log(newDiv);

        let h4 = document.createElement("h4");

        h4.innerHTML = response.data.data[offset].title;
        newDiv.appendChild(h4);

        let image = document.createElement("img");

        image.src = response.data.data[offset].images.downsized.url;
        image.alt = response.data.data[offset].alt_text;
        image.id = "gif";
        newDiv.appendChild(image);
        offset += 1;
    };

    clearButton.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("Clear all");
        console.log(displayDiv);
        displayDiv.innerHTML = "";
        searchInput.value = "";
        //clear the input/search term?
    });

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




//add next button to show the next set of GIFs?