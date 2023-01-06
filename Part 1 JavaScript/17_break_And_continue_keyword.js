//break keyword
for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

//continue keyword

for (let j = 0; j <= 30; j++) {
  if (j % 3 !== 0) {
    continue;
  }
  console.log(j);
}
