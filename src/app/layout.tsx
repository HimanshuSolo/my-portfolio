// src/app/layout.tsx
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '900'], // Choose weights you need
  variable: '--font-cinzel',
});

export const metadata = {
  title: "Himanshu | Personal Portfolio",
  description: "Himanshu is a 3rd Year UnderGrad Student and passionate in Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={cinzel.variable}>
      <body className="font-cinzel">{children}</body>
    </html>

  );
}
