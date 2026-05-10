export function stableShuffleOptions(options, questionIndex) {
  return [...options]
    .map((option, index) => ({
      option,
      sortKey: ((index + 1) * 37 + (questionIndex + 3) * 19) % 101
    }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map((item) => item.option)
}
