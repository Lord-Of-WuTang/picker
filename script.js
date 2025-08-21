// 🥪 Initialize the lunch menu
let lunches = [];

// ➕ Add item to the end
function addLunchToEnd(arr, item) {
  arr.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return arr;
}

// ➕ Add item to the start
function addLunchToStart(arr, item) {
  arr.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return arr;
}

// ➖ Remove last item
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return arr;
}

// ➖ Remove first item
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = arr.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return arr;
}

// 🎲 Select random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    console.log(`Randomly selected lunch: ${randomItem}`);
  }
}

// 📋 Show full menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}
