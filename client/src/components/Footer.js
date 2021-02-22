import React from 'react';
import LinkedIn from '../Images/linkedinIcon.png';
import GitHubIcon from '../Images/githublogo.png';


const Footer = () => {
    return (
        <footer className='bg-light h-15 position-fixed-bottom mt-3 pb-2'>
                <h5 className='py-1 text-primary'>Developed using the MERN Stack by Matt McKenna</h5>
                    <div className='d-inline-block mx-3 text-primary'>
                        <h6>View Code</h6>
                        <a href='https://github.com/Matt-Mckenna-26/BizTrak' target='blank'>
                            <img src={GitHubIcon} className ='mx-4' style={{height:'3rem'}}/>
                        </a>
                    </div>
                    <div className='d-inline-block mx-3 text-primary'>
                        <h6>Connect</h6>
                        <a href='https://www.linkedin.com/in/matt-mckenna-621682113/' target='blank'>
                            <img src={LinkedIn} className ='mx-4' style={{height:'3rem'}}/>
                        </a>
                    </div>
        </footer>
    )
}

export default Footer 