import { useState,useEffect } from "react";

const App=()=> {
  const [data, setData] = useState(null);

  useEffect(() => {
             setTimeout(() => {
               setData({})
            }, 100)
       }, [])
  
       return (
    <div>
      
      {data && <div style={{color: 'red'}}>data</div>}
          <h1>Hello world</h1>
          <button >click me</button>
          <input  type="text" placeholder="input value....."/>
    </div>
  );
}

export default App;
