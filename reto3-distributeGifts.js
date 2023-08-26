
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

function distributeGifts(packOfGifts, reindeers) {
  let giftWeight = 0;
  let reindeerWeight = 0;
  packOfGifts.forEach(gift =>  {
    giftWeight += gift.length;
  });

  reindeers.forEach(reindeer =>  {
    reindeerWeight += reindeer.length * 2;
  });

  return Math.floor(reindeerWeight/giftWeight);
}

distributeGifts(packOfGifts, reindeers)