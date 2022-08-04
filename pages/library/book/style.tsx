import styled from 'styled-components'

export const ContentWrapper = styled.div`
        padding: 40px;
        max-width: 1024px;
        margin: 0 auto;
`

export const SongsList = styled.ul`
    list-style: none;
    padding: 0;

`

export const SongsListItem = styled.li`
    border-bottom: 1px solid #ccc;
    padding: 20px;
    cursor: pointer;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #eee;
    }

    & > span {
        margin-right: 10px;
    }

`