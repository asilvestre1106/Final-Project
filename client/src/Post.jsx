import {format} from 'date-fns';

export default function Post({title, summary, cover, content, createdAt}) {
    return(
        <div className="post">
            <div className="image">
                <img src="https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022-b.jpg?resize=1098,617" alt="" />
            </div>
            <div className="texts">
                <h2>{title}s</h2>
                <p className="info">
                    <a href="" className="author">Andre Silvestre</a>
                    <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
                </p>
                <p className="summary">{summary}</p>
            </div>
      </div>
    ) 
}