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
                resultObj["result"]["err"] = [];
                if (!username.match(/^[a-zA-Z\-]+/)) {
                    resultObj["result"]["err"].push("Invalid Username");
                }
                /*
                 * At least one upper case letter
                 * At least one lower case letter
                 * At least one number
                 * At least one special character
                 * Min length is 5
                 */
                if (!password.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,}$/)) {
                    resultObj["result"]["err"].push("Invalid Password");
                }
                response.render("login", resultObj);
            }
        });
}