import ContactBody from "../../../ui/organisms/ContactBody";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gregory Albert Portfolio Contact Page',
  description: 'This is Gregory Albert portfolio. The contact page of my portfolio used for mailing',
}

export default function Contact() {
  return (
    <ContactBody />
  )
}
