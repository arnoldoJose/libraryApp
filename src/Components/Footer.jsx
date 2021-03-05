import React from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const ContainerFooter = styled.div`
margin:auto;
margin-top: 10em;
width:100%;
height:20rem;
background-color: darkslategrey;

.container-footer{
  text-align:center;
  position: relative;
  top: 14.5em;
  color: white;
  bottom:0;
}
h4{
  color:white;
}
`;
const Footer = ({location}) => {

  let {pathname} = location;

  return pathname === "/history" || pathname === "/admin/count" || pathname === "/books"  ? null : (
    <footer className="footer">
      <ContainerFooter>
     <div className="container-footer">
       <h4>Derechos Reservados Biblioteca Publica de Totogalpa {new Date().getFullYear()}</h4>
     </div>
      </ContainerFooter>
    </footer>
  );
}

export default withRouter(Footer);
