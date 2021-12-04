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
            <h3>{c.name}</h3>
            <h5>{c.gender}    {c.race}    {c.class}</h5>
            <h6>Str: {c.str}   Dex: {c.dex} Con:   {c.con}</h6>
            <h6>Int: {c.int}   Wis: {c.wis}   Cha: {c.cha}</h6>
            <h5>Bond: {c.bond}</h5>
            <h5>Ideal: {c.ideal}</h5>
            <h5>Flaw: {c.flaw}</h5>
            <p>{c.story}</p>
        </div>
    )
}

}

export default SavedChar