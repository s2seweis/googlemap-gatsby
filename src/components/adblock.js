import React from 'react'
import AdSense from 'react-adsense'

const AdBlock = () => (
    <AdSense.Google
        client="5912939817167412"
        slot="YOUR-SLOT-HERE"
        style={{ display: 'block' }}
        layout="in-article"
        format="fluid"
    />
)

export default AdBlock