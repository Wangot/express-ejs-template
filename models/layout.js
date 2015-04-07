module.exports = function(app){
	app.use(function(req, res, next) {
	    res.renderLayout = function(viewPage, options, layout){
	        if(!layout) layout = 'main';
	        var ejs = require('ejs');
	        var fs = require('fs');
	        options.site = app.locals.site;
	        var appRootDir = __dirname + '/../';
	        var content = ejs.compile(
	                fs.readFileSync(appRootDir + 'views/'+ viewPage +'.ejs', 'utf8')
	            )(options);

	        // this.send(content);
	        options.content = content;
	        options.viewPage = viewPage;
	        this.render('layouts/'+ layout, options);
	    }
	    next();
	});
}