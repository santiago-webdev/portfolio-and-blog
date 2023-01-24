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
