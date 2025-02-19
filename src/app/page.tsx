import Link from "next/link"
import Image from "next/image"

export default function home (){
    return (

          <main>
              <nav className="flex justify-around mt-4">
                {/* logo */}
                <h1 className="text-3xl font-extrabold font-serif mt-1" >SADABAHAR.CO</h1>
               <div className="mt-2"><Link href="">Shop</Link> </div> 
               <div className="mt-2"><Link href="">New Arrivals</Link> </div> 
               <div className="mt-2"><Link href="">On Sale</Link> </div> 
               <div className="mt-2"><Link href="">Unstitched</Link> </div> 
               <div className="hidden md:block">
               <div className=" border-2 border-gray-400 rounded-md mt-1 bg-gray-200 flex justify-center" > <input className="bg-gray-200 w-[400px] text-center" type="text" placeholder="Search Our Product" required /> </div>
               </div>

               <div className=" flex mt-2" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>

               </div>
               
              </nav>
              <br />

              <section className="bg-gray-200 w-[100%] h-[400px] flex justify-center" >
                {/* LEFT SIDE */}
               <div className="flex-1 ml-11" >
                   <h1 className="font-extrabold text-5xl font-s" >FIND CLOTHS<br /> THAT MATCHES <br /> YOUR STYLE</h1> <br />
                   <p className="text-gray-700 font-light">Browes through our diserve range of meticulosely crafted garments, designed <br />
                   to bring out your individuality and cater to your sence of style</p> <br />
                   <button className="bg-gray-950 text-white border-black rounded w-[200px]">Shop Now</button> <br /> <br />
                    <div className="flex">
                     <section>
                     <p className="font-bold text-4xl">200+</p>
                     <p>International Style</p>
                     </section>
                     <section className="border border-gray-800 ml-4" ></section>
                     <section className="ml-7">
                     <p className="font-bold text-4xl">2000+</p>
                     <p>High Quality Product</p> 
                     </section>
                     <section className="border border-gray-800 ml-4" ></section>
                     <section className="ml-7">
                     <p className="font-bold text-4xl">80000+</p>
                     <p>Happy Contomers</p> 
                     </section>
                    </div>
                </div> 
                  {/* right side */}
                <div className="ml-[2%] flex-1" >
                   <div><Image width={600} height={300} src="/image2.png" alt="no"/></div>
                </div>
               

              </section> 
                {/* section 2 */}
              <section className="flex justify-around border border-black h-12 items-center text-white bg-gray-950" >
                <Link href=""> LAWN </Link>
                <Link href="">KHADAR</Link>
                <Link href="">CHEFON</Link>
                <Link href="">ORGANZA</Link>
                <Link href="">VISCOSE</Link>
              </section>
              {/* picture section 01 */}
              <section>
               <h2 className="font-bold text-3xl text-center mt-8">NEW ARRIVALS</h2>
               <section className="flex justify-evenly mt-4" >
                 <div >
                     <Link href="/order/kh1"><Image width={300} height={300} src="/KD1.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">4.5/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 <div >
                     <Link href=""><Image width={311} height={300} src="/KD2.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                      
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">3/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 <div >
                     <Link href=""><Image width={308} height={300} src="/KD3.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">4/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 <div >
                     <Link href=""><Image width={313} height={300} src="/KD4.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                    
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">3.5/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 
                </section>
                <div className="text-center" ><button className="bg-slate-300 border border-gray-900 w-[100px] rounded-lg mt-3 ">Veiw More</button></div>
                <br />
                <div className="flex justify-center" ><p className=" border border-gray-400 w-[80%]  mt-3 "></p></div>

                
            </section>

                {/* image 2nd section */}

            <section>
            <h2 className="font-bold text-3xl text-center mt-8">MOST SELLING</h2>
            <section className="flex justify-evenly mt-4" >
                 <div >
                     <Link href=""><Image width={300} height={300} src="/KD9.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">4.5/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 <div >
                     <Link href=""><Image width={300} height={300} src="/KD6.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                      
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">3/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 <div >
                     <Link href=""><Image width={308} height={300} src="/KD7.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">4/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 <div >
                     <Link href=""><Image width={300} height={300} src="/KD8.jpg" alt="main"/></Link>
                      <h3 className="font-bold">Khadar 3pcs Printed</h3>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/ svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                       <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>
                    
                       <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                       <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                       </svg>  <span className="text-xs mx-2 font-thin">3.5/5</span>
                     </div>
                     <button type="submit" className="font-bold"><p>PKR 3750</p></button>

                 </div>
                 
                </section>
               
           </section>

           {/* 3RD SECTION IMAGE */}
           <div className="flex justify-center">
              <section className="w-[96%] h-[600px] bg-slate-300" >
                <h1 className="text-center font-bold text-3xl mt-4">BROWSE MY DRESS COLLECTION</h1> 
                
                <section className="ml-[200px] mt-4"> 
                  <div className="flex">
                     <div className="flex bg-slate-200">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-2xl mt-7 ml-8">LAWN</h1>
                        <Link href=""> <Image width={320} height={100} src="/jec11.png" alt=""/></Link>
                      </div>
                     </div>
                     <div className="flex bg-slate-200 ml-5">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-2xl mt-7 ml-8">KHADAR</h1>
                        <Link href="/order/kh2"> <Image width={320} height={100} src="/jec22.png" alt=""/></Link>
                      </div>
                     </div>
                   </div>
                   {/* section 2 */}
                   <div className="flex mt-8" >
                     <div className="flex bg-slate-200">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-2xl mt-7 ml-8">COTTON</h1>
                        <Link href=""> <Image width={300} height={100} src="/jec33.png" alt=""/></Link>
                      </div>
                     </div>
                     <div className="flex bg-slate-200 ml-5">
                      <div className="flex justify-center">
                        <h1 className="font-bold text-2xl mt-7 ml-8">VISCOS CK</h1>
                        <Link href=""> <Image width={300} height={100} src="/jec44.png" alt=""/></Link>
                      </div>
                     </div>
                   </div>
                </section>

                
           
              </section>
           </div>

           {/* 4section */}
            <h1 className="font-extrabold text-5xl ml-5 mt-[50PX]">OUR HAPPY COSTOMERS</h1>
            <div className="flex justify-evently justify-around mt-8 mr-9">
              <div className="bg-slate-300 border rounded h-[200px]">
                 <h1 className="font-bold bg-slate-900 text-white "> Daniyal</h1> <br /> 
               <div className="w-[350px] h-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis temporibus eos, accusamus et dolorum placeat quia est autem sapiente tempore laboriosam. Distinctio in natus impedit. Delectus autem molestias sapiente?
               </div>
              </div>
              <div className="bg-slate-300 border rounded h-[200px]">
                 <h1 className="bg-slate-900 text-white font-bold">Bilal</h1> <br />
               <div className="w-[350px] h-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis temporibus eos, accusamus et dolorum placeat quia est autem sapiente tempore laboriosam. Distinctio in natus impedit. Delectus autem molestias sapiente?
               </div>
              </div>
              <div className="bg-slate-300 border rounded h-[200px]">
                 <h1 className="font-bold bg-slate-900 text-white ">YAseen</h1> <br />
               <div className="w-[350px] h-[250px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corporis temporibus eos, accusamus et dolorum placeat quia est autem sapiente tempore laboriosam. Distinctio in natus impedit. Delectus autem molestias sapiente?
               </div>
              </div>
             
              
              
            </div>

            {/* form section */}

            <div className="flex justify-evenly mt-9 bg-slate-950 text-white h-[100px] items-center">
              <div><p className="font-extrabold text-3xl">STAY UPTO DATE  <br />OUR LATEST OFFER</p></div>
              <div>
                <div >
                 <input type="email" placeholder="Enter Your Email Address" className="border rounded-md text-black" /></div>
                 <div className="mt-3"><button className="w-[183px] bg-white border rounded-md text-black">Ragister</button></div>
                
              </div>
            </div>
        
              <div className="mt-6 flex justify-around bg-gray-200" >
                <section className="text-gray-600">
                  <div className="text-3xl text-black font-extrabold font-serif mt-1"> SADABAHAR.CO</div>
                  <div className="mt-3">We have a cloths that suits your style and <br /> which you are proud to wear.</div>
                  <div className="mt-3">Address : DHA PhASE 4</div>
                  <div className="mt-3">CONTACT : 03213967012</div>
                </section>
                <section className="text-gray-600">
                  <div className="font-bold text-black">COMPANY</div>
                  <div className="mt-3 "><Link href="">About</Link></div>
                  <div className="mt-3"><Link href="">Features</Link></div>
                  <div className="mt-3"><Link href="">Works</Link></div>
                  <div className="mt-3"><Link href="">Career</Link></div>
                </section>
                <section className="text-gray-600">
                  <div className="font-bold text-black">HELP</div>
                  <div className="mt-3 "><Link href="">Company Support</Link></div>
                  <div className="mt-3"><Link href="">Deliwery Detail</Link></div>
                  <div className="mt-3"><Link href="">Terms & Condition</Link></div>
                  <div className="mt-3"><Link href="">Privacy Policy</Link></div>
                </section>
                <section className="text-gray-600">
                  <div className="font-bold text-black">FAQ</div>
                  <div className="mt-3 "><Link href="">Account</Link></div>
                  <div className="mt-3"><Link href="">Manage Deliveries</Link></div>
                  <div className="mt-3"><Link href="">Orders</Link></div>
                  <div className="mt-3"><Link href="">Payments</Link></div>
                </section>
                <section className="text-gray-600">
                  <div className="font-bold text-black">RESOURCES</div>
                  <div className="mt-3 "><Link href="">Free eBook</Link></div>
                  <div className="mt-3"><Link href="">Delopment Tutorial</Link></div>
                  <div className="mt-3"><Link href="">How To - Blog</Link></div>
                  <div className="mt-3"><Link href="">Youtube Playlist</Link></div>
                </section>
               
              </div>
                
              
              

              
           </main>
             
    
          
    )
}