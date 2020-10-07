import React from 'react';
import Styled from 'styled-components'

function Input({ typeName, onChange}){

    return(
        <form>
            <label>
                Insert your name: 
                <input type="text" name={typeName} onChange={onChange}/>
            </label> 
            <input type="submit" value="Change"/>
        </form>
    );
}

export default Input