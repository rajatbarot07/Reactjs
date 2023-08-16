import { createContext } from 'react';
import './App.css';
import ContextAPI1 from './Component/Context API/ContextAPI1';
import Props from './Component/Props/Props';
import State from './Component/useState/State';
import UseCallback from './Component/useCallback/UseCallback';
import UseContexthook1 from './Component/useContextHook/UseContexthook1';
import Usememo from './Component/useMemo/Usememo';
import UseRef from './Component/useRef/useRef';
import Child from './Component/Child to Parent/child';
import List from './Component/ListRendering/list';
import MapFilterReduce from './Component/MapFilterReduce/mapFilterReduce';
import This from './Component/ThisKeyword/this'
import Closure from './Component/Closures/Closure';
import CallApplyBind from './Component/CallApplyBind/callApplyBind';
import Promise from './Component/Promise/Promise';

const data = createContext();
const data1 = createContext();
function App() {
  const name = "Rajat";
  const field = "React";

  const getData = (data) =>{
    console.log(data);
  }

  return (
    <>
      {/* <Props Pname="React" />
      <Props Pname="Javascript" />
      <Props Pname="HTML" /> */}
      {/* <State/> */}
      {/* <UseRef/> */}
      {/* <data.Provider value={name}>
        <data1.Provider value={field}>
          {/* <ContextAPI1 /> 
          <UseContexthook1/>
        </data1.Provider>
      </data.Provider> */}
      {/* <Usememo/> */}
      {/* <UseCallback/> */}
      {/* <Child getData={getData}/> */}
      {/* <List/> */}
      {/* <MapFilterReduce/> */}
      {/* <This/> */}
      {/* <Closure/> */}
      {/* <CallApplyBind/> */}
      <Promise/>
    </>
  );
}

export default App;
export { data, data1 };
