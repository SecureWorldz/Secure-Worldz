export interface Meetup {
  id: string
  title: string
  date: string
  location: string
  description: string
  status: "Upcoming" | "Completed"
  highlights: string[]
  imageUrl?: string
}

/** Static fallback used before Firebase content is loaded, and for seeding. */
export const MEETUPS: Meetup[] = [
  {
    id: "prathyusha-meetup-2026",
    title: "DRAGOZ Community Meetup 2026",
    date: "3 September 2026",
    location: "Prathyusha Engineering College, Tiruvallur",
    description:
      "Full-day practical workshop showcasing live penetration testing, student project showcases, and team networking.",
    status: "Completed",
    highlights: [
      "Live penetration testing demonstrations",
      "Student project showcases",
      "Discord intern interaction",
    ],
  },
]
