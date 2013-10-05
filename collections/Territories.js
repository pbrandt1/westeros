var territories = [
    {id: 1, type: 1, borderLand: [2, 3], borderSea: [51, 62], power: 1, hue: 40, name: "Castle Black"},
    {id: 2, type: 1, port: {sea: 51, hue: 50}, borderLand: [1, 3, 4, 5, 9], borderSea: [51, 62], power: 1, supply: 1, muster: 2, hue: 10, name: "Winterfell"},
    {id: 3, type: 1, borderLand: [1, 2], borderSea: [62], power: 1, hue: 156, name: "Karhold"},
    {id: 4, type: 1, borderLand: [2], borderSea: [51], supply: 1, hue: 200, name: "Stony Shore"},
    {id: 5, type: 1, port: {sea: 61, hue: 333}, borderLand: [2, 6, 9], borderSea: [61], muster: 1, hue: 52, name: "White Harbor"},
    {id: 6, type: 1, borderLand: [5], borderSea: [61, 62], supply: 1, hue: 12, name: "Widow's Watch"},
    {id: 7, type: 1, borderLand: [8], borderSea: [51, 52, 53], muster: 1, hue: 175, name: "Flint's Finger"},
    {id: 8, type: 1, borderLand: [7, 9, 10], borderSea: [51, 53], supply: 1, hue: 44, name: "Greywater Watch"},
    {id: 9, type: 1, borderLand: [2, 5, 8, 10, 11], borderSea: [61], muster: 1, hue: 335, name: "Moat Cailin"},
    {id: 10, type: 1, borderLand: [8, 9, 11, 14], borderSea: [53], power: 1, muster: 2, supply: 1, hue: 54, name: "Seagard"},
    {id: 11, type: 1, borderLand: [9, 10, 13, 15], borderSea: [61], power: 1, hue: 286, name: "The Twins"},
    {id: 13, type: 1, borderLand: [11, 15], borderSea: [61], supply: 1, hue: 56, name: "The Fingers"},
    {id: 14, type: 1, borderLand: [10, 17, 18, 19], borderSea: [53, 54], power: 1, supply: 1, muster: 2, hue: 20, name: "Riverrun"},
    {id: 15, type: 1, borderLand: [11, 13, 16, 20], borderSea: [61], supply: 1, hue: 177, name: "The Mountains of the Moon"},
    {id: 16, type: 1, borderLand: [15], borderSea: [61], power: 1, supply: 1, muster: 1, hue: 58, name: "The Eyrie"},
    {id: 17, type: 1, borderLand: [14, 18, 21], borderSea: [54], port: {sea: 54, hue: 179}, supply: 2, muster: 2, hue: 337, name: "Lannisport"},
    {id: 18, type: 1, borderLand: [14, 17, 19, 21, 22], power: 1, hue: 351, name: "Stoney Sept"},
    {id: 19, type: 1, borderLand: [14, 18, 20, 22], power: 1, muster: 1, hue: 353, name: "Harrenhall"},
    {id: 20, type: 1, borderLand: [15, 19, 22, 23], borderSea: [511, 510], muster: 1, hue: 357, name: "Crackclaw Point"},
    {id: 21, type: 1, borderLand: [17, 18, 22, 24, 25], borderSea: [52, 54, 55], supply: 1, hue: 349, name: "Searoad Marshes"},
    {id: 22, type: 1, borderLand: [18, 19, 20, 21, 23, 25], supply: 2, hue: 193, name: "Blackwater"},
    {id: 23, type: 1, borderLand: [20, 22, 25, 26], borderSea: [60], power: 2, muster: 2, hue: 195, name: "King's Landing"},
    {id: 24, type: 1, borderLand: [21, 25, 27, 30], borderSea: [55, 56], supply: 2, muster: 2, hue: 197, name: "Highgarden"},
    {id: 25, type: 1, borderLand: [21, 22, 23, 24, 26, 27, 28], muster: 1, hue: 199, name: "The Reach"},
    {id: 26, type: 1, borderLand: [23, 25, 28, 29], borderSea: [59, 60], power: 1, supply: 1, hue: 201, name: "Kingswood"},
    {id: 27, type: 1, borderLand: [24, 25, 28, 30, 31, 32], power: 1, hue: 203, name: "Dornish Marshes"},
    {id: 28, type: 1, borderLand: [25, 26, 27, 29, 32, 33], borderSea: [58], power: 1, hue: 205, name: "The Boneway"},
    {id: 29, type: 1, borderLand: [26, 28], borderSea: [57, 58, 59], port: {sea: 59, hue: 16}, muster: 1, hue: 207, name: "Storms End"},
    {id: 30, type: 1, borderLand: [24, 27, 31], borderSea: [56], port: {sea: 56, hue: 14}, muster: 2, hue: 209, name: "Oldtown"},
    {id: 31, type: 1, borderLand: [27, 30, 32], borderSea: [56], supply: 1, hue: 211, name: "Three Towers"},
    {id: 32, type: 1, borderLand: [27, 28, 31, 33, 35], power: 1, supply: 1, hue: 213, name: "Prince's Pass"},
    {id: 33, type: 1, borderLand: [28, 32, 34, 35, 36], borderSea: [58], muster: 1, hue: 215, name: "Yronwood"},
    {id: 34, type: 1, borderLand: [33, 36], borderSea: [57, 58], port: {sea: 57, hue: 18}, power: 1, supply: 1, muster: 2, hue: 217, name: "Sunspear"},
    {id: 35, type: 1, borderLand: [32, 33, 36], borderSea: [55, 57], supply: 1, muster: 1, hue: 219, name: "Starfall"},
    {id: 36, type: 1, borderLand: [33, 34, 35], borderSea: [57], supply: 1, hue: 221, name: "Salt Shore"},
    {id: 37, type: 1, borderSea: [55, 56], power: 1, hue: 225, name: "The Arbor"},
    {id: 38, type: 1, borderSea: [59], port: {sea: 59, hue: 355}, power: 1, supply: 1, muster: 2, hue: 223, name: "Dragonstone"},
    {id: 39, type: 1, borderSea: [53], port: {sea: 53, hue: 339}, power: 1, supply: 1, muster: 2, hue: 341, name: "Pike"},
    {id: 51, type: 2, borderLand: [1, 2, 4, 7, 8], borderSea: [52], ports: [151], hue: 284, name: "Bay of Ice"},
    {id: 52, type: 2, borderLand: [7, 21], borderSea: [51, 53, 54, 55], hue: 345, name: "Sunset Sea"},
    {id: 53, type: 2, borderLand: [7, 8, 10, 14, 39], borderSea: [52, 54], ports: [139], hue: 343, name: "Ironman's Bay"},
    {id: 54, type: 2, borderLand: [14, 17, 21], borderSea: [52, 53], ports: [117], hue: 347, name: "The Golden Sound"},
    {id: 55, type: 2, borderLand: [21, 24, 35, 37], borderSea: [52, 56, 57], hue: 227, name: "West Summer Sea"},
    {id: 56, type: 2, borderLand: [24, 30, 31, 37], borderSea: [55], ports: [130], hue: 229, name: "Redwyne Straights"},
    {id: 57, type: 2, borderLand: [35, 36, 34, 29], borderSea: [55, 58, 59], ports: [134], hue: 231, name: "East Summer Sea"},
    {id: 58, type: 2, borderLand: [28, 29, 33, 34], borderSea: [57], hue: 233, name: "Sea of Dorne"},
    {id: 59, type: 2, borderLand: [20, 26, 29, 38], borderSea: [57, 60, 61], ports: [129, 138], hue: 235, name: "Shipbreaker Bay"},
    {id: 60, type: 2, borderLand: [20, 23, 26], borderSea: [95], hue: 237, name: "Blackwater Bay"},
    {id: 61, type: 2, borderLand: [5, 6, 9, 11, 13, 15, 16, 20], borderSea: [59, 62], ports: [105], hue: 239, name: "The Narrow Sea"},
    {id: 62, type: 2, borderLand: [1, 2, 3, 5, 6], borderSea: [61], hue: 359, name: "The Shimmering Sea"},
  {id: 102, type: 3, hue: 50, name: "Port of Winterfell"},
  {id: 105, type: 3, hue: 330, name: "Port of White Harbor"},
  {id: 117, type: 3, hue: 179, name: "Port of Lannisport"},
  {id: 139, type: 3, hue: 339, name: "Port of Pyke"},
  {id: 138, type: 3, hue: 355, name: "Port of Dragonstone"},
  {id: 129, type: 3, hue: 16, name: "Port of Storms End"},
  {id: 130, type: 3, hue: 14, name: "Port of Oldtown"},
  {id: 134, type: 3, hue: 18, name: "Port of Sunspear"}
];


Territories = new Meteor.Collection("territories", {});

if (Meteor.isServer) {
  Meteor.publish("territories", function() {
    return Territories.find();
  })
}

if (Meteor.isClient) {
  Meteor.subscribe("territories");
}

// FIXTURE DATA
if (Meteor.isServer && Territories.find().count() === 0) {
  _.each(territories, function(territory) {
    Territories.insert(territory);
  })
}