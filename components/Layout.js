import React from 'react'
import Footer from './Footer'
import Nabvar from './Nabvar'

function Layout({ children }) {
    return (
        <div>
            <Nabvar />
                {children}
            <Footer />
        </div>
    )
}

export default Layout
