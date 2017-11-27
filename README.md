# multiapiserver

https://code-academy-backend.herokuapp.com
Apis available:
POST /login with body { user: "bob"} - this will give u the token
GET /prepaid with header { secret: "user token u got from login"}
POST /postpaid with body { secret: "user token u got from login"}
POST /user with header { secret: "secret u got from combining userDataKey from postpaid + prepaid"}
