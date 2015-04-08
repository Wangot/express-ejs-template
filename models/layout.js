module.exports = function(app){
	app.use(function(req, res, next) {
	    res.renderLayout = function(viewPage, options, layout){
	    	var that = this;
	        if(!layout) layout = 'main';

	        var appRootDir = __dirname + '/../'; // Change this depending on the location of this
	        app.render(appRootDir + 'views/'+ viewPage, options, function(err, html){
		        options.content = html;
		        options.viewPage = viewPage;
		        that.render('layouts/'+ layout, options);

	        });

	        /*var ejs = require('ejs');
	        var fs = require('fs');
	        var appRootDir = __dirname + '/../';
	        var content = ejs.compile(
	                fs.readFileSync(appRootDir + 'views/'+ viewPage +'.ejs', 'utf8')
	            )(options);

	        // this.send(content);
	        options.content = content;
	        options.viewPage = viewPage;
	        this.render('layouts/'+ layout, options);*/
	    }
	    next();
	});
}