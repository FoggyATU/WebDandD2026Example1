// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');


// where to find static files - css, images, js
// this needs to be uncommented so that the css file can be found and used in the layout.hbs file
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home"}
  // pass object to to render in "index"
  res.render('index', {state, head});
  // send this to terminal where node app is running
  console.log('home')

});

// contact route
app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"Contact"}
    res.render('contact', { state, head});
    console.log('contact')
  });

app.get('/music', (req, res) => {
  state={music:true}
  head={title:"Music"}
  res.render('music', {state, head});
  console.log('music')
});

app.get('/programming', (req, res) => {
  state={programming:true}
  head={title:"Programming"}
  res.render('programming', {state, head});
  console.log('programming')
});

app.get('/photos', (req, res) => {
  state={photography:true}
  head={title:"Photos"}
  res.render('photos', {state, head});
  console.log('photos')
});

app.get('/creatures', (req, res) => {
  state={creatures:true}
  head={title:"Creatures"}
  res.render('creatures', {state, head});
  console.log('creatures')
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});