// import mockNewsData from '../mockNewsData.json';
import NewsItem from './NewsItem';
import NewsItemModel from './utils/NewsItem.model';

    const AllNewsItems = ({ data }) => {

        const allNewsItems = data.map(aNewsItem => {
            const { webTitle, webPublicationDate, webUrl, fields } = aNewsItem;
            const newsItem = new NewsItemModel(webTitle, webPublicationDate, webUrl, fields.thumbnail, fields.bodyText);
            return <NewsItem newsItem={newsItem} key={webUrl} />
        });

    return (
        <>

            <div className="row">

                <ul>
                    <li>{allNewsItems}</li>
                </ul>

            </div>

        </>
    )
};

export default AllNewsItems;
