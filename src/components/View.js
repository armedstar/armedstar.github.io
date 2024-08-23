import React from 'react';
import Image from 'react-bootstrap/Image';

window.scrollTo(0, 0);

const View = ({data, viewIndex }) => {
    return(
        <div>
        {data[viewIndex].map(item => (
            <div className="view">
                <button onClick={() => window.location.reload(true)}>Back</button>
                {/* Project 1 */}
                <div className="project">
                    {/* Org Header */}
                    <p className="org"><span className="bold">Organization: </span>{item.title}</p>
                    {/* Project header */}
                    <h1><span class="no-bold">Project:</span> {item.subtitle}</h1>
                    {/* Main image */}
                    <Image src={item.imageUrl1} rounded />
                    {/* Role and Description */}
                    <p><h6>Role: </h6>{item.role}</p>
                    <p><h6>Description:</h6> {item.description}</p>ß
                    {/* Process description */}
                     {/* Supporting images */}
                    <Image src={item.imageUrl2} rounded />
                    <p><h6>Initial Discovery & Research:</h6>{item.process}</p>
                    <Image src={item.imageUrl3} rounded />
                    <Image src={item.imageUrl4} rounded />
                    <p><h6>Design & Definition:</h6>{item.designdef}</p>
                    {/* results */}
                    <p><h6>Results: </h6>{item.results}</p>

                </div>
            </div>
        ))}
        
        </div>
    );
};

export default View; 