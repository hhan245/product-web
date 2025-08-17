import Loader from './components/loader';
import { Analytics } from "@vercel/analytics/next"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nguyen Xuan Han</title>
        <meta name="description" content="of Nguyen Xuan Han" />
      </head>
      <body>
        {children}
        <Loader />
        <Analytics />
      </body>
    </html>
  );
}




