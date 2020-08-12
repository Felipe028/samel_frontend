import React from 'react';
import { Jumbotron, Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import * as S from './styles';

const Example = (props) => {
  return (
    <S.Container>
      <Jumbotron>
        <h4 className="display-5">Cadastro Médico</h4>
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
                        <Label for="examplecrm">CRM</Label>
                        <Input type="text" name="crm" id="examplecrm" placeholder="1234" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="exampleespecialidade">Especialidade</Label>
                        <Input type="text" name="telefone" id="examplefone" placeholder="Cardiologista, Neurologista, etc..." />
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