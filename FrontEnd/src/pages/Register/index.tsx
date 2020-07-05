import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import filesize from 'filesize';

import { findByLabelText } from '@testing-library/react';
import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';

import { Container, Title, ImportFileContainer, Footer, FormContainer } from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Register: React.FC = () => {






  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastrar uma transação</Title>

          <FormContainer>
          <form action="/savepoint" method="post">
          <fieldset>
            <legend>
              <h2>Especifique os dados transação</h2>
            </legend>
            <div className="field-group">
              <div  className="field">
                <label htmlFor="city">Nome da transação</label>
                <input type="text" name="city" required />
              </div>
              <div className="field" >
                <label htmlFor="name">Valor</label>
                <input type="number" name="image" placeholder="" required />
              </div>
            </div>

            <div className="field-group">
            <div className="field">
                <label htmlFor="address">Categoria</label>
                <input type="text" name="address" required />
            </div>
            <div className="field">
                <label htmlFor="address2">Data</label>
                <input type="text" name="address2" required />

            </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Tipo</h2>
            </legend>

            <div className="items-grid">
            <li data-id="Income">
                {/* <img src=" /icones/lampadas.svg" alt="Lampadas" /> */}
                <span>Income</span>
            </li>
            <li data-id="Outcome">
                {/* d<img src="/icones/baterias.svg" alt="Pilhas e Baterias" /> */}
                <span>Outcome</span>
            </li>
            </div>
          </fieldset>
          </form>
          </FormContainer>

          <Footer>
            <p>
              <img src={alert} alt="Alert" />

            </p>
            <button  type="submit">
              Cadastrar
            </button>
          </Footer>

      </Container>
    </>
  );
};

export default Register;
