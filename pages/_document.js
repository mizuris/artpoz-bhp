import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta name="description" content="Hurtownia artykułów BHP i ppoż." />
          <meta
            itemProp="description"
            content="Hurtownia artykułów pożarniczych, oraz odzieży roboczej. BHP i ppoż., od A do Z. Usługi z zakresu szkoleń przeciwpożarowych i sporządzania instrukcji bezpieczeństwa pożarowego"
          />
          <meta name="robots" content="index, follow" />
          <meta name="ROBOTS" content="ALL" />
          <meta
            name="keywords"
            content="bhp, ppoż, żnin, odzież robocza, gaśnice, hydranty, przeglądy gaśnic, legalizacja, instrukcja bezpieczeństwa pożarowego, rękawice robocze, buty robocze"
          />
          <meta property="og:url" content="https://artpoz-bhp.pl/" />
          <meta property="og:title" content="Artpoż - hurtownia BHP i PPOŻ." />
          <meta
            property="og:description"
            content="Dystrybutor artykułów BHP i ppoż. europejskich marek. Obsługa firm w zakresie ochrony przeciwpożarowej."
          />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
