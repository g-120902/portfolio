import { Inter, Lusitana, Playfair_Display } from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ["400", "700"], subsets: ['latin'] });
export const playfair = Playfair_Display({ weight: ["400", "700"], subsets: ['latin']});
export const monofonto = localFont({ src: '../../public/fonts/monofonto rg.otf' })

