import type { Course } from "@/lib/data/courses"
import type { Workshop } from "@/lib/data/workshops"
import type { SecurityProduct } from "@/lib/data/products"
import type { Testimonial } from "@/lib/data/testimonials"
import type { Meetup } from "@/lib/data/meetups"
import type { BlogPost } from "@/lib/data/blogs"

import { COURSES } from "@/lib/data/courses"
import { WORKSHOPS } from "@/lib/data/workshops"
import { PRODUCTS } from "@/lib/data/products"
import { TESTIMONIALS } from "@/lib/data/testimonials"
import { MEETUPS } from "@/lib/data/meetups"
import { BLOG_POSTS } from "@/lib/data/blogs"

export const CONTENT_COLLECTIONS = [
  "courses",
  "workshops",
  "testimonials",
  "products",
  "meetups",
  "blogs",
] as const

export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number]

export interface ContentTypes {
  courses: Course
  workshops: Workshop
  testimonials: Testimonial
  products: SecurityProduct
  meetups: Meetup
  blogs: BlogPost
}

/** Last-resort content when Firebase is not configured or temporarily unavailable. */
export const STATIC_CONTENT: { [K in ContentCollection]: ContentTypes[K][] } = {
  courses: COURSES,
  workshops: WORKSHOPS,
  testimonials: TESTIMONIALS,
  products: PRODUCTS,
  meetups: MEETUPS,
  blogs: BLOG_POSTS,
}

export function isContentCollection(value: string): value is ContentCollection {
  return (CONTENT_COLLECTIONS as readonly string[]).includes(value)
}
