import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Calcular Media Aluno',
  description: 'Calculando a media do aluno, usando next',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-blue-950 w-screen h-screen flex items-center justify-center`}>{children}</body>
    </html>
  )
}
