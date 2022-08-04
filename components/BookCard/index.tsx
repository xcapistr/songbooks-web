import { FunctionComponent } from 'react'
import Link from 'next/link'
import { MusicalNote, Person } from 'react-ionicons'

import { AnchorWrapper, Card, BackgroundImageWrapper, CardBody } from './style'

interface BookCardProps {
  id: number
  title?: string
  image?: string
  ownerName?: string
  songsCount?: number
}

const BookCard: FunctionComponent<BookCardProps> = ({
  id,
  title,
  image,
  ownerName,
  songsCount
}) => {
  return (
    <Link href={`/library/book/${id}`} passHref>
      <AnchorWrapper>
        <Card>
          <BackgroundImageWrapper image={image}></BackgroundImageWrapper>
          <CardBody>
            <h3>{title}</h3>
            <p>
              <Person width="18px" height="18px" color={'#666'} />
              {ownerName}
            </p>
            <p>
              <MusicalNote width="18px" height="18px" color={'#666'} />
              {songsCount}
            </p>
          </CardBody>
        </Card>
      </AnchorWrapper>
    </Link>
  )
}

export default BookCard
