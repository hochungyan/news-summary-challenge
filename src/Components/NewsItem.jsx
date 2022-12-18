const NewsItem = ({ newsItem }) => {
    const { webTitle, webPublicationDate, webUrl, thumbnail } = newsItem;

    return (
  <>
            <a id="top"></a>
            <div className="newsContainer">
            <div class="text-center">
                <div className={webPublicationDate}>
                   
               <a href={webUrl} target="blank"><img className="img-fluid" src={thumbnail} alt="Responsive image" width="600" /></a>
                </div>
               
                <div className="newsBox">
                    <p>{webTitle}</p>
                </div>
                </div>
            </div>
            <div className="space">

            </div>
            <div className ="topLinkContainer">
            <a href="top" className="topLink">Back to Top</a>
            </div>
        </>
    );
};
export default NewsItem;