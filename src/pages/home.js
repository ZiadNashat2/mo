import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/footer';
import MainContent from '../comp/MainContent';

const Home = () => {
    return (
        <>

        <Header/> 
        
        <MainContent  pageName="Home page"   designer = "ziad nashaat" />


        <Footer/>
        
        </>
    );
}

export default Home;
