  
import { useContext, useState } from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Lesson from './components/content/Lesson';
import {GlobalContext} from './components/context/GlobalData';
import Button from './components/button/Button';

function App() {
 const {allData} = useContext(GlobalContext);

  return (
    <div className="App">
       <Header />
       <Content>
        {allData.map(item => (
          <Lesson key={item.id} lessonName={item.name} lessonHour={item.hour} img={item.image} />

        ))}
        
       </Content>
    </div>
  );
}

export default App;
