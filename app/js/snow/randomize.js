export function randomize(min, max){
  const randomNumber = min + Math.abs(max - min) * Math.random();
  return Math.round(randomNumber);
}
