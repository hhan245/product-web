import Loader from './components/loader';
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
      </body>
    </html>
  );
}




