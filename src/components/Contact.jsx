import React from "react"

function Contact() {
  const handleSubmit =(e)=>{
e.preventDefault()
  }
  return (
    <div className="w-10/12 m-auto py-8">
    <h1 className="text-2xl scroll-py-8 text-center uppercase font-bold">Contact form</h1>
    <p className="text-center">Please fill in the form very correctly</p>
     <div className="py-4">
       <form onSubmit={handleSubmit}>
     <div className="grid md:grid-cols-2 gap-4">
     <div className="flex flex-col"> 
     <label htmlFor="name" className="py-2 text-xl">Name</label>
     <input type="text" id="name" placeholder="Please enter your name" 
     className="outline-none border-[2px] border-gray-400 p-2 rounded" />
     </div>
     <div className="flex flex-col"> 
     <label htmlFor="Email" className="py-2 text-xl">Email</label>
     <input type="email" id="Email" placeholder="Please enter your email" 
     className="outline-none border-[2px] border-gray-400 p-2 rounded" />
     </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
     <div className="flex flex-col"> 
     <label htmlFor="Phone" className="py-2 text-xl">Phone Number</label>
     <input type="text" id="Phone" placeholder="Please enter your phone Number" 
     className="outline-none border-[2px] border-gray-400 p-2 rounded" />
     </div>
     <div className="flex flex-col"> 
     <label htmlFor="Subject" className="py-2 text-xl">Subject</label>
     <input type="text" id="Subject" placeholder="Please enter your subject" 
     className="outline-none border-[2px] border-gray-400 p-2 rounded" />
     </div>
        </div>
        <div className="flex flex-col"> 
     <label htmlFor="Message" className="py-2 text-xl">Message</label>
     <textarea rows={10} type="text" id="Message" placeholder="Please enter your message" 
     className="outline-none border-[2px] border-gray-400 p-2 rounded" ></textarea>
     </div>
     <button className="bg-blue-500 p-2 text-white my-4 px-4 rounded-md text-xl font-bold hover:bg-blue-600">Send</button>
       </form>
     </div>
    </div>
  )
}

export default Contact