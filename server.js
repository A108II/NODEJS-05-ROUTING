const express = require('express');
const app = express();
const path = require('path');


const PORT = process.env.PORT || 3500
// For serving static files like image, or css to render properly
app.use(express.static(path.join(__dirname)));

// When a user navigates to http://localhost:3000/, http://localhost:3000/index, or http://localhost:3000/index.html, the route handler will match these URLs due to the regular expression '^/$|index(.html)?'.
app.get('^/$|index(.html)?', (req, res) => {
    // res.sendFile('./views/index.html', )
    res.sendFile(path.join(__dirname, 'html_files', 'index.html'));
});


// Get request to my-page.html
app.get('/my-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'html_files', 'my-page.html'));
})

// Get request to your-page.html and redirect to my-page.html
app.get('/your-page(.html)?', (req, res) => {
    res.redirect(301, '/my-page.html') 
    // Default is 302 => Page has moved to a new location but it's temporary, 301 => Page has moved to a new location permanently 
});

// Get request to home.html
app.get('/home(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'html_files', 'home.html'));
});

// Get request to main.html and redirect to home.html
app.get('/main(.html)?', (req, res) => {
    res.redirect(301, '/home.html');
})

// /: Begin the regular expression literal.
// ^: Start of the string.
// \/: Literal forward slash. \/ specifies it's not a delimiter of regular expression
// subdir: The string "subdir".
// \/?: Ending with a forward slash is optional. 
// $: End of the string.
// /: End of the regular expression literal.
app.get(/^\/subdir\/?$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'html_files', 'subdir', 'index.html'));
});


// Route handlers I
app.get('/hi(.html)?', (req, res, next) => {
    console.log('Loading the page...')
    next() // move on to the next handler 
}, (req, res) => {
    res.send('Hello world');
});


// Route handlers II
const first = (req, res, next) => {
    console.log('First')
    next(); // passing the control to the next middleware
};

const second = (req, res, next) => {
    console.log('Second')
    next();
};

const third = (req, res, next) => {
    console.log('Third');
    res.send('one, two, three');
    // ending req-res cycle
};

app.get('/chain(.html)?', [first, second, third]); // array of middleware functions to be executed in sequence 

// * Matches any path that hasn't been matched by earlier route definitions
// app.get('/*', (req, res) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'html_files', '404.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));