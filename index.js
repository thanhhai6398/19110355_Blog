const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const blogRouter = require('./routes/blogRoutes');

const hbs = require('hbs');

const app = express();
const PORT = 5000;

// view engine setup
hbs.registerPartials(__dirname + '/views/partials');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/blog', blogRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});