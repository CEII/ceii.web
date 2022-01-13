import {FC} from 'react'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';


const Pagination : FC = () => {
    return (
        <>
            <div className="flex justify-between w-full bg-white rounded-3xl h-12 px-3">
                <div className="flex justify-center items-center text-secondary hover:text-accent">
                    <button><ChevronDoubleLeftIcon className="w-full h-10"/></button>
                </div>
                

                <div className="flex justify-center items-center w-11/12 gap-8 text-secondary">
                    <button className='font-bold hover:text-accent'>1</button>
                    <button className='font-bold hover:text-accent'>2</button>
                    <button className='font-bold hover:text-accent'>3</button>
                    <button className='font-bold hover:text-accent'>4</button>
                    <button className='font-bold hover:text-accent'>5</button>
                </div>
                
                <div className="flex justify-center items-center text-secondary hover:text-accent">
                    <button><ChevronDoubleRightIcon className="w-full h-9"/></button>
                </div>
            </div>
            
        </>
    )
}

export default Pagination
