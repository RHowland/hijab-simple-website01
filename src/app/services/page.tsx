//Service Page
import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen  text-gray-800 text-2xl font-sans">
      <h1 className=" font-bold">Services</h1>
      <Link href="/">
        <p className="mt-4 text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
          Back to Home
        </p>
      </Link>
    </div>
  );
};

export default Page;
/**
* =====================================================================
*   ORIGINAL DOCUMENTATION 
* =====================================================================
* File Name      : Page.tsx
* Component Name : Page
* Component Type : Functional Component
* Date Created   : 10-6-2024
* Dev Name       : Hijab Zulfiqar
* ------------------------------
* Question: Why was it necessary to create this component?
* Answer  : To provide a dedicated page for introducing the organization to visitors.
*
* ------------------------------
* Question: What does this component do?: 
* Answer  : It displays an "Services" page with a styled heading and a link to navigate back to the homepage.
* 
* ----------------___________________
* Answer  : No, the code leverages standard React and Next.js functionalities.
*
* ------------------------------
* Input Comments: none
* 
* ------------------------------
* Output Comments: none
* 
* ------------------------------
* Section Comments: none
* 
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : No, the implementation is straightforward and uses common practices for Next.js applications.
*
*/

