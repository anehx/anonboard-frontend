export function formatError(e) {
  let errors = e.errors.map(err => {
    let attr = err.source.pointer.split('/').pop()
    return `${err.status}: ${err.detail} [${attr}]`
  })

  return errors.join(', ')
}
