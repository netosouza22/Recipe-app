import React from 'react';
import styled from 'styled-components'

const Section = styled.section`
    max-width: 960px;
    margin: 0 auto;

    padding: 10px 30px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Ul = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Li = styled.li`
    margin-right: 40px;
    text-decoration: none;
    cursor: pointer;
`;
function Header(props) {
    
    return (
        <div>
            <Section>
                <h1>LOGO</h1>
                
                <Ul>
                    <Li>Sweet Foods </Li>
                    <Li>Savoury Foods</Li>
                    <Li>Drinks</Li>
                </Ul>
            </Section>
        </div>
    );
  }
export default Header;