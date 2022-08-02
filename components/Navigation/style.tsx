import styled from "styled-components"

export const NavigationWrapper = styled.nav`
    margin: 0 20px;
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    margin: 0 20px;
    text-transform: uppercase;
`

export const NavigationAnchor = styled.a`
    &:hover {
        text-decoration: underline;
    }
    cursor: pointer;
`