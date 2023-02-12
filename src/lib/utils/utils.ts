export class Post {
  title: string
  description: string
  date: string
  href: string
  extension: string
  metadata?: Array<Post>

  constructor(
    href: string,
    title: string,
    description: string,
    date: string,
    extension: string,
    metadata?: Array<Post>
  ) {
    this.href = href
    this.title = title
    this.description = description
    this.date = date
    this.extension = extension
    this.metadata = metadata
  }
}

export const relativeTime = (now: Date, postDate: Date): string => {
  const difference = now.getTime() - postDate.getTime()
  const formatter = new Intl.RelativeTimeFormat('en', { style: 'long' })
  let value: number
  let unit: string

  if (difference < 1000) {
    return 'just now'
  } else if (difference < 60000) {
    value = Math.floor(difference / 1000)
    unit = 'second'
  } else if (difference < 3600000) {
    value = Math.floor(difference / 60000)
    unit = 'minute'
  } else if (difference < 86400000) {
    value = Math.floor(difference / 3600000)
    unit = 'hour'
  } else {
    value = Math.floor(difference / 86400000)
    unit = 'day'
  }

  return formatter.format(-value, unit as Intl.RelativeTimeFormatUnit)
}

export const readableDate = (dateString: string): string => {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return formatter.format(date)
}
