export const drawRandomNumberInRange = (minNumber: number, maxNumber: number): number => {
  const min = Math.ceil(minNumber)
  const max = Math.floor(maxNumber)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
