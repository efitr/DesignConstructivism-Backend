


const Opinion = require('../models/opinion');
//const User = require('../models/user');

function opinions(app) {

  // CREATE
  app.post('/charities/opinions', (req, res) => {
    Opinion.create(req.body).then(opinion => {
      res.redirect(`/charities/${opinion.charityId}`)
      console.log("route post(/charities/opinions) - redirects(/charities/${opinion.charityId})")
      console.log("-----")
    }).catch((err) => {
      console.log(err.message)
    })
  });

  // DESTROY
  app.delete('/charities/opinions/:id', (req, res) => {
    Opinion.findByIdAndRemove(req.params.id).then((opinion) => {
      res.redirect(`/charities/${opinion.charityId}`);
      console.log("delete(/charities/opinions/:id) - redirect(/charities/${opinion.charityId})")
      console.log("-----")
    }).catch((err) => {
      console.log(err.message);
    });
  });
}

module.exports = opinions;