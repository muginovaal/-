const mysql = require("mysql2");
const express = require("express");
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
 
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "site",
  password: "1111"
});
app.set("view engine", "html");
app.get("/", function(req, res){
    pool.query("SELECT * FROM info", function(err, data) {
      if(err) return console.log(err);
      res.render("index.html", {
          info: data
      });
    });
});
app.post("/create", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
    const Yorname = req.body.Yorname;
    const Yormail = req.body.Yormail;
    const Yormessage = req.body.Yormessage;
    pool.query("INSERT INTO info (YorName, YorEmail, YorTelephone) VALUES (?,?)", [Yorname, Yormail, Yormessage, id], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/");
    });
});
 
app.get("/edit/:id", function(req, res){
  const id = req.params.id;
  pool.query("SELECT * FROM info WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit.hbs", {
        info: data[0]
    });
  });
});
app.post("/edit", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const Yorname = req.body.name;
  const Yormail = req.body.age;
  const Yormessage = req.body.age;
  const id = req.body.id;
   
  pool.query("UPDATE info SET YorName=?, YorEmail=?, YorTelephone=?, WHERE id=?", [Yorname, Yormail, Yormessage, id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
app.listen(3000, function(){
  console.log("Успешно!");
});

particlesJS('particles-js',
{
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 4000
      }
    },
    "color": {
      "value": "#ff3232"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ff3232"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 2,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);
