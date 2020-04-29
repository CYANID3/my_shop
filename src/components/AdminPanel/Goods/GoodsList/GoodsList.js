import React from 'react';
import {Icon, Table} from "semantic-ui-react";
import {Link} from "react-router-dom";

const GoodsList = ({goods, match}) => {
  return (
      <div className="goods__list">
        <h2>Список товаров</h2>
        <div className="responsive-table">
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={1}>#</Table.HeaderCell>
                <Table.HeaderCell width={9}>Название товара</Table.HeaderCell>
                <Table.HeaderCell width={4}>Цена товара</Table.HeaderCell>
                <Table.HeaderCell width={2}>Редактировать</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {goods.map( (good, index) => {
                return (
                    <Table.Row key={good.id}>
                      <Table.Cell>{index + 1}</Table.Cell>
                      <Table.Cell>{good.title}</Table.Cell>
                      <Table.Cell>{good.price}</Table.Cell>
                      <Table.Cell>
                        <Link to={`${match.path}/edit/${good.id}`}><Icon name="edit"/> Редактировать</Link>
                      </Table.Cell>
                    </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>

      </div>
  );
};

export default GoodsList;
