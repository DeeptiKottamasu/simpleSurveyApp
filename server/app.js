const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-errors');

const digitalToolsRoutes = require('./routes/digitaltools-routes');
const projectRoutes = require('./routes/projects-routes');
const userRoutes = require('./routes/users-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/digitalTools', digitalToolsRoutes); // ==> /api/digitalTools/...
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users', userRoutes);
app.use((req, res, next) =>{
    const error = new HttpError("Could not find this route ", 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'});
  });

app.listen(5000);
