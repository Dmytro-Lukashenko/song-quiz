export default {
  doShuffleArray(array) {
    array
      .map((i) => [Math.random(), i])
      .sort()
      .map((i) => i[1])
  },
}
