
// Function to calculate distance in blocks from headquarters
function distanceFromHqInBlocks(location) {
  const hq = 42;
  return Math.abs(location - hq);
}

// Function to calculate distance in feet from headquarters
function distanceFromHqInFeet(location) {
  const blocks = distanceFromHqInBlocks(location);
  return blocks * 264; // 1 block = 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264; // 1 block = 264 feet
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0; // Free sample
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distance over 2000 feet
  } else {
    return 'cannot travel that far'; // Distance limit exceeded
  }
}