function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destruvctivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  kitten = kittens.concat(name)
}