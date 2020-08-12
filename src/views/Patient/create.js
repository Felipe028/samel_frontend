import React from 'react';
import { Jumbotron, Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import * as S from './styles';

const Example = (props) => {
  return (
    <S.Container>
      <Jumbotron>
        <h4 className="display-5">Cadastro de pacientes</h4>
        <hr className="my-1" />
            <Form>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplename">Nome</Label>
                        <Input type="text" name="nome" id="examplename" placeholder="João Teixeira da Silva" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplecpf">CPF</Label>
                        <Input type="text" name="cpf" id="examplecpf" placeholder="1234567890" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplefone">Telefone</Label>
                        <Input type="text" name="telefone" id="examplefone" placeholder="92993750971" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="exampleplano">Plano</Label>
                        <Input type="text" name="plano" id="exampleplano" placeholder="123456" />
                    </FormGroup>
                    </Col>
                </Row>
                
                <Button color="primary">Cadastrar</Button>
                
            </Form>
      </Jumbotron>
    </S.Container>
  );
};
export default Example;