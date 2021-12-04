import React, {useState, useEffect} from "react";
import data from "./data/data.js";
import ideals from "./data/ideals.js";
import flaws from "./data/flaws";
import bonds from "./data/bonds.js";
import AppContext from './context.js';
import maleFirstNames from "./data/malFirst.js";
import femFirstNames from "./data/femFirst.js";
import surnames from "./data/surname.js";
import CharSheet from "./Character.jsx";


const App = () => {
    const [character, setCharacter] = useState();
    const rollTheBones = (min, max) => {
        let arr = []
        var one = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(one)
        var two = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(two)
        var three = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(three)
        var four = Math.floor(Math.random() * (max - min + 1) + min)
        arr.push(four)
        const small = Math.min(...arr)
        let index = arr.indexOf(small)
        arr.splice(index, 1)
        let roll = arr[0] + arr[1] + arr[2]
        return roll;
    }

    const generateCharacter = () => {
        // Class, Race, Alignment
        var dndclass = data.classes[Math.floor(Math.random()*data.classes.length)];
        var race = data.races[Math.floor(Math.random()*data.races.length)];
        var alignment = data.alignment[Math.floor(Math.random()*data.alignment.length)];
        // Stats
        var str = rollTheBones(1, 6);
        var dex = rollTheBones(1, 6);
        var con = rollTheBones(1, 6);
        var int = rollTheBones(1, 6);
        var wis = rollTheBones(1, 6);
        var cha = rollTheBones(1, 6);
        // Gender and Name
        let genderRand = ['Male', 'Female', 'Non-Binary']
        let name = ''
        var gender = genderRand[Math.floor(Math.random() * genderRand.length)];
        if (gender === 'Male') {
             name = maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)];
        } else {
             name = femFirstNames[Math.floor(Math.random() * femFirstNames.length)]
        }
        let surname = surnames[Math.floor(Math.random() * surnames.length)]
        name = name + " " + surname
        // Ideals, Bonds, and Flaws
        let i = Math.floor(Math.random() * (78 - 1 + 1) + 1) 
        const ideal = ideals[i];
        i = Math.floor(Math.random() * (78 - 1 + 1) + 1) 
        const bond = bonds[i];
        i = Math.floor(Math.random() * (78 - 1 + 1) + 1) 
        const flaw = flaws[i];

        const character = {
            class: dndclass,
            race: race,
            alignment: alignment,
            gender: gender,
            name: name,
            str: str,
            dex: dex,
            con: con,
            int: int,
            wis: wis,
            cha: cha,
            ideal: ideal,
            bond: bond,
            flaw: flaw,
        }
        setCharacter(character)
    }
    console.log(character)

    return (
        <AppContext.Provider value={{character}}>
        <div>
        <h2>DnD Character Generator</h2>
        <div id="explanation"></div>
        <div id="characterSheet">
            <CharSheet key={1} />
        </div>
        <button onClick={generateCharacter}>Generate Character</button>
        </div>
        </AppContext.Provider>
    )
}

export default App