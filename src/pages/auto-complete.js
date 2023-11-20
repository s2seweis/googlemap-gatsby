import React from 'react';
import Layout from '../components/Layout/layout';
import AutoCompleteComponent from '../components/Maps/AutoCompleteComponent';

export default function AutoComplete() {
    return (
        <Layout>
            <a
                style={{
                    fontSize: '1.3rem',
                    padding: '5px',
                    marginLeft: '20px',
                }}
                href="javascript:history.back()"
            >
                <button type="button" className="btn btn-link">Go Back</button>
            </a>
            <div className='intro-container'>
                <div className='intro-card'>
                    <AutoCompleteComponent />
                </div>
            </div>
        </Layout>
    )
}