const deleteKey = (obj) => {
  const clone = {...obj}
  delete clone['.key']
  return clone
}

const getArray = (obj) => {
  const clone = deleteKey(obj)
  const xs = []
  for (var i in clone) {
    xs.push(clone[i])
    xs[xs.length - 1]['key'] = i
  }
  return xs
}

export {
  deleteKey,
  getArray
}
