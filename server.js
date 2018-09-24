const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id',express.static(path.join(__dirname, 'public')));

app.all('/api/restaurant/reviews/*', (req, res) => res.redirect(`http://reviews-api.us-west-2.elasticbeanstalk.com/${req.path}`));
app.all('/api/restaurant/info/*', (req, res) => res.redirect(`http://zagat-info2.us-west-1.elasticbeanstalk.com/${req.path}`));
app.all('/api/restaurant/suggestions/*', (req, res) => res.redirect(`http://zagat-suggestions-dev.us-west-1.elasticbeanstalk.com/${req.path}`));
app.all('/api/restaurant/carousel/*', (req, res) => res.redirect(`http://carousel-dev7.us-west-1.elasticbeanstalk.com/${req.path}`));
app.all('/api/restaurant/recommendations/*', (req, res) => res.redirect(`http://rec-public-dev.us-west-1.elasticbeanstalk.com/${req.path}`));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});