export const pageAdapter = data => {
  const newData = {
    item: data.items[0],
    sections: data.items[0].fields.sections.reduce(
      (previous, current, i) => {
        previous[current.sys.contentType.sys.id] = current
        return previous
      },
      {}
    ),
  }
  newData.item.fields.sections = 'REMOVED'
  return newData
}
