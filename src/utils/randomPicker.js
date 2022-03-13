export let randomChoice = (choicesArray) => {
  return choicesArray[Math.floor(Math.random() * choicesArray.length)];
};
