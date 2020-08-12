import React from 'react';
import { Jumbotron, Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import * as S from './styles';

const Example = (props) => {
  return (
    <S.Container>
      <Jumbotron>
        <h4 className="display-5">Agendamento</h4>
        <hr className="my-1" />
            <Form>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplecpf">CPF do paciente</Label>
                        <Input type="text" name="cpf" id="examplecpf" placeholder="00480264382" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="examplecrm">CRM do Médico</Label>
                        <Input type="text" name="crm" id="examplecrm" placeholder="1234" />
                    </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={12}>
                    <FormGroup>
                        <Label for="exampledata">Data do atendimento</Label>
                        <Input type="date" name="date1" id="exampleDate1" placeholder="date placeholder" />
                        <Label for="exampleTime">Hora</Label>
                        <Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
                    </FormGroup>
                    </Col>
                </Row>
                
                <Button color="primary">Agendar</Button>
                
            </Form>
      </Jumbotron>
    </S.Container>
  );
};
export default Example;