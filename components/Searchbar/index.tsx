import { FunctionComponent, ChangeEvent, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql } from '@apollo/client'
import axios from 'axios'
import debounce from 'lodash.debounce'

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
import apolloClient from 'apolloClient'

interface SearchbarProps {}

const Searchbar: FunctionComponent<SearchbarProps> = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const fetchResult = async (query: string) => {
    console.log('search', query)

    const locale = router.locale || 'en'

    if (!query) {
      setSearchResults([])
      return
    }

    const posts =
      (
        await apolloClient.query({
          query: gql`
            query GetBlogPage {
              allPost {
                _id
                slug {
                  current
                }
                title {
                  en
                  sk
                }
              }
            }
          `
        })
      ).data?.['allPost']
        .filter((p: any) =>
          p.title[locale].toLowerCase().includes(query.toLowerCase())
        )
        .map((x: any) => ({
          type: 'post',
          iconComponent: DocumentText,
          title: x.title[locale],
          link: `/blog/post/${x.slug.current}`
        })) || []

    let books: any[] = []
    let songs: any[] = []
    let artists: any[] = []

    const libraryResults = (
      await axios.get(
        `https://songbooks-app.herokuapp.com/browse?user_id=1&query=${query}`
      )
    ).data

    if (Object.keys(libraryResults).includes('books')) {
      books = libraryResults.books.map((b: any) => ({
        type: 'book',
        iconComponent: Book,
        title: b.name,
        link: `/library/book/${b.id}`
      }))
    }

    if (Object.keys(libraryResults).includes('songs')) {
      songs = libraryResults.songs.map((s: any) => ({
        type: 'song',
        iconComponent: MusicalNote,
        title: s.name,
        link: `/library/song/${s.id}`
      }))
    }

    if (Object.keys(libraryResults).includes('artists')) {
      artists = libraryResults.artists.map((a: any) => ({
        type: 'artist',
        iconComponent: Person,
        title: a.name,
        link: `/library/artist/${a.id}`
      }))
    }

    setSearchResults(
      [...posts, ...books, ...songs, ...artists].sort((a, b) =>
        a.title > b.title ? 1 : -1
      )
    )
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handle change', e.target.value)
    setSearchTerm(e.target.value)
    debounce(() => fetchResult(e.target.value), 1000)()
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
              <Link href={r.link} passHref>
                <ResultAnchor>
                  <r.iconComponent width="18px" height="18px" color={'#666'} />
                  {r.title}
                </ResultAnchor>
              </Link>
            </ResultItem>
          ))}
        </ResultList>
      )}
    </SearchbarWrapper>
  )
}

export default Searchbar
