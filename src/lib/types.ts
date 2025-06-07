import { PortableTextBlock } from '@portabletext/types'

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  body?: PortableTextBlock[]
  _createdAt: string
  author?: {
    name: string
  }
}