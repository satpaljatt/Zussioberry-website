// import { Geist, Geist_Mono } from "next/font/google";
// import Script from "next/script";
// import "./globals.css";

// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
// import WhatsAppSticky from "@/components/sections/WhatsAppSticky";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Zussioberry India | Fresh Shakes, Smoothies, Ice Creams & More",
//   description:
//     "Welcome to Zussioberry – a café brand uniting taste, freshness & innovation.",
//   verification: {
//     google: "zIGxmvL2E_jbWFC_hei2fqdP6E_R1ExRY8tuhyj8xyA",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

//         {/* ✅ Google Tag Manager */}
//         <Script
//           id="gtm"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;
//               f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-NLPK23Q8');`,
//           }}
//         />

//         {/* ✅ Google Analytics GA4 */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-71P7S9SD78"
//           strategy="afterInteractive"
//         />
//         <Script
//           id="ga4"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//               window.dataLayer = window.dataLayer || [];
//               function gtag(){dataLayer.push(arguments);}
//               gtag('js', new Date());
//               gtag('config', 'G-71P7S9SD78');
//             `,
//           }}
//         />

//         {/* ✅ GTM noscript */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-NLPK23Q8"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         <Navbar />
//         {children}
//         <Footer />
//         <WhatsAppSticky />
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono, Quicksand, Open_Sans, Dawning_of_a_New_Day, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppSticky from "@/components/sections/WhatsAppSticky";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dawning = Dawning_of_a_New_Day({
  variable: "--font-dawning",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* ✅ HEAD SECTION */}
      <head>
        <title>Zussioberry India | Fresh Shakes, Smoothies, Ice Creams & More</title>
        <meta
          name="description"
          content="Welcome to Zussioberry – a café brand uniting taste, freshness & innovation."
        />

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="vxlcvEI-2-m_-_6mFlTOK-CIZJtXitgNPYRkwCSBJc8"
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable} ${openSans.variable} ${dawning.variable} ${cormorant.variable} antialiased`}>

        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NLPK23Q8');`,
          }}
        />

        {/* ✅ Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-71P7S9SD78"
          strategy="afterInteractive"
        />
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-71P7S9SD78');
            `,
          }}
        />

        {/* ✅ GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLPK23Q8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}