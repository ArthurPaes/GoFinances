import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const FormContainer = styled.div`
 max-width: 1200px;
form{
    background-color: white;
    padding: 64px;
    border-radius: 8px;
    background-origin: padding-box;
    max-width: 1200px;
    margin: 80px auto;
}

form h1{
    font-size: 36px;

}

form fieldset{
    margin-top: 64px;

    border: 0;
}

form legend{
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

form legend h2{
    font-size: 24px;
}

form legend span{
    font-size: 14px;
    color: var(--title-color);
}

form .field {
    flex: 1; /* preenche todo o espaço flex(espaço em branco)*/
    display: flex;
    flex-direction: column;

    margin-bottom: 24px;
}

form .field-group{
    display: flex;

}

form input, form select{
    background-color: #f0f0f5;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;

    border-radius: 8px;

}

form select{
    -webkit-appearance: none;
    -moz-appearance: none;
     appearance: none;
}

form label{
    font-size: 14px;
    margin-bottom: 8px;
}

form .field-group .field + .field{  /* pegar o field que tem um field ao lado(está pegando o segundo fielf, ou seja, o de número e complemento */
    margin-left: 24px;
}

form button{
    width: 260px;
    height: 56px;

    background-color: var(--primary-color);
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 16px;

    border: 0;
    margin-top: 40px;
    transition: background-color 400ms;
}

form button:hover{
    background-color: #2fb86e;

}

.items-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
     gap: 16px;  /*espaçamento entre os items*/
}

.items-grid li{
    background-color: #f5f5f5;
    list-style: none;   /* tira os bullets(padrão do li)*/

    border: 2px solid #f5f5f5;
    border-radius: 8px;

    height: 180px;

    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;

    cursor: pointer;
}

.items-grid li span{
    margin-top: 12px ;
    flex: 1;

    display: flex;
    align-items: center;

    color: var(--title-color);
}

.items-grid li.selected{
    background: #e1faec;
    border: 2px solid #34cb79;
}

.items-grid li img, .items-grid li span{
    pointer-events: none;
}



`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
  text-align: center;
`;

export const ImportFileContainer = styled.section`
  background: #fff;
  margin-top: 40px;
  border-radius: 5px;
  padding: 64px;
`;

export const Footer = styled.section`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 18px;
    color: #969cb3;

    img {
      margin-right: 5px;
    }
  }

  button {
    background: #ff872c;
    color: #fff;
    border-radius: 5px;
    padding: 15px 80px;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff872c')};
    }
  }
`;
