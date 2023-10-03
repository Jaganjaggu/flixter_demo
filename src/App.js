import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import request from './request';
import Row from './component/Row';

function App() {
  return (
  <>
    <Header/>
    <Banner  fetchUrl={request.fetchNetflixOriginals} />
    <Row isPoster={true} title="Top Rated" fetchUrl={request.fetchTopRated}/>
  </>
  );
}

export default App;