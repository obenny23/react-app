import './App.css';


import Body from './component/body'
import TabList from './component/tablist'
import { useState } from 'react';

function App() {
  const [active,setactive] = useState(1)
  const tabs =[{
    id : 1,
    title :'Text'
  },
  {
    id : 2,
    title : 'Image'
  },
  {
    id : 3,
    title : 'Video'
  },
  {
    id : 4,
    title : 'Table'
  },
  {
    id : 5,
    title : 'Log In' 
  }
]

const changetab =(id) =>{
  setactive(id)
}
  return (
      <div classname="App">
        <div className="nav-bar">
          <TabList tabs={tabs} activetab={active} ctab ={changetab}/>
        </div>
        <div className="main-body">
          <Body activetab ={active}/>
        </div>
      </div>
    );
  }

export default App;
