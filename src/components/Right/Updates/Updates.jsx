import { useState, useEffect } from 'react';
import './Updates.css'
import {UilNewspaper, UilStopCircle, UilServerConnection} from "@iconscout/react-unicons"

import Truncate from 'react-truncate';

const Updates = () => {
  // const {data} = useNewApi();

  const [count, setCount] = useState(0);

  function addCount () {
    setCount(prevCount => prevCount + 1);
  }
  function resetCount (){
    setCount(0);
  }

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(0);

    const queries = ['business', 'investing', 'ai', 'tech']


    const catenewsheadlinesurl = 'http://newsapi.org/v2/top-headlines?q=' + queries[category] + '&country=us&category=business&language=en&pageSize=30&apiKey=3094d12201084bda8a6094cd0d4de114'
    
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(catenewsheadlinesurl)
          const json = await response.json();
          setData(json);
        } catch (err) {
          setError(err);
          console.log(err);
        }
        setLoading(false);
      };
      fetchData();
    }, [category]);

  const updateData = data ? <NewsContent /> : <ErrorContent />


  function NewsContent() {
    if (count == data.articles.length) {
      resetCount();
    }
    const articleSource = !data ? "loading..." : data.articles[count].source.name
    const articleImg = !data ? "loading..." : data.articles[count].urlToImage
    const articleTitle = !data ? "loading.." : data.articles[count].title
    const articleDescription = !data ? "loading..." : data.articles[count].content
    const articleLink = !data ? "loading..." : data.articles[count].url
    const articleAuthor = !data ? "loading..." : data.articles[count].author
    const articleDate = data.articles[count].publishedAt.substring(0,10)

    const namedAuthor = articleAuthor ? articleAuthor : articleSource;

    return (
      <div className="Updates">
        <div className="update">
          <div className="news--top">
            <UilNewspaper className='news--icon' />
            <span className='news--top--title'>Top news</span>
          </div>
          <div className="author--details">
            <img src={articleImg} alt="" />
            <span className="author--source muted-text">{articleSource}</span>
          </div>
  
          <div className="news--content">
            <span className='news--headline' >
              <span>{articleTitle}</span>
            </span>
            <br />
              <span className='author'>Author </span>
              <span className="muted-text bold-dark">{namedAuthor}</span>
            <br />
            <div>
              <Truncate lines={4} ellipsis={<span>...</span>} className='news--description' >

                <span>{articleDescription}</span>

              </Truncate>
            </div>

            <span><a href={articleLink} target="_blank">Read more...</a></span>

            <br />
            
          </div>
        </div>
            <span className="muted-text article--time">{articleDate}</span>
            <button onClick={addCount} className="news--button">next</button>
      </div>
    )
  }



    return (
        <>
          {updateData}
        </>
      );
}

export default Updates


function ErrorContent() {
      return (
        <div className="news--error glass">
              <UilServerConnection className='danger--sign' />
              <span className='title-bold'>Error loading news</span>
              <span>Check your internet connection</span>
        </div>
      )
}