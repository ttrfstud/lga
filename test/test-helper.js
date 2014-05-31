sfunc = require('../fn/sfunc');

lcsvi = [0.75, 1, 1.25];
gdtvi = [];

for (i = 3; i < 6; i++) {
  for (j = 0.5; j < 10.5; j+=0.5) {
    gdtvi.push(i * j);
  }
}

for (i = 0; i < 4; i++) {
  for (j = 0.5; j < 10.5; j+=0.5) {
    gdtvi.push(3 * j);
  }
}

sflcsvi = sfunc(lcsvi);
sfgdtvi = sfunc(gdtvi);

console.log(gdtvi.length);
console.log(sfgdtvi);
console.log(sflcsvi);