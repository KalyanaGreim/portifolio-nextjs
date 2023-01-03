import CustomLink from './CustomLink'

export default function Header() {
  return (
    <header>
      <nav>
        <CustomLink href="/">Home</CustomLink>{' '}
        <CustomLink href="/about" prefetch>
          About
        </CustomLink>
        <CustomLink href="/certificates" prefetch>
          About
        </CustomLink>
        <CustomLink href="/projects" prefetch>
          About
        </CustomLink>
        <CustomLink href="/contact" prefetch>
          About
        </CustomLink>
      </nav>
    </header>
  )
}