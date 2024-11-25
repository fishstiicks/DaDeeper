const router = require('express').Router();


router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

  router.get('/test', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
  });


module.exports = router;