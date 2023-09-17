import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './StartRate.css';

const StartsRate = ({value}) => {
    return (
        <div>
            <div className="star-rating" title={value*100 + '%'}>
                <div className="back-stars">
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    <FontAwesomeIcon icon={faStar} aria-hidden={true}/>

                    <div className="front-stars" style={{width: value*10 + '%'}}>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                        <FontAwesomeIcon icon={faStar} aria-hidden={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartsRate;