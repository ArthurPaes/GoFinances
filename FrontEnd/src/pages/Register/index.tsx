/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import filesize from 'filesize';
import Input from './input/index';

import Header from '../../components/Header';
import FileList from '../../components/FileList';
import Upload from '../../components/Upload';
import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';

import {
  Container,
  Title,
  ImportFileContainer,
  Footer,
  FormContainer,
} from './styles';

import alert from '../../assets/alert.svg';
import api from '../../services/api';

interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

const Register: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Cadastrar uma transação</Title>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <h2>Especifique os dados transação</h2>
              </legend>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="city">Nome da transação</label>
                  <Input type="text" name="transaction" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Valor</label>
                  <Input type="number" name="valor" placeholder="" required />
                </div>
              </div>

              <div className="field-group">
                <div className="field">
                  <label htmlFor="address">Categoria</label>
                  <Input type="text" name="category" required />
                </div>
                <div className="field">
                  <label htmlFor="address2">Data</label>
                  <Input type="text" name="data" required />
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend>
                <h2>Tipo</h2>
              </legend>

              <div className="items-grid">
                <li data-id="Income">
                  <img src={income} alt="Income" />
                  <span>Income</span>
                </li>
                <li data-id="Outcome">
                  <img src={outcome} alt="Pilhas e Baterias" />
                  <span>Outcome</span>
                </li>
              </div>
            </fieldset>

            <button type="submit">Cadastrar</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
