import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// Create client with error handling for static generation
export const client = (() => {
  try {
    if (!projectId || !dataset) {
      console.warn('Sanity client not configured - missing environment variables')
      return null
    }
    
    return createClient({
      projectId,
      dataset,
      apiVersion: '2023-05-03',
      useCdn: false,
      // Additional config for static generation
      token: undefined, // No token needed for public content
      ignoreBrowserTokenWarning: true,
    })
  } catch (error) {
    console.error('Failed to create Sanity client:', error)
    return null
  }
})()

// Diagnostic query to see all available fields
export const DEBUG_QUERY = `*[_type == "post"][0]`

// GROQ queries for fetching data - Updated for typical Blog template
export const POSTS_QUERY = `*[_type == "post"] | order(_createdAt desc) {
  _id,
  title,
  slug,
  description,
  _createdAt,
  author-> {
    name
  }
}`

export const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  body,
  _createdAt,
  author-> {
    name
  }
}`