import React, { useState } from 'react';

const Claims = (props) => {
    const [count, setCount] = useState(0);
    const [returnData, setReturnData] = useState(false);

    if (count === 0){
        setCount(1);
        getClaims();
    }

    function getClaims(lang='en') {
        const axios = require('axios').default;

        const key = process.env.KEY || 'AIzaSyDq0d9k37s8KVR5zbTGg7un0-Pb16YpRi0';

        const query = `languageCode=${lang}&query=${props.search}`;

        axios.get(`https://factchecktools.googleapis.com/v1alpha1/claims:search?${query}&key=${key}`)
        .then(function (response) {
            // handle success
            const data = response.data.claims
            returnClaims(data)
        })
        .catch(function (error) {
            // handle error
            console.log("error:\n");
            console.log(error);
        })
    }

    
    function returnClaims(data) {
        /*
        if(count === 0 ) {
            console.log(data);
            return false
        } else {
            */
            if(data.length === 0) {
                return (
                    <div>
                        No claims for this search. Please try again with a different topic.
                    </div>
                );
            }
            var returnClaims = [];
            for(let i = 0; i < data.length; i++) {
                const returnValue = (
                    <div className="loaded-data">
                        <div className="center-head">
                            {data[i].text}
                        </div>
                        <div className="contain-data">
                            Claimant: {data[i].claimant}
                        </div>
                        <div className="contain-data">
                            Claim Date: {data[i].claimDate}
                        </div>
                    </div>
                )
                returnClaims.push(returnValue);
            }
            const dataToReturn = (
                <div className="row">
                    <div className="col-sm">
                        {returnClaims[0] !== undefined && (
                            <div>
                                {returnClaims[0]}
                            </div>  
                        )}
                        {returnClaims[3] !== undefined && (
                            <div>
                                {returnClaims[3]}
                            </div>  
                        )}
                        {returnClaims[6] !== undefined && (
                            <div>
                                {returnClaims[6]}
                            </div>  
                        )}
                    </div>
                    <div className="col-sm">
                        {returnClaims[1] !== undefined && (
                            <div>
                                {returnClaims[1]}
                            </div>  
                        )}
                        {returnClaims[4] !== undefined && (
                            <div>
                                {returnClaims[4]}
                            </div>  
                        )}
                        {returnClaims[7] !== undefined && (
                            <div>
                                {returnClaims[7]}
                            </div>  
                        )}
                    </div>
                    <div className="col-sm">
                        {returnClaims[2] !== undefined && (
                            <div>
                                {returnClaims[2]}
                            </div>
                        )}
                        {returnClaims[5] !== undefined && (
                            <div>
                                {returnClaims[5]}
                            </div>  
                        )}
                        {returnClaims[8] !== undefined && (
                            <div>
                                {returnClaims[8]}
                            </div>  
                        )}
                    </div>
                </div>
            );
            setReturnData(dataToReturn);
        //}
    }
    return (
        <div>
            {returnData === false && 
                <div>
                    loading...
                </div>
            }
            {returnData !== false &&
                <div className="container">
                    {returnData}
                </div>
            }
        </div>
    )
}

export default Claims;