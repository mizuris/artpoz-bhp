import Head from "next/head";
import ProductsListDivider from "../components/ProductsListDivider/ProductsListDivider";
import PersonalProtectionItems from "../components/ItemsCollection/PersonalProtectionItems";
import FireFightingItems from "../components/ItemsCollection/FireFightingItems";
import WorkwearItems from "../components/ItemsCollection/WorkwearItems";

export default function Oferta() {
  return (
    <>
      <Head>
        <title>Artpoż - hurtownia BHP i ppoż. - oferta</title>
        <meta name="description" content="Oferta artykułów BHP i ppoż." />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="bhp, ppoż, żnin, odzież robocza, gaśnice, hydranty, przeglądy"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
          crossOrigin="anonymous"
        />
      </Head>

      <ProductsListDivider
        image="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551045/products-section-1_pjfalr.png"
        alt="Work gloves photo"
        text="środki ochrony indywidualnej"
      />
      <PersonalProtectionItems />

      <ProductsListDivider
        image="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551043/products-section-2_o7wjtp.png"
        alt="Firefighters with firehose"
        text="sprzęt przeciwpożarowy"
      />
      <FireFightingItems />

      <ProductsListDivider
        image="https://res.cloudinary.com/dlenvpgcq/image/upload/v1625551049/products-section-3_qajc75.png"
        alt="Man wearing workwear"
        text="odzież robocza"
      />
      <WorkwearItems />
    </>
  );
}
