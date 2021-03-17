import React, {useEffect,useContext} from 'react'

import styled from 'styled-components';
import Header from '../Header';
import { CRMContext } from '../../Context/Provider';
const ContainerCategories = styled.div`
margin: 2em;
margin-top: 15%;
`;

const History = () => {

  const { verifyStatus } = useContext(CRMContext)

  useEffect(() => {
    verifyStatus(true);
  }, [verifyStatus])

  return (
  <>
      <Header />
      <ContainerCategories>
        <p>La biblioteca de la Merced Municipio de Totogalpa en el departamento de Madriz fue fundada en Julio de 1998
        por la señora Soledad Medina Corrales, esta se apertura por la gran necesidad y demanda de material bibliografico
        de la poblacion estudiantil docentes y poblacion en general. Durante la visita del ministro de cultura de esa 
        fecha se le planteó la necesidad de dotar de material bibliografico y movilario para la recreacion de una
        biblioteca municipal iniciando con 365 libros de distintas ciencias pura y aplicadas, cuatro mesas 
        rectangulares, veinticuatros sillas metálicas y dos anaqueles grandes.
        Durante el periodo de direccion de la profesora Soledad medina Corrales se gestiono material bibliografico y 
        moviliario con el fin de brindar major sevicio a los usuarios en diferentes catergorias. Cuenta con mas de
        setecientos libros impresos y donaciones de mas bibliografias por parte de organismo que inciden en el municipio 
       asi como el MINED. Estos ejemplares se fueron agrupando en un salón conocido actualmente como la biblioteca la Merced.</p>
      </ContainerCategories>
  </>
  )
}

export default History
