import { FunctionComponent, ChangeEvent, useState, useRef } from 'react'
import Link from 'next/link'

import {
  SearchbarWrapper,
  Input,
  SearchIcon,
  CloseButton,
  CloseIcon,
  ResultList,
  ResultItem,
  ResultAnchor
} from './style'
import { MusicalNote, Person, Book, DocumentText } from 'react-ionicons'

interface SearchbarProps {}

const Searchbar: FunctionComponent<SearchbarProps> = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    if (e.target.value.length) {
      setSearchResults([
        {
          type: 'song',
          iconComponent: MusicalNote,
          title: 'Song Name',
          link: '/songs'
        },
        {
          type: 'song',
          iconComponent: MusicalNote,
          title: 'Song Name',
          link: '/songs'
        },
        {
          type: 'artist',
          iconComponent: Person,
          title: 'ArtistName',
          link: '/artists'
        },
        {
          type: 'song',
          iconComponent: MusicalNote,
          title: 'Song Name',
          link: '/songs'
        },
        {
          type: 'book',
          iconComponent: Book,
          title: 'Song Name',
          link: '/songs'
        },
        {
          type: 'article',
          iconComponent: DocumentText,
          title: 'Article title',
          link: '/blog'
        }
      ])
    } else {
      setSearchResults([])
    }
  }

  const cancel = () => {
    setSearchTerm('')
    setSearchResults([])
    inputRef.current?.focus()
  }

  return (
    <SearchbarWrapper>
      <Input
        placeholder="Search"
        ref={inputRef}
        value={searchTerm}
        hasResults={!!searchResults.length && !!isFocused}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <SearchIcon color="#666" width="20px" height="20px" />
      <CloseButton onClick={cancel} isVisible={!!searchTerm.length}>
        <CloseIcon color="#666" />
      </CloseButton>
      {!!searchResults.length && !!isFocused && (
        <ResultList>
          {searchResults.map((r, i) => (
            <ResultItem key={`${i}-${r.title}`}>
              <Link href="/library" passHref>
                <ResultAnchor><r.iconComponent width="18px" height="18px" color={'#666'}/>{r.title}</ResultAnchor>
              </Link>
            </ResultItem>
          ))}
        </ResultList>
      )}
    </SearchbarWrapper>
  )
}

export default Searchbar
