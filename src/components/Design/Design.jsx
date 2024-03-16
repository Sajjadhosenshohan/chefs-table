// import React from 'react';
// import {Navbar} from 'react-daisyui';
// import '../../../public/image'

import { useState } from 'react';
import '../../App.css'
import ShowCard from '../ShowCard/ShowCard';
import { useEffect } from 'react';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Cooking from '../Cooking/Cooking';



const Design = () => {
    // let Length = 0;


    const [cards, setCards] = useState([]);

    const [recipe, setRecipe] = useState([]);

    // for cooking 
    const [cooking, setCooking] = useState([]);

    useEffect(() => {
        const url = '../../../public/Data.json';
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
            toast('i am coming')
        }
    }

    // const handleDelete = (id) => {
    //     console.log(id);
        
    // }


    const [time, setTime] = useState(0);
    const [calory, setCalory] = useState(0);

    // const handleCart = (product) => {

    //     const isExists = cart.find((p) => p.id == product.id);

    //     if (!isExists) {
    //       setCart([...cart, product]);
    //     } else {
    //       alert("Cart already exists");
    //     }
    //   };
    const showRecipe = (cook, t, calories, myId) => {
        // console.log('showing Recipe', cooking);
        setCooking([...cooking, cook]);
        // console.log(setCooking);
        // handleDelete()
        // for time
        const newTime = time + t;
        setTime(newTime)

        // for calories
        const newCalory = calory + calories;
        setCalory(newCalory)

        console.log(84,myId);

        // const newArray = cooking.filter(item => item.id !== myId)
        // setCooking(newArray)
        
    }

    return (
        <div className="font-lexend">
            <header className='max-w-[1320px] mx-auto'>
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
                        <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
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
                                    <img alt="Tailwind CSS Navbar component" src="../../../public/image/profile.png" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                {/* <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* hero section start */}
                <section className='mb-[100px]'>
                    <div className="hero h-[600px]" style={{ backgroundImage: 'url(../../../public/image/hero.png)' }}>
                        <div className=""></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                <h1 className=" text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>

                                <p className="mt-6 mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>

                                <div >
                                    <button className="rounded-[50px] text-black bg-[#0BE58A] py-5 px-7 text-2xl font-semibold mr-8">Explore Now</button>

                                    <button className="rounded-[50px] border-2 border-white py-5 px-7 text-2xl font-semibold">Explore Now</button>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>



            <main className='max-w-[1320px] mx-auto mb-24'>
                <div className='text-center w-2/4 mx-auto space-y-6 mb-12'>
                    <h2 className='text-4xl font-semibold'>Our Recipes</h2>
                    <p className='text-[#150B2B99]'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
                </div>
                {/* recipe show main */}
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* all card */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        {/* single card */}
                        {
                            cards.map(card => <ShowCard displayCard={card} handlePreparing={handlePreparing} key={card.recipe_id} ></ShowCard>)
                        }
                        {/* single card */}
                        {/* <div className='border-2 border-[#28282833] rounded-2xl p-6'>
                            <img className='rounded-2xl w-full' src="../../../public/image/food.png" alt="" />
                            <h4 className='mt-6 text-2xl font-semibold text-[#282828]'>Spaghetti Bolognese</h4>
                            <p className='text-[#878787] my-4'>Classic Italian pasta dish with savory <br /> meat sauce.</p>
                            
                            <div className="divider"></div>
                                
                            <h4 className='text-lg font-medium mt-6 mb-4'>Ingredients: 6</h4>
                            <ol className='text-[#878787] space-y-2'>
                                <li>500g ground beef</li>
                                <li>onion, chopped</li>
                                <li>cloves garlic, minced</li>
                            </ol>
                            <div className="divider mt-4 mb-6"></div>
                                
                            <div className='flex my-6 gap-7'>
                                <p className='flex gap-3'>
                                    <span><img src="../../../public/image/clock.png" alt="" /></span>

                                    <span>30 minutes</span>
                                </p>
                                <p className='flex gap-3'>
                                    <span><img src="../../../public/image/cook.png" alt="" /></span>

                                    <span>600 calories</span>
                                </p>

                            </div>

                            
                            <button className="rounded-[50px] text-black bg-[#0BE58A] py-5 px-7 text-2xl font-semibold ">Want to Cook</button>
                        </div> */}
                    </div>

                    {/* recipe show */}
                    <div className=' border-2 border-[#28282833] rounded-2xl p-6'>
                        {/* div 1 */}

                        <div >
                            <h2 className='border-b-2 text-center text-2xl font-semibold p-4'>Want to cook: <span id='Length'>{recipe.length}
                            </span></h2>

                            <div className='flex justify-around mt-4 mb-6 '>
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

                                            <button className="rounded-[50px] text-black bg-[#0BE58A] py-1 px-3 text-lg font-semibold " onClick={() => {
                                                showRecipe(item, item.preparing_time, item.calories, item.recipe_id)

                                                
                                            }}>Preparing</button>

                                            {/* {cart.map((cp) => (
                                                <>
                                                    <p>{cp.title.slice(0, 25)}</p>
                                                <button onClick={() => handleRemove(cp.id)}>remove</button>
                                                </>
                                            ))} */}
                                        </div>
                                    ))
                                }
                            </div>

                        </div>

                        {/* div 2 */}

                        <div className='mt-8'>
                            <h2 className='border-b-2 text-center text-2xl font-semibold p-4'>Currently cooking: {cooking.length}</h2>

                            <div className='flex justify-around mt-4 mb-6'>
                                <p>Name</p>
                                <p>Time</p>
                                <p>Calories</p>
                            </div>

                            <div >
                                {/* <div className='flex justify-around list-none gap-6 bg-[#28282808] p-6 mb-4'> */}

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
                                {/* <li>1</li>
                                <li>Spaghetti Bolognese</li>
                                <li>20 <br /> minutes</li>
                                <li>400 <br /> calories</li> */}

                                {/* <li>{item.recipe_name}</li>
                                <li>{item.preparing_time} minutes</li>
                                <li>{item.calories} calories</li> */}


                            </div>

                            {/*  */}
                            <div className='flex gap-5 justify-end'>
                                <p>Total Time =<br /><span>{time}</span> minutes</p>
                                <p>Total Calories =<br /><span>{calory}</span> Calories</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Design;