import React from 'react';
import { Helmet } from 'react-helmet';

function Background() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-color: #2F3E6C; }'}</style>
            </Helmet>
        </div>
    )
}

export default Background;