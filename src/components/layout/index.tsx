import React from 'react'
import Header from '../../parts/header'
import Footer from '../../parts/footer'
import Menu from '../../parts/menu'





export const Layout: React.FC = (props) => {

    return (
        <React.Fragment>
            <Header/>
            <Menu />
            {props.children}
            <Footer />
        </React.Fragment>

    );
};

export default Layout
