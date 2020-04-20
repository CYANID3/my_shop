import React, {useContext} from 'react';
import {Button, Dropdown, Grid, GridColumn, GridRow, Icon, Image, Search} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {logout} from "../../../store/actions/authAction";
import styled from "styled-components";
import {DashBoardContext} from "../../../containers/Dashboard/Dashboard";

const Header = styled.header`
  padding: 2rem 2rem 2rem 0;
  background: #fff;
`;

const trigger = (
    <span>
    <Image avatar src="https://cdn3.f-cdn.com/contestentries/1211056/27637491/5a39bea42397c_thumb900.jpg" /> John Doe
  </span>
);

const options = [
  { key: 'user', text: 'Аккаунт', icon: 'user' },
  { key: 'settings', text: 'Настройки', icon: 'settings' },
  { key: 'sign-out', text: 'Выйти', icon: 'sign out' },
];



const DashHeader = () => {
  const dispatch = useDispatch();
  const {history, setShow} = useContext(DashBoardContext);

  const onLogout = () => {
    dispatch(logout(history));
  };
  return (
      <Header className="dashboard__header">
        <Grid>
          <GridRow style={{alignItems: 'center'}}>
            <GridColumn tablet={1}>
              <Icon
                  name="bars"
                  color="blue"
                  size="big"
                  className="dashboard__toggle"
                  onClick={() => setShow(true)}
                  style={{cursor: "pointer"}}
              />
            </GridColumn>
            <GridColumn tablet={10}>
              <Search input={{ icon: 'search', iconPosition: 'left' }} />
            </GridColumn>
            <GridColumn textAlign="right" tablet={5}>
              <Dropdown
                  style={{marginRight: '2rem'}}
                  trigger={trigger}
                  options={options}
                  pointing='top left'
                  icon={null}
              />
              <Button color="blue" onClick={onLogout}>Выйти</Button>
            </GridColumn>
          </GridRow>
        </Grid>
      </Header>
  );
};

export default DashHeader;
