import sanityClient from '@sanity/client'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default sanityClient({
    projectId: publicRuntimeConfig.projectId,
    dataset: publicRuntimeConfig.dataset,
    useCdn: true // `false` if you want to ensure fresh data
})
