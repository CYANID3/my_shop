import React, {useEffect, useState} from 'react'
import {Button, Dimmer, Form, Grid, Header, Loader, Segment} from 'semantic-ui-react';
import {useDispatch, useSelector} from "react-redux";
import {userAuth} from "../../store/actions/authAction";


const Login = ({history}) => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth, loading} = useSelector(state => (state.auth));

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    dispatch(userAuth(email, password));
  };

  useEffect(() => {
    if (isAuth) history.push('/dashboard');
  }, [isAuth, history]);

  if (loading) {
    return (
        <Dimmer active>
          <Loader />
        </Dimmer>
    )
  }

  return (
      <Grid textAlign='center' style={{height: '30%', paddingTop: '15%'}} verticalAlign='middle'>
        <Grid.Column style={{maxWidth: 450}}>
          <Header as='h2' color='teal' textAlign='center'>
            Форма авторизации
          </Header>
          <Form size='large' onSubmit={onSubmit}>
            <Segment stacked>
              <Form.Input
                  fluid icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  name="username"
                  value={email}
                  onChange={e => setUsername(e.target.value)}
              />
              <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
              />

              <Button color='teal' fluid size='large'>
                Войти
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
  );
};

export default Login
