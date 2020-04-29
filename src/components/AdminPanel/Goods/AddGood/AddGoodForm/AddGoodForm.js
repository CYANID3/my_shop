import React, {useContext, useState} from 'react';
import {useDispatch} from "react-redux";
import {addGood} from "../../../../../store/actions/goodsAction";
import {Button, Form, FormField, TextArea} from "semantic-ui-react";
import {DashBoardContext} from "../../../../../containers/Dashboard/Dashboard";

const AddGoodForm = () => {
  const [value, setValue] = useState({
    title: '',
    price: '',
    description: ''
  });

  const {history} = useContext(DashBoardContext);

  const dispatch = useDispatch();

  const onChangeHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setValue(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    const good = {
      title: value.title,
      price: parseInt(value.price, 10),
      description: value.description
    };

    dispatch(addGood(good, history));

  };

  return (
      <Form onSubmit={onSubmitHandler}>
        <FormField>
          <label>Title</label>
          <input placeholder='Название товара' name="title" onChange={onChangeHandler} />
        </FormField>
        <Form.Field>
          <label>Price</label>
          <input placeholder='Цена товара' name="price" type="number" onChange={onChangeHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Описаник</label>
          <TextArea placeholder='Описание товара' name="description" onChange={onChangeHandler} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
  );
};

export default AddGoodForm;
