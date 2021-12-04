import React, {useState, useEffect, useContext} from "react";
import AppContext from  './context.js'

const SavedChar = () => {
    const { savedChar } = useContext(AppContext)
    if (savedChar) {
        var c = savedChar
    }

    if (!savedChar) {
        return <div></div>
    } else {
        return (
            <div>
                <div id="centerText">
            <h3>{c.name}</h3>
            <h4>{c.alignment}    {c.gender}    {c.race}    {c.class}</h4>
            <h5>Str: {c.str}   Dex: {c.dex} Con:   {c.con}</h5>
            <h5>Int: {c.int}   Wis: {c.wis}   Cha: {c.cha}</h5>
            </div>
            <h5>Bond: {c.bond}</h5>
            <h5>Ideal: {c.ideal}</h5>
            <h5>Flaw: {c.flaw}</h5>
            <p>{c.story}</p>
        </div>
    )
}

}

export default SavedChar