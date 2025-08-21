import React from "react";


// ----- Newsletter -----
function Newsletter() {
  return (
    <section className="bg-amber-100">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-14 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">Join the (company name) Circle</h3>
        <p className="mt-2 text-gray-700">Exclusive drops, styling tips and early access to events.</p>
        <form className="mt-6 flex max-w-xl mx-auto">
          <input type="email" required placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-l-xl border border-r-0 outline-none" />
          <button className="px-6 py-3 bg-gray-900 text-white rounded-r-xl hover:bg-black">Subscribe</button>
        </form>
      </div>

      



    </section>
  );
}

export default Newsletter; 

// git status
// git add .
//  git commit -m "hero"
// git push origin main