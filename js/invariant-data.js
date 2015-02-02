// Game invariants

var BuildingsList = [
{name: "Command Center",
hp: 3000,
matterCost: 5000,
energyCost: 50000,
matterProduction: 2,
energyProduction: 25,
buildTime: 1000,
benefit: "Your home base",
size: {x:4, y:4},
color: "#060",
active: true,
buildable: false},

{name: "Matter Mine",
hp: 200,
matterCost: 50,
energyCost: 520,
matterProduction: 2,
energyProduction: -5,
buildTime: 18,
benefit: "+2 matter / t",
size: {x:2, y:2},
color: "#699",
buildable: true},

{name: "Solar Power Plant",
hp: 100,
matterCost: 150,
energyCost: 800,
matterProduction: 0,
energyProduction: 20,
buildTime: 24,
benefit: "+20 energy / t",
size: {x:2, y:2},
color: "#FF6",
buildable: true},

{name: "Laser Tower",
hp: 500,
matterCost: 150,
energyCost: 800,
matterProduction: 0,
energyProduction: 0,
energyPerShot: 200,
damagePerShot: 50,
range: 100,
fireTime: 1,
buildTime: 40,
benefit: "50 damage per shot",
size: {x:1, y:1},
color: "#F00",
buildable: true},

{name: "Barricade",
hp: 1000,
matterCost: 100,
energyCost: 100,
matterProduction: 0,
energyProduction: 0,
buildTime: 10,
benefit: "A defensive wall",
size: {x:1, y:1},
color: "#555",
buildable: true
},

{name: "Build Slot",
hp: 100,
matterCost: 1000,
energyCost: 5000,
matterProduction: -5,
energyProduction: -10,
buildTime: 50,
benefit: "build more at once",
size: {x:1, y:1},
color: "#060",
buildable: false} // eventually buildable: to add this feature later
]

var GameOptions = {
  STARTING_MATTER: 1000,
  STARTING_ENERGY: 5000,
  COMMAND_CENTER: new Building(BuildingsList[0])
}
