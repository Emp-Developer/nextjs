import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/dist/client/link'

function dashboard() {
    return (
        <Layout>
            <div>
                This is dashboard
                <Link href="/">
                    <a>Back To Home</a>
                </Link>

            </div>
        </Layout>        
    )
}

export default dashboard
