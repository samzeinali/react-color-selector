import { useState } from 'react'
import Box from './components/Box';
import Selector from './components/Selector';

function App() {
  const [Value, setValue] = useState("");
  const [Color, setColor] = useState("");
  const [Colors, setColors] = useState(["red", "green", "yellow", "gray"]);
  return (
    <div>
      <Selector value={Value} colors={Colors} onChangeDate={(Value) => { setValue(Value); setColor(Value) }} />
      <Box boxcolor={Color} />
    </div>
  )
}

export default App;
