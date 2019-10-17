import React from 'react';

const Header = (props) => {
    return (  
        <header>
            <h1 className="text-center mt-0">{props.titulo}</h1>
        </header>
    );
}
 
export default Header;