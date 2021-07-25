# Tasks

Note: For this coding example, you will need to install a Chrome extension called “CORS Unblock”, so that you can use an external 3rd party API without running Cross Origin issues. 

Install the Chrome extension here: 
https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=en

## Task - 1

### (Part A)

Write a front end single page app that:
- On page load, read `https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0` which returns a list of json.
- Parse the content
- And display the json content in a HTML table or list.


### (Part B)

- When the user clicks on the item, display a modal that shows the object details. You may use any UI widget framework you are familiar with, e.g. Bootstrap. 


## Task - 2 

- Use BoredApi: this api gives a new task every time you make a get request.
- Create a react app which has 2 main pieces: new activity button & a list with all the activities.
- Whenever the new activity button is clicked flash a message for 2 seconds that new activity is added and add that activity to the list.


## Task - 3

- Use `https://restcountries.eu/rest/v2/capital/${capitalName}`; it gives you the country based on capital. 
- Create a react app which has 2 main pieces: a search Box & a list with all the countries.
- When you search for a country based on capital, if the country exists in the list display a message in red color - "Already added"
- If the country is not present in the list add the country in the list and flash a message in green - "New country added".