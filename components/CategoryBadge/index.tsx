import { FunctionComponent } from 'react'

import { BadgeWrapper } from './style'

interface CategoryBadgeProps {
  title: string
}

const CategoryBadge: FunctionComponent<CategoryBadgeProps> = ({ title }) => {
  return <BadgeWrapper>{title}</BadgeWrapper>
}

export default CategoryBadge
