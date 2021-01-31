import React from 'react';

export default function MyHead() {
  return (
    <>
      <link rel="icon" href="https://raw.githubusercontent.com/gabrielf7/javaporemscript/main/src/assets/favicon.ico" />
      <meta property="og:url" content="https://javaporemscript.vercel.app/" />
      <meta property="og:type" content="Quiz" />
      <meta property="og:title" content="JavaPorémScript" />
      <meta
        name="og:description"
        content="JavaPorémScript - Site destinado ao aprendizado da linguaguem de programação Javascript, com inuito de apresentar um Quiz sobre Javascript."
      />
      <meta name="keywords" content="JavaScript and Next.js" />
      <meta name="author" content="João Gabriel" />
      <meta property="og:image" content="https://raw.githubusercontent.com/gabrielf7/javaporemscript/main/src/assets/cafejs-web.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
    </>
  );
}
