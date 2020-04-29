import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Button, Dimmer, Form, Loader} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
import {categoryAdded} from "../../../../../store/actions/goodsAction";

const AddCategory = () => {

  const initialValue = useMemo(() => {
    return {
      title: '',
      description: '',
      alias: ''
    }
  }, []);

  const fileInputRef = useRef();
  const [value, setValue] = useState({...initialValue});
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const {loading, isLoaded} = useSelector(state => state.goods);

  const onChangeHandler = e => {
    const {name, value} = e.target;

    setValue(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  };

  const onFileChangeHandler = e => {
    const files = e.target.files;

    for (let file of files) {
      setImages(prev => [...prev, file])
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();

    dispatch(categoryAdded(images, {...value}));
  };

  useEffect(() => {
    if (isLoaded) {
      setValue({...initialValue});
      setImages([]);
    }
  }, [isLoaded, initialValue]);

  if (loading) {
    return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
    )
  }


  return (
      <Form onSubmit={onSubmitHandler}>
        <Form.Field>
          <label htmlFor="title">Имя категории</label>
          <input
              type="text"
              placeholder="Имя категории"
              name="title"
              id="title"
              value={value.title}
              onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="alias">Псевдоним категории</label>
          <input
              type="text"
              placeholder="Укажите Псевдоним без пробелом и латиницей"
              name="alias"
              id="alias"
              value={value.alias}
              onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <Button
              icon="image"
              labelPosition='left'
              content="Выбрать картинку"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current.click()
              }}
          />
          <input
            ref={fileInputRef}
            type="file"
            hidden
            multiple
            onChange={onFileChangeHandler}
          />
          {
            images.length > 0 ? (
                <ul>
                  {images.map(image => <li key={image.name}>{image.name}</li>)}
                </ul>
            ) : null
          }
        </Form.Field>
        <Form.Field>
          <label htmlFor="description">Описание категории</label>
          <Form.TextArea
              placeholder="Описание категории"
              name="description"
              id="description"
              value={value.description}
              onChange={onChangeHandler}
          />
        </Form.Field>
        <Form.Field>
          <Button color="teal">Создать категорию</Button>
        </Form.Field>
      </Form>
  );
};

export default AddCategory;
