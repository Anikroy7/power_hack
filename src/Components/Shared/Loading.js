import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-4 h-4 border-4 rounded-full" role="status">
                <span class="visually-hidden">.</span>
            </div>
            <span class="">Generating Id</span>
        </div>
    );
};

export default Loading;