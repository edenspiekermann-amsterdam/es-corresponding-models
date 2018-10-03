// E.g. components.1.anotherKey
export const parsePath = ({ path, data, allowPathNotFound }) => {
  let value = -1

  try {
    value = path
      .split('.')
      .map(str => str.trim())
      .reduce((prev, cur) => prev[cur], data)
  } catch (error) {
    if (allowPathNotFound) return 'PATH_NOT_FOUND'
    console.error('parsePath error:')
    console.error('Could not find "', path, '" in: ', data)
    console.error(error)
  }
  return value
}

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// This helper simply converts huge Contenful section data into a simple
// object with the details needed
export const contentfulContactToView = contentfulContact => ({
  name: contentfulContact.fields.name,
  functionTitle: contentfulContact.fields.functionTitle,
  emailAddress: contentfulContact.fields.emailAddress,
  phoneNumber: contentfulContact.fields.phoneNumber,
  imageUrl: contentfulContact.fields.avatar
    ? contentfulContact.fields.avatar.fields.file.url
    : '',
})

// This helper simply converts huge Contenful section data into a simple
// object with the details needed
export const contentfulImagesToView = contentfulImages => {
  if (!contentfulImages) return []

  return contentfulImages.map(image => ({
    caption: image.fields.title,
    url: image.fields.file.url,
  }))
}

// This helper simply converts huge Contenful section data into a simple
// object with the details needed
export const contentfulSpacesToView = contentfulSpaces => {
  if (!contentfulSpaces) return []
  const spaces = []
  contentfulSpaces.forEach(space => {
    spaces.push({
      title: space.fields.title,
      description: space.fields.description,
      type: space.fields.type,
      status: space.fields.status,
      availableFrom: space.fields.availableFrom,
      area: space.fields.area,
      price: space.fields.price,
      priceUnit: space.fields.priceUnit,
    })
  })

  return spaces
}

// This helper simply converts huge Contenful section data into a simple
// object with the details needed
export const contentfulSocialMediaLinksToView = contentfulLinks => {
  if (!contentfulLinks) return []
  const links = []
  contentfulLinks.forEach(link => {
    links.push({
      title: link.fields.title,
      url: link.fields.url,
      icon: link.fields.icon,
    })
  })

  return links
}

// This helper simply converts huge Contenful section data into a simple
// object with the details needed
export const contentfulServiceReferencesToView = contentfulServiceReferences => {
  if (!contentfulServiceReferences) return []
  const references = []
  contentfulServiceReferences.forEach(link => {
    references.push({
      id: link.sys.id,
      title: link.fields.title,
      heading: link.fields.heading,
    })
  })

  return references
}

// This helper simply converts huge Contenful section data into a simple
// object with the details needed
export const contentfulQuoteToView = contentfulQuote => ({
  text: contentfulQuote.fields.text,
  authorName: contentfulQuote.fields.authorName,
  authorFunctionTitle: contentfulQuote.fields.authorFunctionTitle,
  imageUrl: contentfulQuote.fields.image
    ? contentfulQuote.fields.image.fields.file.url
    : '',
})
