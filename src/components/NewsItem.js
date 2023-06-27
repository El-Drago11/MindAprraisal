
import React from 'react'
import "../CSS/NewsItem.css"

const NewsItem = (props) => {
        //props
        let {title, description,Imagedata, newsUrl,author , publishedAt} = props;

        return (
            <div>
                <div className="card">
                    <img src={Imagedata} className="card-img-top" alt="" style={{width: "auto" , height:"200px"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{title}.....</h5>
                            <p className="card-text">{description}.....</p>
                            <a href={newsUrl} className="btn btn-primary">Read Full Article</a>
                            <p className="card-text my-2"><strong className="text-muted">Author : {author} </strong></p>
                            <p className="card-text"><strong className="text-muted">Date : {publishedAt} </strong></p>
                        </div>
                </div>
            </div>
        )
    }

export default NewsItem;
