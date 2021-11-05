import React from 'react';

const PostCard = ({post}) => {
    return (
        <div>
            {post.title}
            {post.content}
        </div>
    );
};

export default PostCard;