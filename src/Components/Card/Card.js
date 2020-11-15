import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import {Col} from '../../styles/sharedStyles'



function FavoritesCard(props) {
const [favorites, setFavorites] = useState([]);

useEffect(() => {
if(props.products !== ""){
    setFavorites(props.products)  

}
}, [props]);

  return (
      <div>
        {props.products !== "" ?
        <div>
        <Hr />
        <H2>&#9733; <span>Favoritos</span></H2>
         {
             favorites.map(f => 
                <Col mb='12' dt='2' key={f.id}>
                    <Card onClick={() => window.open(`https://store.omelete.com.br/${f.uri}`)}>
                        <CardTitle >{f.name}</CardTitle>
                        <CardImage src={`https://static-store.worldticket.com.br/${f['images.url'][0]}`} />
                        <Price>{(f.salePrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Price>
                    </Card>
                </Col>
             )
         }
         </div>
        : null }
      </div>
  );
}

export default FavoritesCard;

const Hr = styled.hr`
  border: 1px solid  #FFBE00;
  background:  #FFBE00;
`;
const H2 = styled.h2`
  color:  #FFBE00;
  span {
    color:black;
  }
`;

const Price = styled.p`
  font-weight: bolder;
  color:  #FFBE00;
  font-size: 18px;
`;


const Card = styled.div`
  cursor: pointer;
  display:flex;
  background: white;
  flex-direction: column;
  align-items: center;
  padding: 15px 0px 15px 0px;
  width: 100%;
  border: 2px solid #FFBE00;
  &:hover {
    box-shadow: 4px 4px 10px #898989;
  }
  height: 250px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  margin: 0px 0px 15px 0px;

`;

const CardImage = styled.img`
  width: 6rem;
  margin: 0px 0px 15px 0px;
`;