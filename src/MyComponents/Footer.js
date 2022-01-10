import React from 'react'

export const Footer = () => {
    let footerstyle = {
        position: "relative",
        top: "20vh",
        width: "100%",
    }    
    
    return (
        <div className='bg-dark text-light py-2' style = 
        {footerstyle}>
            <p className='text-center'>
                Copyright &copy; MyApp.com
            </p>
        </div>
    )
}
