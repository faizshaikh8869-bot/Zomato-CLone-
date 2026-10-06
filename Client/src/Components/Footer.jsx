// import React from 'react'

// function Footer() {
//   return (
//     <>
//       <footer className="bg-zinc-100 border-t border-zinc-200 mt-20">
//   <div className="max-w-7xl mx-auto px-8 py-12">

//     {/* Logo */}
//     <div className="flex justify-between items-center mb-10">
//       <h1 className="text-4xl font-extrabold tracking-tight text-red-500">
//         zomato
//       </h1>

//       <div className="flex gap-3">
//         <button className="border border-zinc-300 px-4 py-2 rounded-lg bg-white">
//           🇮🇳 India
//         </button>
//         <button className="border border-zinc-300 px-4 py-2 rounded-lg bg-white">
//           English
//         </button>
//       </div>
//     </div>

//     {/* Links */}
//     <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

//       <div>
//         <h3 className="font-bold mb-4 text-zinc-800">ABOUT</h3>
//         <ul className="space-y-2 text-zinc-600">
//           <li>Who We Are</li>
//           <li>Blog</li>
//           <li>Work With Us</li>
//           <li>Investor Relations</li>
//           <li>Report Fraud</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="font-bold mb-4 text-zinc-800">FOR RESTAURANTS</h3>
//         <ul className="space-y-2 text-zinc-600">
//           <li>Partner With Us</li>
//           <li>Apps For You</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="font-bold mb-4 text-zinc-800">LEARN MORE</h3>
//         <ul className="space-y-2 text-zinc-600">
//           <li>Privacy</li>
//           <li>Security</li>
//           <li>Terms</li>
//           <li>Sitemap</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="font-bold mb-4 text-zinc-800">SOCIAL LINKS</h3>
//         <ul className="space-y-2 text-zinc-600">
//           <li>Instagram</li>
//           <li>LinkedIn</li>
//           <li>Facebook</li>
//           <li>Twitter</li>
//         </ul>
//       </div>

//       <div>
//         <h3 className="font-bold mb-4 text-zinc-800">GET THE APP</h3>

//         <button className="w-full bg-black text-white py-3 rounded-lg mb-3">
//           Download on App Store
//         </button>

//         <button className="w-full bg-black text-white py-3 rounded-lg">
//           Get it on Google Play
//         </button>
//       </div>

//     </div>

//     <hr className="my-8 border-zinc-300" />

//     <p className="text-sm text-zinc-500 leading-relaxed">
//       By continuing past this page, you agree to our Terms of Service,
//       Cookie Policy, Privacy Policy and Content Policies. All trademarks
//       are properties of their respective owners. 2008-2026 © Foodie Inc.
//       All rights reserved.
//     </p>
//   </div>
// </footer>
//     </>
//   )
// }

// export default Footer


import React from 'react'

function Footer() {
  return (
    <>
<footer className="bg-black border-t h-screen border-zinc-800 mt-20">
  <div className="max-w-7xl mx-auto px-8 py-12">

    {/* Logo */}
    <div className="flex justify-between items-center mb-10">
      <h1 className="text-4xl font-extrabold tracking-tight text-red-500">
        zomato
      </h1>

      <div className="flex gap-3">
        <button className="border border-zinc-700 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition">
          🇮🇳 India
        </button>
        <button className="border border-zinc-700 px-4 py-2 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 transition">
          English
        </button>
      </div>
    </div>

    {/* Links */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

      <div>
        <h3 className="font-bold mb-4 text-white">ABOUT</h3>
        <ul className="space-y-2 text-zinc-400">
          <li className="hover:text-white cursor-pointer">Who We Are</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Work With Us</li>
          <li className="hover:text-white cursor-pointer">Investor Relations</li>
          <li className="hover:text-white cursor-pointer">Report Fraud</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4 text-white">FOR RESTAURANTS</h3>
        <ul className="space-y-2 text-zinc-400">
          <li className="hover:text-white cursor-pointer">Partner With Us</li>
          <li className="hover:text-white cursor-pointer">Apps For You</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4 text-white">LEARN MORE</h3>
        <ul className="space-y-2 text-zinc-400">
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Security</li>
          <li className="hover:text-white cursor-pointer">Terms</li>
          <li className="hover:text-white cursor-pointer">Sitemap</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4 text-white">SOCIAL LINKS</h3>
        <ul className="space-y-2 text-zinc-400">
          <li className="hover:text-white cursor-pointer">Instagram</li>
          <li className="hover:text-white cursor-pointer">LinkedIn</li>
          <li className="hover:text-white cursor-pointer">Facebook</li>
          <li className="hover:text-white cursor-pointer">Twitter</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold mb-4 text-white">GET THE APP</h3>

        <button className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 rounded-lg mb-3 hover:bg-zinc-800 transition">
          Download on App Store
        </button>

        <button className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 rounded-lg hover:bg-zinc-800 transition">
          Get it on Google Play
        </button>
      </div>

    </div>

    <hr className="my-8 border-zinc-800" />

    <p className="text-sm text-zinc-500 leading-relaxed">
      By continuing past this page, you agree to our Terms of Service,
      Cookie Policy, Privacy Policy and Content Policies. All trademarks
      are properties of their respective owners. 2008-2026 © Foodie Inc.
      All rights reserved.
    </p>

  </div>
</footer>
    </>
  )
}

export default Footer