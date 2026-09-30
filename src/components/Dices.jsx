import { FaDiceOne, FaDiceTwo, FaDiceThree, FaDiceFour, FaDiceFive, FaDiceSix } from "react-icons/fa";
import { Button } from '@heroui/react';
import { useState } from "react";
import { generateRandNr } from "../utils.js"
import { RandomQuote } from "./RandomQuote.jsx";

export default function Dices() {
    const [num, setNum] = useState(1);

    const diceComponents = {
        1:<FaDiceOne size={100}/>,
        2:<FaDiceTwo size={100}/>,
        3:<FaDiceThree size={100}/>,
        4:<FaDiceFour size={100}/>,
        5:<FaDiceFive size={100}/>,
        6:<FaDiceSix size={100}/>
    }

    return (
        <div className="flex items-center flex-col bg-indigo-100 p-3 max-w-3xl m-auto gap-4">
            <h2>Dice roller</h2>
            <div>
                {diceComponents[num]}
            </div>
            <Button  onClick={() => setNum(generateRandNr(1,6))}>Roll dice</Button>
            <RandomQuote num={num}/>
        </div>
    )
}