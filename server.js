const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
/*
app.use('/login', (req, res) =>
 {
   console.log(`Params: ${ JSON.stringify(req.params) }`);

    res.send({
      token: 'test123'
    });
  });
*/
//Kommentreade bort
//app.get('/login/:username', function (req, res) {
    //console.log(`Params: ${req.params}`);
    //console.log(`Params: ${ JSON.stringify(req.params) }`);
//    res.send({
//      token: 'test123'
//    });
//})

app.use(express.json())

app.post('/login', function (req, res) {



    console.log("___________________________________");
    console.log(`Params: ${ JSON.stringify(req.body) }`);
    console.log(`Params: ${ req.body.username }`);
    console.log(`Params: ${ req.body.password }`);

    let t_token = { token: 'test123' }
    let t_invalid_password = {
      "reason" : "INVALID_USER_AUTHENTICATION",
      "message" : "Failed to authenticate principal, password or user was invalid"
    }

    if ( req.body.username === "user" && req.body.password === "passw" ){
      res.send(t_token);
    }
    else {
      res.send(t_invalid_password);
    }


    /*res.send({
      token: 'test123'
    });*/
  })

  app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
