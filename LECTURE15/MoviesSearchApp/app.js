const form = document.querySelector('form');
const result = document.getElementById('result');

//(III)from eventListener controls comes to this function and request is send
//this function accepts the name of the show for which the user is looking
//and using this function we will send the request
function getShows(searchText) {

    //to clear the div tag so that new search show is only visible
    //if not applied then all the shows will be visible that were
    //before the current show
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
    const url = ` https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
        .then((res) => {
            for (let item of res.data) {
                //kuch properties mai image ki value null hai
                //so we are not able to access medium property
                //because of that hame kuch values null bhi return 
                //ho rhi hai to sort that out use if statement
                if (item.show.image) {
                    const img = document.createElement('img');

                    img.src = item.show.image.medium;
                    img.style.margin = '10px';
                    result.append(img);
                }
            }
        })
        .catch((err) => {
            console.log(err);
        })
}
//from here control goes back to eventListener


//(I)first control comes here
form.addEventListener('submit', (e) => {
    //below statement is written so that form does not get submit by default
    e.preventDefault();

    //form directory contains an array of elements 
    //in which elements[0].value contains the text
    //that we input in the first input field in the form
    const searchText = form.elements[0].value;

    //(II)from here control goes to getShows function with parameter passing as searchText
    getShows(searchText);

    //(IV)control comes back and input field is made empty string
    form.elements[0].value = "";
})