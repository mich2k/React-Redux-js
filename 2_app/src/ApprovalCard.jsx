import React from 'react';

const ApprovalCard = (params) => {  {/* we can find the comment in the params object*/}

    console.log(params);
    console.log(params.children);
    {/* children is linked to the under-nested element */}


    return (
        
        <div className="ui card">
            <div className="content">  {params.children}   </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className=" ui basic green button"> Approve </div>
                    <div className=" ui basic red button"> Reject </div>

                </div>

            </div>


        </div>
       
    );
};

export default ApprovalCard;