/*
{
    name: "Might is Right",
    players: [
        { id: _id,
          house: house}
    ],
    admins: [],
    settings: {
      private: true,
      randomHouses: false
    },
    roundTrack: 1,
    wildlingTrack: 1,
    ironThrone: { },
    valyrianSteelBlade: { },
    messengerRaven: { },
    wildlingDecks: [ { }, { }],
    westerosDeck: [ _cardId: active or drawn ],
    neutralForcesTokens: [],
    gameData: {},
    privateData: {}

 */

GameProps = function(game) {
    _.extend(this, game);
}

_.extend(GameProps.prototype, {
    init: function() {
        Meteor.call("initGame");
    }
})

Games = new Meteor.Collection("games", {
    transform: function(game) { return new GameProps(game); }
});

if (Meteor.isServer) {
  Meteor.publish("games", function() {
    return Games.find();//{'players.id': Meteor.userId()});
  })
}

if (Meteor.isClient) {
  Meteor.subscribe("games");
}

Meteor.methods({
  /**
   * Creates a game when someone presses "Start Game" after a propsed game has been filled.
   * @param players: An array of players, ie [{house: "greyjoy", _id: "some user id"}, {house: "lannister", ...}]
   */
  createGame: function(players) {

  }
})

// FIXTURE DATA
if (Meteor.isServer && Games.find().count() === 0) {
  var games = [
    {
      name: "Hear Me Snore",
      players: [
        {house: 'greyjoy',
        id: "vTgDQMzxt4fHcRvd6"},
        {house: 'lannister',
          id: null},
        {house: 'tyrell',
          id: null},
        {house: 'stark',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'baratheon',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'martell',
          id: "vTgDQMzxt4fHcRvd6"}
      ],
      admins: ["vTgDQMzxt4fHcRvd6"]
    },
    {
      name: "Meteor is Coming",
      players: [
        {house: 'greyjoy',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'lannister',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'tyrell',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'stark',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'baratheon',
          id: "vTgDQMzxt4fHcRvd6"},
        {house: 'martell',
          id: null}
      ],
      admins: ["vTgDQMzxt4fHcRvd6"]
    }
  ];
  _.each(games, function(game) {
    Games.insert(game);
  });
}