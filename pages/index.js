import CardsContainer from "@/components/CardsContainer/CardsContainer";
import Table from "@/components/Table/Table";
import Product from "@/components/Product/Product";
import CitySelect from "@/components/CitySelect/CitySelect";
import Color from "@/components/ColorProps/Color";


export default function Home() {

  const productProp = {name: 'ProductProp'}
  const productCards = [
    {
      id: 1,
      name: 'Some text for description',
      price: 1000
    },
    {
      id: 2,
      name: 'Some text for description',
      price: 2000
    },
    {
      id: 3,
      name: 'Some text for description',
      price: 3000
    },
    {
      id: 4,
      name: 'Some text for description',
      price: 4000
    },
    {
      id: 5,
      name: 'Some text for description',
      price: 5000
    },
  ];

  const cities = [
    {
      id: 1,
      name: 'Kyiv',
    },
    {
      id: 2,
      name: 'Lviv',
    },
    {
      id: 3,
      name: 'Dnepr',
    },
  ];
  const colors = [
    {
      id: 1,
      color: 'black'
    },
    {
      id: 2,
      color: 'green'
    },
    {
      id: 3,
      color: 'red'
    },
    {
      id: 4,
      color: 'yellow'
    },
    {
      id: 5,
      color: 'purple'
    },
  ];

  return (
    <>
      <Table/>
      <Product product={productProp}/>
      <CardsContainer productCards={productCards}/>
      <CitySelect cities={cities}/>
      <Color colors={colors}/>
    </>
  )
}
