import { Html, Main, Head, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/Images/glasses.webp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
