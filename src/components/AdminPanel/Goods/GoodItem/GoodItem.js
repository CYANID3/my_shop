import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGoodInfo} from "../../../../store/actions/goodsAction";

const GoodItem = ({match}) => {
  const {goodItem, isLoaded} = useSelector(state => state.goods);

  // console.log(goodItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoodInfo(match.params.id));
  }, [dispatch, match.params.id]);




  if (isLoaded) {
    return (
        <div>
          <h1>{goodItem.title}</h1>
          <p>Price: {goodItem.price}</p>
          <p>{goodItem.description}</p>
        </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default GoodItem;
