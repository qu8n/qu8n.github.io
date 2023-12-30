import Image from 'next/image'

/**
 * @param text Text to display
 * @param href External link
 * @param imgSrc Path to image inside /public
 * @param imgDimTw Tailwind CSS width and height
 */
export function LinkButton({
  text,
  href,
  imgSrc,
  imgDimTw,
}: {
  text: string
  href: string
  imgSrc: string
  imgDimTw: string
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='inline items-center gap-x-1 rounded-md bg-neutral-800 border border-neutral-600 px-1 py-0.5 text-white text-xs font-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600'
    >
      <div className='inline-flex align-middle gap-1'>
        <div className={`relative ${imgDimTw}`}>
          <Image
            layout='fill'
            objectFit='contain'
            src={imgSrc}
            alt={`${text} logo`}
            className=''
          />
        </div>

        <span>{text}</span>
      </div>
    </a>
  )
}
