import React from 'react'

const Portfolio = () => {



  
  
  return (
    <div name= "Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6  text-xl font-bold'> Check some of my work here... :)</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>


       


          <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

          <img className='rounded-md duration-200  hover:scale-105' src="/food.png" alt="" />
              <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    <ul>
                        <li>
                          <a target='_blank' href="https://github.com/anupam1308/food_ordering_website">Demo</a>
                        </li>
                      </ul>
                    </button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                    <ul>
                        <li>
                          <a target='_blank' href="https://github.com/anupam1308/food_ordering_website.git">Code</a>
                        </li>
                      </ul>
                  </button>
              </div>

          </div>



      
      
     

      <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

<img className='rounded-md duration-200 hover:scale-105' src="/edu.png" alt="" />
    <div className='flex items-center justify-center'>
        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/anupam1308/Student-Database-main">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/anupam1308/Student-Database-main.git">Code</a>
              </li>
            </ul>
        </button>
    </div>

</div>

<div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

        <img className='rounded-md duration-200 hover:scale-105' src="/py.png" alt="" />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
            <ul>
              <li>
                <a target='_blank' href="https://github.com/anupam1308/CodeSoft-">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/anupam1308/CodeSoft-.git">Code</a>
              </li>
            </ul>
          </button>
        </div>

      </div>
     
      
      
      {/* <div className='shadow-md shadow-gray-500 rounded-md duration-200 hover:scale-105'>

        <img className='rounded-md duration-200 hover:scale-105' src="/Form.png" alt="" />
        <div className='flex items-center justify-center'>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://e-vault-tau.vercel.app/">Demo</a>
              </li>
            </ul>
          </button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
          <ul>
              <li>
                <a target='_blank' href="https://github.com/mudit088/E-vault.git">Code</a>
              </li>
            </ul>
          </button>
        </div>

      </div> */}
      



      </div>
      </div>
    </div>
  )
}

export default Portfolio