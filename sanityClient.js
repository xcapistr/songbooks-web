import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'g8f46yf6',
  dataset: 'production',
  useCdn: true
})