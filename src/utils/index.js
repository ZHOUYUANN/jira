export const isFalsy = (value) => (value === 0 ? false : !value)

export const cleanObject = (object) => {
  const res = { ...object }
  Object.keys(res).forEach((item) => {
    const key = res[item]
    if (isFalsy(key)) {
      delete res[item]
    }
  })

  return res
}
