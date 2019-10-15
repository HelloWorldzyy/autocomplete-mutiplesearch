This project is for movie autocomplete search. you can search movies by using input field.

#install 

there are 2 steps for install:
1. git clone https://github.com/HelloWorldzyy/autocomplete-mutiplesearch.git   into your local folder
2. npm install


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

 

## About

I write my autocomplete function into a single component: Autocomplete, so user can directly call it and reuse it.
In order to Interact with OMDB, I use the following functions.
fetch(`http://www.omdbapi.com/?apikey=c5451a0c&s=${keyWord}`)
  .then(response => response.json())
  .then(this.renderMovies)

In order to do multiple select, I use React-Select class, which can help us easily do multiple selection. Then I write callback function onInputChange() to do search, each time user do some input.  For limit user input size, I just store the current selectedValue, and make sure it smaller than 5.
