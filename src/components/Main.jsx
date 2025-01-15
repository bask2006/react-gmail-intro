import './main.css';
import ContentNav from './ContentNav';
import Article from './Article';


function Main() {
    return(
        <main className="email-view">
            <ContentNav />
            <Article />
        </main>
    )
}

export default Main