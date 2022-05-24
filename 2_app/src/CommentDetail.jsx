import React from 'react';
import faker from 'faker';

const CommentDetail = (params) => {
    return (
        
        <div className="comment">

        <a href="http://" className="avatar">
            <img src={params.avatar_picture} alt="avatar" />

        </a>
        <div className="content">

            <a href="http://" className="author">
            {// hardcoded name
                }


            {params.name}
            
            
            </a>

            <div className="metadata">
                <span className="date">
                    {params.when}
                </span>
            </div>

            <div className="text">
                {params.comment_content}
            </div>

        </div>

    </div>
    );


    };

export default CommentDetail; // in this way the comment is avialable to all the other files by importing