import React, {useState} from 'react';

import Card from './Components/Card/Card'
import styled from 'styled-components'
import {Container} from './styles/sharedStyles'
import {ReactComponent as ReactLogo} from './assets/logo-calindra.svg';

function App() {
const [products, setProducts] = useState([]);
const [favorites, setFavorites] = useState('');
const [loading, setLoading] = useState('');


const [searchProduct, setSearchProduct] = useState('');


const loadProducts = () => {
  setLoading('carregando')
    fetch(`https://cors-anywhere.herokuapp.com/https://store.omelete.com.br/autocomplete/${searchProduct}`)
      .then(response => response.json())
      .then(data => {
        setProducts(data.items)
        setLoading('')
      }).catch(e => {
        setLoading('')
        alert('Nome para busca inválido')
      });
}

const onChange = (ev) => {
  setSearchProduct(ev.target.value)
}

  return (
    <div>
      <div style={{backgroundColor:'#333333', textAlign:'center', height: '100px', marginBottom: '10px', alignItems:'center'}}>
      <ReactLogo style={{width:'200px', height: '100px'}} />
      </div>
        <Container>
        <CenteredDiv>
          <StyledCol>
            <Input type="text" onChange={onChange} />
            <Button onClick={loadProducts}>Buscar</Button>
          </StyledCol>
          <StyledCol style={{float: 'left'}}>
            { 
            loading ==='carregando' ? <Loader class="loader"></Loader>
            :
            <StyledUl>
              {
                products.map(product => 
                    <StyledList  key={product.map.id}>
                      <a target="_blank" href={`https://store.omelete.com.br/${product.map.uri}`}>
                        <span>
                          <StyledImg src={`https://static-store.worldticket.com.br/${product.map['images.url'][0]}`} />
                        </span>
                        <TextDiv>
                          <span className="text">{product.map.name}</span><br />
                          <span className="price">{(product.map.salePrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
                        </TextDiv>
                      </a>
                          <Like title="adicionar a favoritos"style={{float:'right'}} onClick={() => setFavorites((f) => [...f, product.map])}>&#9733;</Like>
                    </StyledList>
                )
              }
            </StyledUl>
  }
          </StyledCol>
        </CenteredDiv>
        <Card products={favorites} />
        
      </Container>
    </div>
  );
}

export default App;

const Loader = styled.div`
  margin-top:10px;
  border: 6px solid #e2e2e2;
  border-radius: 50%;
  border-top: 6px solid #ffbe00;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`
const TextDiv = styled.div`
  white-space: nowrap;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
`


const StyledCol = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
`

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 500px;
  height: 20px;
  padding: 10px 20px;
  font-size: 17px;
  border: 2px solid #ffbe00;
  &:focus{
    border: 2px solid #ffbe00;
    outline: none;
  }
`

const Button = styled.button`
  height: 44px;
  padding: 0px 15px 0px 15px;
  border-radius: 0px 10px 10px 0px;
  border: none;
  background-color: #ffbe00;
  color: black;
  font-size: 17px;
  outline: none;
  &:hover {
    background-color: #d89e00;
  }
`;


const StyledUl = styled.ul`
  list-style-type: none;
  height: auto;
  width: 33%;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding: 0;
`

const StyledList = styled.li`
  width: 86%;
  background: white;
  border: solid 1px #ffe7a5;
  &:hover{
    background-color: #fff6e0;
  }
  a {
    display:flex;
    align-items: top;
    text-decoration: none;
    
  }
  span {
    margin-right: 10px;
  }

  .text {
  font-size: 18px;
  color: black;
  }

  .price {
  font-size: 18px;
  color: #ffbe00;
  font-weight: bolder;
  }
`
const Like = styled.button`
  margin-top: -50px;
  padding: 10px 15px 10px 15px;
  border-radius: 25px;
  outline: none;
  margin-right: 5px;
  border: none;
  background-color: #ffbe00;
    font-weight: bolder;
    font-size: 14px;
  &:hover{
    background-color: #d89e00;
  }

`

const StyledImg = styled.img`
  width:60px;

`