import React from 'react';
import './Profile.css';

export default function Profile(){
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://twitter.com/SalsabilaAndaru'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            <a href='https://www.instagram.com/sasaandaru/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://github.com/andarusalsa'>
                                <i className='fa fa-github-square'></i>
                            </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span classNama="primary-text">
                            {" "}
                            Halo, Saya <span className="highlighted-text">Andaru Putri Salsabila</span>
                        </span>
                    </div>
                    <div className="profile-details-status">
                        <h3>Saya Mahasiswi Institut Teknologi Sumatera</h3>
                        <span className="profile-status">
                            Teknik Informatika semester 6
                        </span>
                    </div>
                    <div className='profile-options'>
                        <a href="CV.pdf" dp>
                            <button className='btn primary-btn'>Click Me</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    )
}