import React from 'react'

const OurPolicy = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm md:text-base">
            <div>
                <div className="m-auto mb-5"><i className="fa-solid fa-arrow-right-arrow-left fa-2xl"></i></div> 
                <p className="font-semibold">Easy Exchange Policy</p>
                <p className="text-gray-400">We offer hassle free exchange policy</p>
            </div>
            <div>
                <div className="m-auto mb-5"><i className="fa-solid fa-circle-check fa-2xl"></i></div>
                <p className="font-semibold">7 Days Return Policy</p>
                <p className="text-gray-400">We provide 7 days return policy</p>
            </div> 
            <div>
                <div className="m-auto mb-5"><i className="fa-solid fa-headset fa-2xl"></i></div>
                <p className="font-semibold">Best Customer Support</p>
                <p className="text-gray-400">We provide 24/7 customer support</p>
            </div>   
        </div>
        
    )
}

export default OurPolicy
