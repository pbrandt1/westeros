if (Meteor.isClient) {
    console.log('restart at ' + Date());

    Meteor.Router.add({
        "/game/:_id": {to: "game", and: function(id){ Session.set("currentGameId", id);}},
        "/new": "new",
        "/dashboard": "dashboard"
    })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
