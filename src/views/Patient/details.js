import React, {useState} from 'react';
import { Table, Card, Button, CardHeader,  CardBody,
  CardTitle, CardText, Input, InputGroup, InputGroupAddon, ButtonDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
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
                <S.CardLeft>Felipe da Silva Arraes</S.CardLeft>
                <S.CardRight>
                  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret >
                      Mais
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Alterar</DropdownItem>
                      <DropdownItem>Excluir</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </S.CardRight>
              </S.CardCenter>
            </CardHeader>
            <CardBody>
              <CardTitle>CPF: 00480208263</CardTitle>
              <CardText>Telefone: 92993750971</CardText>
              <CardText>Plano: 01091490343</CardText>
            </CardBody>
          </Card>


          <Card>
            <CardHeader>
              <S.CardCenter>
                <S.CardLeft>Atendimentos</S.CardLeft>
                <S.CardRight>
                  <ButtonDropdown isOpen={dropdownOpenAt} toggle={toggleAt}>
                    <DropdownToggle caret >
                      Filtro
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Hoje</DropdownItem>
                      <DropdownItem>Intervalo entre datas</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </S.CardRight>
              </S.CardCenter>
            </CardHeader>
          </Card>



          <Table hover>
            <thead>
              <tr>
                <th>Nome do médico</th>
                <th>CRM</th>
                <th>Especialidade</th>
                <th>Data/Hora</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark jdhfkjs fjhsdkjfs jfhskdjs</td>
                <td>Otto</td>
                <td>32342</td>
                <td>32342</td>
                <td>
                <ButtonDropdown direction="right">
                  <DropdownToggle caret color="info">Mais</DropdownToggle>
                </ButtonDropdown>
                </td>
              </tr>
              <tr>
                <td>Mark jdhfkjs fjhsdkjfs jfhskdjs</td>
                <td>Otto</td>
                <td>Otto</td>
                <td>32342</td>
                <td>
                  <ButtonDropdown direction="right">
                    <DropdownToggle caret color="info">Mais</DropdownToggle>
                  </ButtonDropdown>        
                </td>
              </tr>
              
            </tbody>
          </Table>

        </S.ContainerCenter>
      </S.Container>
      
    </div>
  );
};

export default Example;