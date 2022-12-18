import './App.css';
import Header from "./Components/Header"
import Loading from "./Components/Loading"
import Footer from "./Components/Footer";
import AllNewsItems from './Components/AllNewsItems.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    try {
       const response = await axios.get(process.env.REACT_APP_NEWSAPIURL);
      console.log(response);
      console.log(response.data.results);
      (response.data.response.results.length ? setData(response.data.response.results) : new Error(`Cannot find any news right now`));
      
    }
    catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 1000)

  }, []);


return (
   <main>
  {data.length === 0 ? <h5> <Header/><Loading/><div class="text-center"> Website is loading!</div></h5> :
<>
 <div class="container-fluid">
  <header>
    <Header />
     <AllNewsItems data={data}/> 
  </header>
  
<footer>
    <Footer />
  </footer>


</div >
</>
}
</main>

);

}


export default App; 
