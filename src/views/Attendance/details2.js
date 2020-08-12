import React, {useState} from 'react';
import { Table, Card, Button, CardHeader,  CardBody,
  CardTitle, CardText, Input, Label, Row, Col, FormGroup, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import * as S from './styles';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [dropdownOpenAt, setOpenAt] = useState(false);
  const toggleAt = () => setOpenAt(!dropdownOpenAt);
  return (
    <div>
      <S.Container>
        <S.ContainerCenter>
          <Card>
            <CardHeader>
              <S.CardCenter>
                <S.CardLeft>Paciente: Felipe da Silva Arraes</S.CardLeft>
                <S.CardBodyCenterRight>Médico: Fernanda Castro Arruda Tavares</S.CardBodyCenterRight>
              </S.CardCenter>
            </CardHeader>
            <CardBody>
              <S.CardBodyCenter>
                <S.CardBodyCenterLeft>
                  <CardText>CPF: 00480208263</CardText>
                  <CardText>Telefone: 92993750971</CardText>
                  <CardText>Plano: 01091490343</CardText>
                </S.CardBodyCenterLeft>
                <S.CardBodyCenterRight>
                  <CardText>CRM: 4232</CardText>
                  <CardText>Especialidade: 92993750971</CardText>
                  <CardText>Data/Hora do atendimento: 11/08/2020 - 16:30</CardText>
                </S.CardBodyCenterRight>
              </S.CardBodyCenter>
            </CardBody>
          </Card>


          <Card>
            <CardHeader>
              <S.CardCenter>
                <S.CardLeft>Atendimento</S.CardLeft>
                <S.CardRight>
                </S.CardRight>
              </S.CardCenter>
            </CardHeader>
            <CardBody>

              <Row>
                <Col sm="6">
                  <Card body>
                    <CardTitle>História da doença atual (HDA)</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  </Card>
                </Col>
                <Col sm="6">
                  <Card body>
                    <CardTitle>História Patológica Pregressa (HPP)</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                  </Card>
                </Col>
              </Row>

              <S.Space>
                <Row>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Histórico Familiar (HF)</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body>
                      <CardTitle>Relatório</CardTitle>
                      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>                    </Card>
                  </Col>
                </Row>
              </S.Space>

              
            </CardBody>
          </Card>


        </S.ContainerCenter>
      </S.Container>
      
    </div>
  );
};

export default Example;