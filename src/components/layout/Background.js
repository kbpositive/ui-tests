import React from 'react';
import { Helmet } from 'react-helmet';

function Background() {
    return (
        <div>
            <Helmet>
                <style>{'body { background-image: linear-gradient(135deg, #247DBB, #0A2436); }'}</style>
            </Helmet>
        </div>
    )
}

export default Background;