# express-ejs-template
NodeJS Express with EJS and Custom Templating

router.get('/', function(req, res) {
  res.renderLayout('public/home', { title: 'Express' }); // Automatically call the main layout
});


router.get('/', function(req, res) {
  res.renderLayout('public/home', { title: 'Express' }, 'layout-name'); // call the 3rd parameter as layout
});
