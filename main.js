require('./server');
app.use((req, res, next) => { 
  console.log(req.ip);
  return next();
});
