import React, {useState} from 'react';
import fakeData from '../../fakeData';
import Coverpic from '../Coverpic/Coverpic';

const Cover = () => {
    // console.log(fakeData)
    const covers = fakeData.slice(0,1);
    const [ cover , setCover] =  useState(covers);

    return (
        <div >
            
            <div className="coverpic">

               {
                   cover.map ( covers => <Coverpic
                            covers = { covers } >

                   </Coverpic> )

               }
            </div>
            
           
            
        </div>
    );
};

export default Cover;