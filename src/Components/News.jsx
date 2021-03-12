import React, { useState, useEffect } from 'react'

import Header from './Header';

import axios from 'axios';
import '../Css/estiloNews.css';
import Spinner from '../Styled/Spinner';

const News = () => {

  const key = 'b62c656d544d4e6185cae5efc185ee35';
  let url = `https://newsapi.org/v2/everything?sortBy=popularity&language=es&apiKey=${key}`;

  const [news,setNews] = useState("")
  const [status,setStatus] = useState(true); 
  const [category, setCategory] = useState("general");

  useEffect(() => {

    if(status){
      let consultarNews = async () => {
        let data = await axios(`${url}&q=futbol`);
        console.log(data.data.articles.source);
        setNews(data.data.articles);
      }
      consultarNews();
      setStatus(false)
    }

  },[url,status,category]);

  const changeCategory = (e) => {
    setCategory(e.target.id);
    console.log(e.target.textContent)
  }

  return (
    <>
      <Header />
    { (!news) ? (<Spinner/>) : (
        
        <>
          <div className=" section-news">
            <div className="container-categories">


                <div onClick={changeCategory} id="business">
                  <p>Negocios /</p>
                <ul>
                  <li>Futbol</li>
                  <li>Baloncesto</li>
                  <li>Beisbol</li>
                </ul>
                </div>
                <div onClick={changeCategory} id="entertainment">
                  <p>Entretenimiento /</p>
                </div>
                <div onClick={changeCategory} id="general">
                  <p>General /</p>
                </div>
                <div onClick={changeCategory} id="healths">
                  <p>Salud /</p>
                </div>
                <div onClick={changeCategory} id="cience">
                  <p>Ciencia /</p>
                </div>
                <div id="sports">
                  <p>Deportes /</p>
                  <ul>
                  <li  onClick={changeCategory}>Futbol</li>
                  <li  onClick={changeCategory}>Baloncesto</li>
                  <li  onClick={changeCategory}>Beisbol</li>
                  </ul>
                </div>
                <div onClick={changeCategory} id="technology">
                  <p>Tecnologia</p>
                </div>
              

            </div>
          </div>
          <div className="container-news">
            <div className="col-12 row p4 center-news">
              {news.map((item, index) => (
                <div className="col-sm-5 col-md-4 col-lg-3" key={`data-${index}`}>
                  <div className="card">
                    <img src={item.urlToImage} alt="" />
                    <div className="card-text">{item.source.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </>)
    }
    </>
  )
}

export default News
