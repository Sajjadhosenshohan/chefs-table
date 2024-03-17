
// import React from 'react';
import { useState } from 'react';
import '../../App.css'
import ShowCard from '../ShowCard/ShowCard';
import { useEffect } from 'react';

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import logo from '../../../public/image/profile.png';



const Design = () => {
   
    const [cards, setCards] = useState([]);
    
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        const url = './Data.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])



    const handlePreparing = (pre) => {
        // console.log('kam sara' + pre);

        const Available = recipe.find((p) => p.recipe_id == pre.recipe_id);

        if (!Available) {
            setRecipe([...recipe, pre])
        }
        else {
            // toast
            toast('Already Exist')
        }
    }


    const [time, setTime] = useState(0);
    const [calory, setCalory] = useState(0)

    const [recipe, setRecipe] = useState([]);

    function handleRecipeClick(item) {
        showRecipe(item, item.preparing_time, item.calories);
        
        handleDelete(item.recipe_id);
    }
    
    
    const handleDelete = (id) => {
        const newArray = recipe.filter(item => item.recipe_id !== id )
        setRecipe(newArray);
    }

    const showRecipe = (cook, t, calories) => {
        setCooking([...cooking, cook]);
        
        // for time
        const newTime = time + t;
        setTime(newTime)

        // for calories
        const newCalory = calory + calories;
        setCalory(newCalory)

    }

    

    return (
        <div className="font-lexend">
            <header className='max-w-[82%] mx-auto'>
                {/* navbar start */}
                <div className="navbar bg-base-100 mb-12">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Home</a></li>
                                <li><a>Recipes</a></li>
                                <li><a>About</a></li>
                                <li><a>Search</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-3xl font-bold">ALL<span className='text-[#0BE58A]'>R</span>ECIPES</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[#150B2BB3]">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>

                    {/*  */}
                    <div className=" gap-2 navbar-end ">
                        <div className="form-control">
                            <label className="input rounded-[50px] w-24 md:w-auto bg-[#150B2B0D]  flex items-center gap-2">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

                                <input type="text" className="grow" placeholder="Search" />

                            </label>
                        </div>

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" 
                                    src={logo}/>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                
                            </ul>
                        </div>
                    </div>
                </div>
                {/* hero section start */}
                <section className='mb-[100px]'>
                {/* url(../../../public/image/hero.png) */}
                {/* style={{ backgroundImage: 'url(../../../public/image/hero.png)' }} */}
                    <div className=" hero h-[600px] banner " >
                        
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className=" text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>

                                <p className="mt-6 mb-10">We especially like the ‘Entertaining’ section, with ideas for every kind of party.</p>

                                <div >
                                    <button className="rounded-[50px] text-black bg-[#0BE58A] py-5 px-7 text-2xl font-semibold mr-8">Explore Now</button>

                                    <button className="rounded-[50px] border-2 border-white py-5 px-7 text-2xl font-semibold">Explore Now</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>



            <main className='max-w-[82%] mx-auto mb-24'>
                <div className='text-center  mx-auto space-y-6 mb-12'>
                    <h2 className='text-4xl font-semibold'>Our Recipes</h2>
                    <p className='text-[#150B2B99]'>You know that feeling when you are eating your own home-made dish and it feels like you are in a restaurant.</p>
                </div>
                {/* recipe show main */}
                <div className='flex justify-between flex-col md:flex-row gap-6'>
                    {/* all card */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {/* single card */}
                        {
                            cards.map(card => <ShowCard displayCard={card} handlePreparing={handlePreparing} key={card.recipe_id} ></ShowCard>)
                        }
                        
                    </div>

                    {/* recipe show */}
                    <div className=' border-2 border-[#28282833] rounded-2xl p-3'>
                        {/* div 1 */}

                        <div >
                            <h2 className='border-b-2 text-center text-2xl font-semibold p-4'>Want to cook: <span id='Length'>{recipe.length}
                            </span></h2>

                            <div className='flex justify-around mt-4 mb-6 gap-2'>
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>

                            <div>
                                {
                                    recipe.map((item, index) => (
                                        console.log(item),

                                        <div key={item.calories} className='flex justify-around list-none gap-6 bg-[#28282808] p-6'>
                                            {/* toast */}
                                            <ToastContainer></ToastContainer>
                                            <li>{index + 1}</li>
                                            <li>{item.recipe_name}</li>
                                            <li>{item.preparing_time} minutes</li>
                                            <li>{item.calories} calories</li>

                                            <button className="rounded-[50px] text-black bg-[#0BE58A] py-1 px-3 text-lg font-semibold " onClick={() => handleRecipeClick(item)}>Preparing</button>

                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        {/* div 2 */}

                        <div className='mt-8'>
                            <h2 className='border-b-2 text-center text-2xl font-semibold p-4'>Currently cooking: {cooking.length}</h2>

                            <div className='flex justify-around mt-4 mb-6 gap-2'>
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>

                            <div >
                                
                                {
                                    cooking.map((item2, index) => (
                                        console.log(item2),

                                        <div key={index} className='flex justify-around list-none gap-6 bg-[#28282808] p-6 mb-4'>
                                            {/* toast */}

                                            <li>{index + 1}</li>
                                            <li>{item2.recipe_name}</li>
                                            <li>{item2.preparing_time} minutes</li>
                                            <li>{item2.calories} calories</li>
                                        </div>
                                    ))
                                }
                               
                            </div>

                            {/*  */}
                            <div className='flex gap-5 justify-end'>
                                <p>Total Time =<br /><span className='bg-[#0BE58A] p-1 rounded-md'>{time}</span> minutes</p>
                                <p>Total Calories =<br /><span  className='bg-[#0BE58A] p-1 rounded-md'>{calory}</span> Calories</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Design;