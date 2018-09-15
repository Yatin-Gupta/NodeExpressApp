module.exports = function(app) {
    app.get("/", function(request, response) {
        response.writeHead(301, {
            Location: '/login'
        }); // URL Redirection
        response.end();
    });
    app.route("/login")
        .get(function(request, response) {
            response.render("login");
        })
        .post(function(request, response) { // here we don't need to pass urlencodedparser as we already use it app js
            let requestParams = request.body;
            let resultObj = { "result": {} };
            if (requestParams.submit) {
                let username = requestParams.username;
                let password = requestParams.password;
                if (!username.match(/^[a-zA-Z\-]+/)) {
                    resultObj["result"]["err"] = "Invalid Username"
                    response.render("login", resultObj);
                }
            }
        });
}