'use client';

export default function NotFound() {
  return (
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>404 - Not Found</h1>
          <p>The page you are looking for does not exist.</p>
          <a href="/" style={{ marginTop: '1rem', color: 'blue', textDecoration: 'underline' }}>Return Home</a>
        </div>
      </body>
    </html>
  );
}
