import React from 'react';
import Head from "next/head";
import endPoint from "../../../../api/endPoints.js"

let href = endPoint.hostedDomain;

export default function SeoHead(props) {
  const { title, description, keywords, children, canonicalName } = props;
  if (canonicalName){
    href += canonicalName;
  }
  return (
    <Head>
      <title>{title || 'Dominos Pizza'}</title>
      <meta name="keywords" content={keywords || 'Dominos Pizza'}/>
      <meta name="description" content={description || 'Dominos Pizza'}/>
      <link rel="canonical" href={href} />
      {children}
    </Head>
  )
} 