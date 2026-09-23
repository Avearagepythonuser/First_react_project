import './App.css'
import { Counter } from './components/Counter';
import Dices from './components/Dices';
import { Programs } from './components/programs';
import { ButtonGroup, Button } from '@heroui/react';
import { useState } from "react"
import { MyTodos } from './components/MyTodos';


function App() {

  const [selected, setSelected] = useState(null)

  //const nap = "kedd";
  //const num = 11;
  return (
    <>
      <h1 className='text-center font-bold text-blue-600 m-auto'>Hello world</h1>
      {/*<p>Ma {nap} van</p>
      <p>A szám {num % 2 == 0 ? "páros" : "páratlan"}</p>*/}
      <div className='flex flex-col items-center gap-10 p-10'>
        <ButtonGroup variant="primary">
          <Button onClick={()=>setSelected("counter")}>Counter</Button>
          <Button onClick={() => setSelected("dice")}>
            <ButtonGroup.Separator />
            Dice Roller
          </Button>
          <Button onClick={() => setSelected("programs")}>
            <ButtonGroup.Separator />
            Programs
          </Button>
        </ButtonGroup>
        <Button onClick={() => setSelected("todo")}>Tudo</Button>
      </div>
      
      {selected == "counter" && <Counter/>}
      {selected == "dice" && <Dices/>}
      {(selected == "programs" || !selected) && <Programs/>}
      {selected == "tudo" && <MyTodos/>}
    </>
  )
}

export default App
