/**
 * Splits an array into chunks of a given size and returns an array of arrays.
 * If the array can't be split evenly, the final chunk will contain the remaining elements.
 *
 * @param {T[]} array - The array to be split.
 * @param {number} chunkSize - The size of the chunks.
 * @returns {T[][]} The array of chunks.
 */
const splitArrayIntoChunks = <T>(array: T[], chunkSize: number): T[][] => {
  const chunkedArray: T[][] = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }

  return chunkedArray;
};

export default splitArrayIntoChunks;
