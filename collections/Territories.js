var territories = [
    {id: 1, type: 1, borderLand: [2, 3], borderSea: [1, 12], power: 1, hue: 40, name: "Castle Black"},
    {id: 2, type: 1, port: {sea: 1, hue: 50}, borderLand: [1, 3, 4, 5, 9], borderSea: [1, 12], power: 1, supply: 1, muster: 2, hue: 227, name: "Winterfell"},
    {id: 3, type: 1, borderLand: [1, 2], borderSea: [12], power: 1, hue: 156, name: "Karhold"},
    {id: 4, type: 1, borderLand: [2], borderSea: [1], supply: 1, hue: 200, name: "Stony Shore"},
    {id: 5, type: 1, port: {sea: 11, hue: 333}, borderLand: [2, 6, 9], borderSea: [11], muster: 1, hue: 52, name: "White Harbor"},
    {id: 6, type: 1, borderLand: [5], borderSea: [11, 12], supply: 1, hue: 229, name: "Widow's Watch"},
    {id: 7, type: 1, borderLand: [8], borderSea: [1, 2, 3], muster: 1},
    {id: 8, type: 1, borderLand: [7, 9, 10], borderSea: [1, 3], supply: 1},
    {id: 9, type: 1, borderLand: [2, 5, 8, 10, 11], borderSea: [11], muster: 1},
    {id: 10, type: 1, borderLand: [8, 9, 11, 14], borderSea: [3], power: 1, muster: 2, supply: 1},
    {id: 11, type: 1, borderLand: [9, 10, 13, 15], borderSea: [11], power: 1},
    {id: 13, type: 1, borderLand: [11, 15], borderSea: [11], supply: 1},
    {id: 14, type: 1, borderLand: [10, 17, 18, 19], borderSea: [3, 4], power: 1, supply: 1, muster: 2},
    {id: 15, type: 1, borderLand: [11, 13, 16, 20], borderSea: [11], supply: 1},
    {id: 16, type: 1, borderLand: [15], borderSea: [11], power: 1, supply: 1, muster: 1},
    {id: 17, type: 1, borderLand: [14, 18, 21], borderSea: [4], port: 4, supply: 2, muster: 2},
    {id: 18, type: 1, borderLand: [14, 17, 19, 21, 22], power: 1},
    {id: 19, type: 1, borderLand: [14, 18, 20, 22], power: 1, muster: 1},
    {id: 20, type: 1, borderLand: [15, 19, 22, 23], borderSea: [11, 10], muster: 1},
    {id: 21, type: 1, borderLand: [17, 18, 22, 24, 25], borderSea: [2, 4, 5], supply: 1},
    {id: 22, type: 1, borderLand: [18, 19, 20, 21, 23, 25], supply: 2},
    {id: 23, type: 1, borderLand: [20, 22, 25, 26], borderSea: [10], power: 2, muster: 2},
    {id: 24, type: 1, borderLand: [21, 25, 27, 30], borderSea: [5, 6], supply: 2, muster: 2},
    {id: 25, type: 1, borderLand: [21, 22, 23, 24, 26, 27, 28], muster: 1},
    {id: 26, type: 1, borderLand: [23, 25, 28, 29], borderSea: [9, 10], power: 1, supply: 1},
    {id: 27, type: 1, borderLand: [24, 25, 28, 30, 31, 32], power: 1},
    {id: 28, type: 1, borderLand: [25, 26, 27, 29, 32, 33], borderSea: [8], power: 1},
    {id: 29, type: 1, borderLand: [26, 28], borderSea: [7, 8, 9], port: 9, muster: 1},
    {id: 30, type: 1, borderLand: [24, 27, 31], borderSea: [6], port: 6, muster: 2},
    {id: 31, type: 1, borderLand: [27, 30, 32], borderSea: [6], supply: 1},
    {id: 32, type: 1, borderLand: [27, 28, 31, 33, 35], power: 1, supply: 1},
    {id: 33, type: 1, borderLand: [28, 32, 34, 35, 36], borderSea: [8], muster: 1},
    {id: 34, type: 1, borderLand: [33, 36], borderSea: [7, 8], power: 1, supply: 1, muster: 2},
    {id: 35, type: 1, borderLand: [32, 33, 36], borderSea: [5, 7], supply: 1, muster: 1},
    {id: 36, type: 1, borderLand: [33, 34, 35], borderSea: [7], supply: 1},
    {id: 37, type: 1, borderSea: [5, 6], power: 1},
    {id: 38, type: 1, borderSea: [9], port: 9, power: 1, supply: 1, muster: 2},
    {id: 39, type: 1, borderSea: [3], port: 3, power: 1, supply: 1, muster: 2},
    {id: 1, type: 2, borderLand: [1, 2, 4, 7, 8], borderSea: [2], ports: [1]},
    {id: 2, type: 2, borderLand: [7, 21], borderSea: [1, 3, 4, 5]},
    {id: 3, type: 2, borderLand: [7, 8, 10, 14, 39], borderSea: [2, 4], ports: [39]},
    {id: 4, type: 2, borderLand: [14, 17, 21], borderSea: [2, 3], ports: [17]},
    {id: 5, type: 2, borderLand: [21, 24, 35, 37], borderSea: [2, 6, 7]},
    {id: 6, type: 2, borderLand: [24, 30, 31, 37], borderSea: [5], ports: [30]},
    {id: 7, type: 2, borderLand: [35, 36, 34, 29], borderSea: [5, 8, 9], ports: [34]},
    {id: 8, type: 2, borderLand: [28, 29, 33, 34], borderSea: [7]},
    {id: 9, type: 2, borderLand: [20, 26, 29, 38], borderSea: [7, 10, 11], ports: [29, 38]},
    {id: 10, type: 2, borderLand: [20, 23, 26], borderSea: [9]},
    {id: 11, type: 2, borderLand: [5, 6, 9, 11, 13, 15, 16, 20], borderSea: [9, 12], ports: [5]},
    {id: 12, type: 2, borderLand: [1, 2, 3, 5, 6], borderSea: [11]}
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