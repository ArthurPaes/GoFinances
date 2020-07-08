/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState,useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import filesize from 'filesize';
import Input from './input/index';
import Select from './select/index'

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

interface RegisterFormData{
  category: string;
  title: string;
  value: number;
  type: 'income' | 'outcome';

}

const Register: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: RegisterFormData) => {
    try {
      console.log(data)
      await api.post('/transactions', data);
      window.alert("Registered Successfully")

    } catch (error) {
      console.log(error)
    }
  },[])

  return (
    <>
      <Header size="small" />
      <Container>
        <Title>Register a transaction</Title>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <fieldset>
              <legend>
                <h2>Specify the transaction data</h2>
              </legend>
              <div className="field-group">
                <div className="field">
                  <label htmlFor="city">Transaction name</label>
                  <Input type="text" name="title" required />
                </div>
                <div className="field">
                  <label htmlFor="name">Value</label>
                  <Input type="number" name="value" placeholder="" required />
                </div>
              </div>

              <div className="field-group">
                <div className="field">
                  <label htmlFor="address">Category</label>
                  <Input type="text" name="category" required />
                </div>
                <div className="field">
                  <label htmlFor="address2">Transaction type</label>
                  <Select name="type"required>
                    <option value="income">Income</option>
                    <option value="outcome">Outcome</option>
                   </Select>

                </div>
              </div>
            </fieldset>



            <button type="submit">Register</button>
          </Form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Register;
