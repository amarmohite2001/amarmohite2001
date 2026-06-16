import { CONTENT } from '@/data/content'

export default function Footer() {
  const { footer, brand } = CONTENT

  return (
    <footer className="footer">
      <div className="container">
        <p className="h1 logo">
          <a href="#">{brand.name}</a>
        </p>
        <p className="copyright">
          &copy; {footer.copyrightYear}{' '}
          <a href={footer.copyrightHref}>{footer.copyrightName}</a>
        </p>
      </div>
    </footer>
  )
}
