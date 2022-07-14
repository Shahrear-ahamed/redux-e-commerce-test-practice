import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Loading = ({ children }) => {
    return (
        <div className='w-full h-screen grid justify-center items-center'>
            <button className="bg-indigo-500 font-semibold text-sm text-white flex items-center justify-center  py-3 px-8 rounded-md" disabled>
                <FontAwesomeIcon className='animate-spin w-5 h-5 mr-1' icon={faSpinner} />
                {children}...
            </button>
        </div>
    );
};

export default Loading;