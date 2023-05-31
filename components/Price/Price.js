import styled from "./Price.module.css"

export default function Price(props) {
    return (
        <div className={styled.price}>
            $ {props.price}
        </div>
    )
}