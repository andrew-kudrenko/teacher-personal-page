export type RootLayoutProps = {
  title: string
}

export type DrawerProps = {
  opened: boolean
  onToggle: () => void
}

export type DrawerListOptionProps = {
  label: string
  to: string
  icon: React.ReactNode
}

export type ProfessionalProperty = {
  title: string
  description: string
}

export type ProfessionalPropertyCardProps = ProfessionalProperty & {
  img: string
}

export type GalleryGridTileProps = {
  img: string
  cols: number
}

export type MaterialListItemProps = {
  title: string
  link: string
}

export type MaterialsListProps = {
  title: string
  data: Array<MaterialListItemProps>
}
