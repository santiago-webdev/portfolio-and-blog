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
    day: 'numeric',
  })

  return formatter.format(date)
}

let baseFontSize = 0

function getBaseFontSize(): number {
  if (
    baseFontSize ||
    typeof document === 'undefined' ||
    !document.documentElement
  )
    return baseFontSize

  const root = document.documentElement // Get the root element
  baseFontSize = parseFloat(getComputedStyle(root).fontSize) // Get the computed font size in pixels and convert it to a number
  return baseFontSize
}

export function inPixels(nmb: string) {
  const numericString = nmb.replace(/[^0-9]/g, '') // Remove all non-numeric characters from the string
  const numericValue = parseInt(numericString, 10) // Parse the numeric string as an integer (base 10)

  return parseInt(`${numericValue * getBaseFontSize()}`)
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
