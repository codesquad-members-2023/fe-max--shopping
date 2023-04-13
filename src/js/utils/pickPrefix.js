const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function getRandomLetter() {
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
