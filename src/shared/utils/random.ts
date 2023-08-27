export const generateRandomElement = (arraySize = 20) => {
  const emojis = [
    '(っ＾▿＾)',
    '(>‿◠)✌',
    '(╥﹏╥)',
    'ಥ_ಥ',
    '(≖_≖ )',
    "(ง︡'-'︠)ง",
    '💪(◡̀_◡́҂)',
  ];
  const randomEmojis = [];

  for (let i = 0; i < arraySize; i++) {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    randomEmojis.push({
      emoji: emojis[randomIndex],
      color: generateRandomColor(),
      rotate: generateRandomNumber() + 'deg',
    });
  }
  return randomEmojis;
};

const generateRandomNumber = (min = -20, max = 20) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};
