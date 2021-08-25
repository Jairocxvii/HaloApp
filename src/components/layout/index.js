import React from 'react'
import Header from '../../parts/header'
import Footer from '../../parts/footer'
import Menu from '../../parts/menu'
import SearchGamertag from '../../parts/searchGamertag'
function Layout(props) {
    return (
        <React.Fragment>
            <Header />
            <Menu />
            <SearchGamertag />
            {props.children}
            <Footer />
        </React.Fragment>

    )
}

export default Layout
