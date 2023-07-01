import React from 'react'
import Footer from './Footer'
import Header from './Header'
const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <h5>{children}</h5>
            <Footer />
        </>
    )
}

export default Layout