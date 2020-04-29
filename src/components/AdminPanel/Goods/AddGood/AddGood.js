import React from 'react';
import AddGoodForm from "./AddGoodForm/AddGoodForm";
import AddCategory from "./AddCategory/AddCategory";
import DashModule from "../../../UI/DashModule/DashModule";
import {Grid} from "semantic-ui-react";

const AddGood = () => {

  return (
      <Grid>
        <Grid.Column width={10}>
          <DashModule title="Добавить товар">
            <AddGoodForm/>
          </DashModule>
        </Grid.Column>
        <Grid.Column width={6}>
          <DashModule title="Добавить категорию">
            <AddCategory/>
          </DashModule>
        </Grid.Column>
      </Grid>
  );
};

export default AddGood;
