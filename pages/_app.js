import React, { useEffect, useState } from 'react';
import { Layout } from '../Components/index';

import 'tailwindcss/tailwind.css';
import '../Styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
