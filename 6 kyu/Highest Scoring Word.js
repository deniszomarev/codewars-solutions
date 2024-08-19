export const high = (str: string): string => {
  let words = str.split(" ");
  let scores = words.map((el: string) => {
    return el
      .split("")
      .map((letter: string) => letter.charCodeAt(0) - 96)
      .reduce((acc, num) => acc + num, 0);
  });
  return words[scores.findIndex((el: number) => el == Math.max(...scores))];
};
