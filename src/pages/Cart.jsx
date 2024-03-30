import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../redux/slice';
import { ResCards } from '../components/ResCards';

const Cart = () => {
    const result = useSelector((state) => state.datafetch.cart);
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeCart(id));
    };


    return (
        <div>
            {result.map((item) => (
                <div key={item.id} className='flex-col border-2'>
                    <ResCards name={item.name} type={item.cuisine_type}
                        place={item.neighborhood}
                        hours={item.address} />
                    <div>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            onClick={() => handleRemove(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart