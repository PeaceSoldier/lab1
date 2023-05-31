import Card from "../SingleCard/Card";
import styled from "./CardsContainer.module.css"

export default function CardsContainer(props) {
    return (
        <div className={styled.wrapper}>
            <h1 className={styled.h1}>Task 3</h1>
            <h3 className={styled.title}>Last products</h3>
            <div className={styled.cardsWrapper}>
                {props.productCards.map((prev) =>
                    <Card key={prev.id} name={prev.name} price={prev.price}/>)
                }
            </div>
        </div>
    )
}