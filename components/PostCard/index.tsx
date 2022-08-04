import { FunctionComponent } from 'react'
import Link from 'next/link'

import { Card, BackgroundImageWrapper, CardBody } from './style'
import CategoryBadge from 'components/CategoryBadge'

interface PostCardProps {
  title: string
  slug: string
  image: string
  author: string
  publishedAt: string
  categories: { slug: string; title: string }[]
}

const PostCard: FunctionComponent<PostCardProps> = ({
  title,
  slug,
  image,
  author,
  publishedAt,
  categories
}) => {
  return (
    <Link href={`/blog/post/${slug}`} passHref>
      <a>
        <Card>
          <BackgroundImageWrapper image={`${image}?w=300`} />
          <CardBody>
            <h3>{title}</h3>
            <p>author: {author}</p>
            <p>{new Date(publishedAt).toLocaleDateString()}</p>
            <p>
              {categories.map(c => (
                <CategoryBadge key={c.slug} title={c.title} />
              ))}
            </p>
          </CardBody>
        </Card>
      </a>
    </Link>
  )
}

export default PostCard
