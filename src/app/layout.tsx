// src/app/layout.tsx
export const metadata = {
  title: "Himanshu | Personal Portfolio",
  description: "Himanshu is a 3rd Year UnderGrad Student and passionate in Development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html><body>
      {children}
    </body></html>

  );
}
