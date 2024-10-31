import Link from "next/link"

export default function header (){
    return (

          <main>
              <nav className="flex justify-around mt-4">
                {/* logo */}
                <h1 className="text-3xl font-extrabold font-serif mt-1" >SADABAHAR.CO</h1>
               <div className="mt-2"><Link href="">Shop</Link> </div> 
               <div className="mt-2"><Link href="">New Arrivals</Link> </div> 
               <div className="mt-2"><Link href="">On Sale</Link> </div> 
               <div className="mt-2"><Link href="">Unstitched</Link> </div> 
               <div className="border-2 border-gray-400 rounded-md mt-1 bg-gray-200 flex justify-center" > <input className="bg-gray-200 w-[400px] text-center" type="text" placeholder="Search Our Product" required /> </div>
               <div className="flex mt-2" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>

               </div>
               
              </nav>
              <br />

              <section className="bg-gray-200 w-[100%] h-[500px]">
                {/* LEFT SIDE */}
               <div>
                <h1 className="font-extrabold text-5xl font-s" >FIND CLOTHS<br /> THAT MATCHES <br /> YOUR STYLE</h1> <br />
                <p className="text-gray-700 font-light">Browes through our diserve range of meticulosely crafted garments, designed <br />
                to bring out your individuality and cater to your sence of style</p> <br />
                <button className="bg-gray-950 text-white border-black rounded w-[200px]">Shop Now</button> <br /> <br />
                

                </div> 
             </section> 

              
           </main>
             
    
          
    )
}