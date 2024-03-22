//hq
function distanceFromHqInBlocks(block) {
  const hq = 42;
  return Math(block - hq);
}

// distance in ft from HQ
function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block);
  return blocks * 264;
  //1bck = 264
}

// to calculate distance travelled in ft
function distanceTravelledInFeet(startingpoint, destination) {
  return Math(destination - startingpoint) * 264;
  // 1 blk = 264 feet
}
// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 2 / 100; // 2 cts per foot after first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distance over 2000 feet
  } else {
    return 'we cant go that far';
  }
}



























