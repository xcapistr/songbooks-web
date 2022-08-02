import { FunctionComponent } from 'react'
import Link from 'next/link'

import { NavigationWrapper, List, ListItem, NavigationAnchor } from './style'

interface NavigationProps {}

const Navigation: FunctionComponent<NavigationProps> = () => {
  const navItems = [
    { title: 'Library', link: '/library' },
    { title: 'Blog', link: '/blog' }
  ]
  return (
    <NavigationWrapper>
      <List>
        {navItems.map(n => (
          <ListItem key={n.title}>
            <Link href={n.link} passHref>
              <NavigationAnchor>{n.title}</NavigationAnchor>
            </Link>
          </ListItem>
        ))}
      </List>
    </NavigationWrapper>
  )
}

export default Navigation
