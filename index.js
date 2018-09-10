function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

appendedKittensArray = []
function appendKitten(name) {
  appendedKittensArray = [...kittens, name]
  return appendedKittensArray
}