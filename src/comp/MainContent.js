import React from 'react';
import "./MainContent.css"

const MainContent = ({pageName, designer}) => {
    return (
  
        <main>
            {pageName}
            <br/>
            {designer}
        </main>

    );
}

export default MainContent;
