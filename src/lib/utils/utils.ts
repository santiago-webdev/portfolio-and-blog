export class Post {
  title: string
  description: string
  datetime: string
  href: string
  extension: string
  metadata?: Array<Post>

  constructor(
    href: string,
    title: string,
    description: string,
    datetime: string,
    extension: string,
    metadata?: Array<Post>
  ) {
    this.href = href
    this.title = title
    this.description = description
    this.datetime = datetime
    this.extension = extension
    this.metadata = metadata
  }
}

export const relativeTime = (
  now: Date,
  postDate: Date,
  includeMonths = true,
  includeYears = true
): string => {
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
  } else if (includeMonths && difference < 2592000000) {
    value = Math.floor(difference / 86400000)
    unit = 'day'
  } else if (includeYears && difference < 31536000000) {
    value = Math.floor(difference / 2592000000)
    unit = 'month'
  } else {
    value = Math.floor(difference / 31536000000)
    unit = 'year'
  }

  return formatter.format(-value, unit as Intl.RelativeTimeFormatUnit)
}

export const readableDate = (dateString: string): string => {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat('en', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return formatter.format(date)
}

export function getCookie(name: string): string {
  const cookies: string[] = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    const cookie: string = cookies[i].trim()
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(`${name}=`.length, cookie.length)
    }
  }
  return 'system'
}
