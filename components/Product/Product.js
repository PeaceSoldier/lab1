import styled from "./Product.module.css"

export default function Product(props) {
    return (
        <div className={styled.wrapper}>
            <h1>Task 3</h1>
            <div className={styled.product}>
                I'm a <span className={styled.prop}>{props.product.name}</span>
            </div>
        </div>
    )
}