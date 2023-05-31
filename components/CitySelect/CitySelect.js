import styled from "./CitySelect.module.css"
export default function CitySelect(props) {
    return (
        <div className={styled.wrapper}>
            <h1>Task 4</h1>
            <select className={styled.select} name="" id="cities">
                {props.cities.map((city) => <option key={city.id} value="">{city.name}</option>)}
            </select>
        </div>
    )
}