// src/app/layout.tsx
import { AppSidebar  } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
        {children}
        <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        
      </main>
    </SidebarProvider>
      </body>
    </html>
  );
}
