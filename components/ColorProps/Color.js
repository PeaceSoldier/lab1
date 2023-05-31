import {useState} from "react";
import styled from "./Color.module.css"

export default function Color(props) {
    const [color, setColor] = useState('red');
    return (
        <div className={styled.wrapper}>
            <h1>Task 5</h1>
            <div className={styled.text}>
                This a
                <span style={{color: color}}> {color} </span>
                prop
            </div>
            <select className={styled.select} onChange={(e) => {
                setColor(e.target.value)
            }} name="" id="colors">
                {props.colors.map((color) => <option key={color.id} value={color.color}>{color.color}</option>)}
            </select>
        </div>
    )
}