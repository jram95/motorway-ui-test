
# Motorway UI Test

## Tasks

### 1. UI development

I created a responsive UI to display the images returned by the API.

I used bootstrap and HTML/CSS to create a responsive grid to display the images. If you hover over each car image then the number of likes fades in as an overlay.


### 2. Performance

I created another API endpoint in the server code to get the images without the time delay (as set out in the setTimeout function in the original endpoint). I left the original one in to compare the fetching times for both. I used console.time() and console.timeEnd() to measure this so both times can be viewed in the console - and it demonstrates (on average) that timer2 (new endpoint) is faster than timer1 (original endpoint).


### 3. Forms

I created a form using a Modal styling it using CSS, and styled the body of the form (ie the inputs) using bootstrap.


## Notes

Please could you test my work in a chrome browser, thanks!
