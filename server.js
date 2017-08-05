var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
    'article-one': {
        title: 'Article One | Sachin Harle',
        heading: 'Article One',
        date: 'August 1,2017',
        content: `
         <p>
            This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.
        </p>
        <p>
            This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.
        </p>
        <p>
            This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.This is my artical one.
        </p>
        `
    },
    'article-two': {
        title: 'Article Two | Sachin Harle',
        heading: 'Article Two',
        date: 'August 15,2017',
        content: `
         <p>
            This is the content of my Second artical.
        </p>
        `
    },
    'article-three': {
        title: 'Article Three | Sachin Harle',
        heading: 'Article Three',
        date: 'August 28,2017',
        content: `
         <p>
            This is the content of my Third article.
        </p>
        `
    },
};

function createTemplate(data){
    var title = data.title;
    var heading =data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>
             ${title}
            </title>
            <meta name"viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>

            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter++;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res){
    //articleName == article-one
    //articles[articleName] =={} content object for article-one
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];
/*app.get('/submit-name/:name',function(req, res){
    var name = req.params.name;
    names.push(name);
    //JSON Javascript Object Notation
    res.send(JSON.stringify(names));
});*/
app.get('/submit-name',function(req, res){
    var name = req.params.name;
    names.push(name);
    //JSON Javascript Object Notation
    res.send(JSON.stringify(names));
})

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
