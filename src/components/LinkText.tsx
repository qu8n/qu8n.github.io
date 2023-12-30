import { ExternalLink } from './ExternalLink'

/**
 * @param text Text to display
 * @param href External link
 */
export function LinkText({ text, href }: { text: string; href: string }) {
  return (
    <ExternalLink
      href={href}
      className='underline decoration-neutral-500 text-white'
    >
      {text}
    </ExternalLink>
  )
}
