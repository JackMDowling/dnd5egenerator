import React, {useState, useEffect, useContext} from "react";
import AppContext from  './context.js'

const CharSheet = () => {
    const { character } = useContext(AppContext)
    if (character) {
        var c = character
    }
    console.log('char here in Character widget ', c)

    if (!character) {
        return null
    } else {
        return (
            <div>
            <h2>{c.name}</h2>
            <h5>{c.gender}  {c.race}  {c.class}</h5>
            <h6>Str: {c.str}</h6>
            <h6>Dex: {c.dex}</h6>
            <h6>Con: {c.con}</h6>
            <h6>Int: {c.int}</h6>
            <h6>Wis: {c.wis}</h6>
            <h6>Cha: {c.cha}</h6>
            <h3>Bond: {c.bond}</h3>
            <h3>Ideal: {c.ideal}</h3>
            <h3>Flaw: {c.flaw}</h3>
        </div>
    )
}

}

export default CharSheet