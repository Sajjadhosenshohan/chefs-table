// import React from 'react';
import PropTypes from 'prop-types';




const ShowCard = ({ displayCard, handlePreparing}) => {
    // console.log(displayCard);
    const { preparing_time, ingredients, calories, recipe_image, short_description, recipe_name
    } = displayCard;

    return (
        

        <div className='border-2 border-[#28282833] rounded-2xl p-2 '>
            
            
            <div className='rounded-2xl w-full h-[200px] bg-center'>
                <img className='rounded-2xl w-full h-[200px] bg-center' src={recipe_image} alt="" />
            </div>
            <h4 className='mt-6 text-2xl font-semibold text-[#282828]'>{recipe_name}</h4>
            <p className='text-[#878787] my-4'>{short_description}</p>

            <div className="divider"></div>
            {/*  */}
            <h4 className='text-lg font-medium mt-6 mb-4'>Ingredients: 6</h4>
            
            <div className='text-[#878787] space-y-2'>
                <ol className='list-disc ml-4'>
                {
                    ingredients.map((hi,index) => <li key={index}>{hi}</li>)
                    
                }
                </ol>
            </div>
            
            <div className="divider mt-4 mb-6"></div>
            {/*  */}
            <div className='flex my-6 gap-7'>

                <div className='flex gap-3'>
                    <span><img src="../../../public/image/clock.png" alt="" /></span>

                    <p><span>{preparing_time}</span> minutes</p>
                </div>

                <div className='flex gap-3'>
                    <span><img src="../../../public/image/cook.png" alt="" /></span>
                    <p><span>{calories} </span>calories</p>
                </div>

            </div>


            <button className="rounded-[50px] text-black bg-[#0BE58A] py-2 px-5 text-2xl font-semibold " onClick={() => handlePreparing(displayCard)}>Want to Cook</button>

            
        </div>
    );
}

ShowCard.propTypes = {
    handlePreparing: PropTypes.func,
    displayCard: PropTypes.object
}

export default ShowCard;