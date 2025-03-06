 // Custom Hook for page title
 import { useEffect } from "react";
 import Head from "next/head";
 
 const usePageTitle = (title : any) => {
   useEffect(() => {
     document.title = `${title} - Navigate`;
   }, [title]);
 
   return (
     <Head>
       <title>{title} - Navigate</title>
       <meta name="description" content={`Welcome to ${title} page of Navigate`} />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       {/* <link rel="icon" href="/favicon.png" /> */}
     </Head>
   );
 };
 
 export default usePageTitle;
 