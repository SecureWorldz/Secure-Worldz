import { z } from 'zod'

export type CollectionName =
  | 'courses'
  | 'workshops'
  | 'testimonials'
  | 'products'
  | 'meetups'

export const COLLECTION_NAMES: CollectionName[] = [
  'courses',
  'workshops',
  'testimonials',
  'products',
  'meetups',
]

export type FieldKind =
  | 'text'
  | 'number'
  | 'textarea'
  | 'stringArray'
  | 'boolean'
  | 'select'

export interface FieldDescriptor {
  name: string
  label: string
  kind: FieldKind
  required?: boolean
  placeholder?: string
  hint?: string
  options?: readonly string[]
}

export interface CollectionConfig {
  name: CollectionName
  label: string
  singular: string
  description: string
  titleField: string
  subtitleField?: string
  fields: FieldDescriptor[]
  schema: z.ZodTypeAny
  /** Form-shaped defaults: arrays are newline strings, numbers are strings. */
  defaults: FormValues
}

export type FormValue = string | boolean
export type FormValues = Record<string, FormValue>

/* -------------------------------------------------------------------------- */
/* Zod schemas — the single validation contract for each Firestore collection  */
/* -------------------------------------------------------------------------- */

const courseSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  price: z.string(),
  numericPrice: z.number(),
  level: z.enum(['Beginner', 'Advanced']),
  format: z.string(),
  duration: z.string(),
  description: z.string(),
  modules: z.array(z.string()),
  inclusions: z.array(z.string()),
  badge: z.string(),
  featured: z.boolean(),
})

const workshopSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  status: z.enum(['Upcoming', 'Completed']),
  date: z.string(),
  time: z.string(),
  mode: z.string(),
  facilitator: z.string(),
  excerpt: z.string(),
  description: z.string(),
  topics: z.array(z.string()),
  whoShouldAttend: z.array(z.string()),
  registrationOpen: z.boolean(),
})

const testimonialSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  role: z.string().optional(),
  source: z.string(),
  content: z.string(),
  avatar: z.string(),
  highlight: z.boolean().optional(),
})

const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  tagline: z.string(),
  description: z.string(),
  category: z.enum(['Tool', 'Lab']),
  features: z.array(z.string()).optional(),
  badge: z.string().optional(),
  spec: z.string().optional(),
})

const meetupSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  date: z.string(),
  location: z.string(),
  description: z.string(),
  status: z.enum(['Upcoming', 'Completed']),
  highlights: z.array(z.string()),
  imageUrl: z.string().optional(),
})

/* -------------------------------------------------------------------------- */
/* Field descriptors — drive one generic form for every collection            */
/* -------------------------------------------------------------------------- */

const idField: FieldDescriptor = {
  name: 'id',
  label: 'Document ID (slug)',
  kind: 'text',
  placeholder: 'auto-generated-from-title',
  hint: 'Leave blank to generate a stable slug from the title. Locked once created.',
}

export const COLLECTIONS: Record<CollectionName, CollectionConfig> = {
  courses: {
    name: 'courses',
    label: 'Courses',
    singular: 'Course',
    description: 'Self-paced and live training programs shown on the public site.',
    titleField: 'title',
    subtitleField: 'level',
    schema: courseSchema,
    defaults: {
      id: '',
      title: '',
      price: '',
      numericPrice: '',
      level: 'Beginner',
      format: '',
      duration: '',
      description: '',
      modules: '',
      inclusions: '',
      badge: '',
      featured: false,
    },
    fields: [
      idField,
      { name: 'title', label: 'Title', kind: 'text', required: true, placeholder: 'Ethical Hacking Foundations' },
      { name: 'price', label: 'Display price', kind: 'text', placeholder: '₹4,999 or Free' },
      { name: 'numericPrice', label: 'Numeric price (INR)', kind: 'number', required: true, placeholder: '4999', hint: 'Use 0 for free courses.' },
      { name: 'level', label: 'Level', kind: 'select', options: ['Beginner', 'Advanced'] },
      { name: 'format', label: 'Format', kind: 'text', placeholder: 'Self-paced + live labs' },
      { name: 'duration', label: 'Duration', kind: 'text', placeholder: '8 weeks' },
      { name: 'description', label: 'Description', kind: 'textarea' },
      { name: 'modules', label: 'Modules', kind: 'stringArray', hint: 'One module per line.' },
      { name: 'inclusions', label: 'Inclusions', kind: 'stringArray', hint: 'One item per line.' },
      { name: 'badge', label: 'Badge', kind: 'text', placeholder: 'Bestseller (optional)' },
      { name: 'featured', label: 'Featured on homepage', kind: 'boolean' },
    ],
  },

  workshops: {
    name: 'workshops',
    label: 'Workshops',
    singular: 'Workshop',
    description: 'Live, cohort-based sessions and their registration status.',
    titleField: 'title',
    subtitleField: 'status',
    schema: workshopSchema,
    defaults: {
      id: '',
      title: '',
      status: 'Upcoming',
      date: '',
      time: '',
      mode: '',
      facilitator: '',
      excerpt: '',
      description: '',
      topics: '',
      whoShouldAttend: '',
      registrationOpen: false,
    },
    fields: [
      idField,
      { name: 'title', label: 'Title', kind: 'text', required: true, placeholder: 'Threat Modeling in Practice' },
      { name: 'status', label: 'Status', kind: 'select', options: ['Upcoming', 'Completed'] },
      { name: 'date', label: 'Date', kind: 'text', placeholder: '14–15 Dec 2026' },
      { name: 'time', label: 'Time', kind: 'text', placeholder: '10:00–13:00 IST' },
      { name: 'mode', label: 'Mode', kind: 'text', placeholder: 'Live · Online' },
      { name: 'facilitator', label: 'Facilitator', kind: 'text' },
      { name: 'excerpt', label: 'Excerpt', kind: 'text' },
      { name: 'description', label: 'Description', kind: 'textarea' },
      { name: 'topics', label: 'Topics', kind: 'stringArray', hint: 'One topic per line.' },
      { name: 'whoShouldAttend', label: 'Who should attend', kind: 'stringArray', hint: 'One audience per line.' },
      { name: 'registrationOpen', label: 'Registration open', kind: 'boolean' },
    ],
  },

  testimonials: {
    name: 'testimonials',
    label: 'Testimonials',
    singular: 'Testimonial',
    description: 'Learner stories and quotes displayed across the site.',
    titleField: 'name',
    subtitleField: 'source',
    schema: testimonialSchema,
    defaults: {
      id: '',
      name: '',
      role: '',
      source: '',
      content: '',
      avatar: '',
      highlight: false,
    },
    fields: [
      idField,
      { name: 'name', label: 'Name', kind: 'text', required: true, placeholder: 'Aarav Mehta' },
      { name: 'role', label: 'Role', kind: 'text', placeholder: 'Security Analyst (optional)' },
      { name: 'source', label: 'Source', kind: 'text', placeholder: 'Verified learner · LinkedIn' },
      { name: 'content', label: 'Quote', kind: 'textarea', required: true },
      { name: 'avatar', label: 'Avatar URL', kind: 'text', placeholder: 'https://…/avatar.jpg' },
      { name: 'highlight', label: 'Highlight testimonial', kind: 'boolean' },
    ],
  },

  products: {
    name: 'products',
    label: 'Products',
    singular: 'Product',
    description: 'Tools and labs offered by SECUREWORLDZ.',
    titleField: 'name',
    subtitleField: 'category',
    schema: productSchema,
    defaults: {
      id: '',
      name: '',
      tagline: '',
      description: '',
      category: 'Tool',
      features: '',
      badge: '',
      spec: '',
    },
    fields: [
      idField,
      { name: 'name', label: 'Name', kind: 'text', required: true, placeholder: 'Sentinel Toolkit' },
      { name: 'tagline', label: 'Tagline', kind: 'text' },
      { name: 'description', label: 'Description', kind: 'textarea' },
      { name: 'category', label: 'Category', kind: 'select', options: ['Tool', 'Lab'] },
      { name: 'features', label: 'Features', kind: 'stringArray', hint: 'One feature per line (optional).' },
      { name: 'badge', label: 'Badge', kind: 'text', placeholder: 'New (optional)' },
      { name: 'spec', label: 'Spec', kind: 'text', placeholder: 'e.g. v2.1 · Linux / macOS (optional)' },
    ],
  },

  meetups: {
    name: 'meetups',
    label: 'Meetups',
    singular: 'Meetup',
    description: 'Community events, both upcoming and past.',
    titleField: 'title',
    subtitleField: 'status',
    schema: meetupSchema,
    defaults: {
      id: '',
      title: '',
      date: '',
      location: '',
      description: '',
      status: 'Upcoming',
      highlights: '',
      imageUrl: '',
    },
    fields: [
      idField,
      { name: 'title', label: 'Title', kind: 'text', required: true, placeholder: 'Cyber Coffee Hour · Bengaluru' },
      { name: 'date', label: 'Date', kind: 'text', placeholder: '28 Nov 2026' },
      { name: 'location', label: 'Location', kind: 'text', placeholder: 'Online / Bengaluru' },
      { name: 'description', label: 'Description', kind: 'textarea' },
      { name: 'status', label: 'Status', kind: 'select', options: ['Upcoming', 'Completed'] },
      { name: 'highlights', label: 'Highlights', kind: 'stringArray', hint: 'One highlight per line.' },
      { name: 'imageUrl', label: 'Image URL', kind: 'text', placeholder: 'https://…/cover.jpg (optional)' },
    ],
  },
}

export function getCollectionConfig(name: string): CollectionConfig | null {
  return COLLECTION_NAMES.includes(name as CollectionName)
    ? COLLECTIONS[name as CollectionName]
    : null
}

/** Firestore document -> form state (arrays become newline strings). */
export function toFormValues(
  config: CollectionConfig,
  doc: Record<string, unknown>,
): FormValues {
  const values: FormValues = { ...config.defaults }
  for (const field of config.fields) {
    const raw = doc[field.name]
    switch (field.kind) {
      case 'stringArray':
        values[field.name] = Array.isArray(raw)
          ? raw.filter((v): v is string => typeof v === 'string').join('\n')
          : ''
        break
      case 'number':
        values[field.name] = raw === undefined || raw === null ? '' : String(raw)
        break
      case 'boolean':
        values[field.name] = Boolean(raw)
        break
      default:
        values[field.name] = raw === undefined || raw === null ? '' : String(raw)
    }
  }
  return values
}

/** Form state -> typed values ready for Zod parsing / Firestore. */
export function fromFormValues(
  config: CollectionConfig,
  values: FormValues,
): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const field of config.fields) {
    const raw = values[field.name]
    switch (field.kind) {
      case 'number':
        out[field.name] = raw === '' || raw === undefined ? 0 : Number(raw)
        break
      case 'stringArray':
        out[field.name] =
          typeof raw === 'string'
            ? raw.split('\n').map((s) => s.trim()).filter(Boolean)
            : []
        break
      case 'boolean':
        out[field.name] = Boolean(raw)
        break
      default:
        out[field.name] = typeof raw === 'string' ? raw.trim() : ''
    }
  }
  return out
}
