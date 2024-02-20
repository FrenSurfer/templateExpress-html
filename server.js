const express = require('express');
const path = require('path');



const app = express();
const port = 3000;



const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Serve les fichiers statiques du dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Configure le moteur de vue pour utiliser les fichiers HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

// Routes pour différentes pages
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
