import React, {useEffect,useContext} from 'react'
import Header from '../Header';
import { exportData  } from './dataAuthors';
import '../../Css/estiloAuthors.css';
import { CRMContext } from '../../Context/Provider';

const Authors = () => {

  const data = exportData();

  const { verifyStatus } = useContext(CRMContext)

  useEffect(() => {
    verifyStatus(true)
  }, [verifyStatus])

  return (
    <>
    <Header/>
      <div className="container-authors">
        <div className="col-12 p-2 row elements-card">
         {data.map((item) => (
           <div className="col-sm-5 col-md-4 col-lg-4 element-card" key={`data-${item.key}`}>
          
               <div className="card image-author">
                 <img src={item.image} alt="" />
                 <div className="card-text">
                 <p>{ item.names }</p>
                 </div>
               </div>
                 <div className="card-footer">{ item.descriptions }</div>
          
           </div>
         ))}
        </div>
      </div>
    </>
  )
}
 
export default Authors
