import React from 'react'

function Contact() {

  return (
    <div className=" bg-[#1b263b] py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2  lg:items-center">

          <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">

            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 ">
              Mail us your queries
            </h2>

            <p className="text-zinc-500 dark:text-zinc-400 mb-8 max-w-[50ch] lg:max-w-[30ch]">
              Reach out to us today and make a kickstart for your journey with us..!
            </p>

            

          </div>

          {/* Right Section: Form */}
            <div className="contact-form max-w-md mx-auto p-4 border dark:border-gray-700 rounded-md text-white bg-gray-50 dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-4 dark:text-white ">Contact Us</h2>
              <form>
                <input  
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-2 mb-3 rounded-md border bg-transparent dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-2 mb-3 rounded-md border  bg-transparent dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                />
                <textarea 
                  placeholder="Message" 
                  className="w-full p-2 mb-3 rounded-md border  bg-transparent dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                />
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 dark:bg-blue-700 text-white p-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800"
                >
                  Send Message
                </button>
              </form>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Contact;

