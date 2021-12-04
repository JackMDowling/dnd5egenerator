import React, {useState, useEffect, useContext} from "react";
import AppContext from  './context.js'

const CharSheet = () => {
    const { character } = useContext(AppContext)
    if (character) {
        var c = character
    }
    console.log('char here in Character widget ', c)

    if (!character) {
        return <div></div>
    } else {
        return (
            <div>
             <div id="centerText">
            <h3>{c.name}</h3>
            <h4>{c.gender}    {c.race}    {c.class}</h4>
            <h5>Str: {c.str}   Dex: {c.dex} Con:   {c.con}</h5>
            <h5>Int: {c.int}   Wis: {c.wis}   Cha: {c.cha}</h5>
            </div>
            <h5>Bond: {c.bond}</h5>
            <h5>Ideal: {c.ideal}</h5>
            <h5>Flaw: {c.flaw}</h5>
        </div>
    )
}

}

export default CharSheet