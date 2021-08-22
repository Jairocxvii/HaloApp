import React from 'react'
import Header from '../../parts/header'
import Footer from '../../parts/footer'
function Layout(props){
    return (
        <React.Fragment>
            <Header />
            {props.children}
            <Footer/>
        </React.Fragment>

    )
}

export default Layout
