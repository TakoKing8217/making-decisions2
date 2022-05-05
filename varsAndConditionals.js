var johnSnowAttack = 25;
var jamieLannisterAttack = 35;

if (johnSnowAttack < jamieLannisterAttack) {
  console.log("Jamie Lannister has better attack than John Snow.");
} else if (johnSnowAttack < jamieLannisterAttack) {
  console.log("John Snow has a better attack than Jamie Lannister");
} else {
  console.log("John Snoe and Jamie Lannister have the same attack");
}

var johnSnowHealth = 100;
var johnSnowDefence = 0;

if (johnSnowHealth - jamieLannisterAttack <= 0) {
  console.log("John Snow is dead... for now.");
} else {
  johnSnowHealth -= jamieLannisterAttack;
  console.log(
    `Oof, John takes a brutal hit! His health is now ${johnSnowHealth}!`
  );
}

johnSnowDefence += 25;

if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefence) {
  console.log("John Snow is dead... for now.");
} else {
  johnSnowHealth -= jamieLannisterAttack - johnSnowAttack;
  console.log(
    `John takes a hit, but his shield takes most of the attack! His health is now ${johnSnowHealth}!`
  );
}

if (johnSnowHealth + 50 >= 100) {
  johnSnowHealth = 100;
} else {
  johnSnowHealth += 50;
}

let coinLandsHeads = false;
if (coinLandsHeads === false) {
  console.log("Jamie will allow Jon to run away.");
} else if (coinLandsHeads === true) {
  console.log("Jamie will aim to take Jon's head.");
}

if (coinLandsHeads !== true) {
  console.log("Jamie will allow Jon to run away.");
} else if (coinLandsHeads !== false) {
  console.log("Jamie will aim to take Jon's head.");
}

// for (let i = 0; i < 5; i++) {
//   johnSnowHealth -= jamieLannisterAttack - johnSnowDefence;
// }
// console.log(`Jon's health is now ${johnSnowHealth}!`);

// for (let i = 0; i < 5; i++) {
//   if (johnSnowHealth <= 0) {
//     console.log("Jon is dead. For good. He's not coming back.");
//   } else {
//     johnSnowHealth -= jamieLannisterAttack - johnSnowDefence;
//     console.log(`Jon's health is now ${johnSnowHealth}!`);
//   }
// }

while (johnSnowHealth > 0) {
  johnSnowHealth -= jamieLannisterAttack - johnSnowDefence;
  if (johnSnowHealth <= 0) {
    console.log("Jon is dead. Again. Whoop di do.");
  } else {
    console.log(`WOAHHH!! his health is now ${johnSnowHealth}`);
  }
}

let backpack = [];
backpack.push("sword", "shield", "food");

let belt = backpack.splice(0, 1);

let furCoat = "fur coat";

backpack.push(furCoat);

backpack.pop("shield");

let itemCount = backpack.length;

backpack.push("flint", "blanket", "knife", "toothbrush");

let backpack2 = backpack.splice(2, 3);

for (let i = 0; i < backpack.length; i++) {
  console.log(backpack[i]);
}

if (backpack.length >= 3) {
  for (let i = 0; i < 3; i++) {
    console.log(backpack[i]);
  }
}
// Practice the Do While Loops
// You can declare something with a null or undefined and
// then update its value down the code
// When working with a big problem its best to break it down
// into pseudo code
