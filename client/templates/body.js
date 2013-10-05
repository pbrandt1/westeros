Template.body.helpers({
    pageName: function() {
        return Meteor.Router.page();
    },
    games: function() {
        return Games.find();
    }
});