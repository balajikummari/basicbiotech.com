import cn from 'classnames'
import Link from 'next/link'

const cdn = "https://mldspy5by2vi.i.optimole.com/";

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <img
      src={ cdn + coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}

      alt ='blogCover'
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
