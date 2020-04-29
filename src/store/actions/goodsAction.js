import * as actionTypes from './actionTypes';
import {firestore} from "../../config/fbConfig";
import {uploadUrls} from "../../helpers/uploadFiles";

const goodsRequest = () => ({type: actionTypes.GOODS_REQUEST});
const goodsSuccess = data => ({type: actionTypes.GOODS_SUCCESS, data});
const goodInfoSuccess = data => ({type: actionTypes.GOOD_INFO_SUCCESS, data});
const goodsSFailure = error => ({type: actionTypes.GOODS_FAILURE, error});

const categoryRequest = () => ({type: actionTypes.CATEGORY_REQUEST});
const categorySuccess = data => ({type: actionTypes.CATEGORY_SUCCESS, data});
const categoryFailure = error => ({type: actionTypes.CATEGORY_FAILURE, error});


export const getAllGoods = () => dispatch => {
  dispatch(goodsRequest());

  firestore
      .collection("goods")
      .get()
      .then(snapshots => {
        dispatch(goodsSuccess(
            snapshots.docs.map(doc => {
              return {
                id: doc.id, ...doc.data()
              }
            })
        ));
      })
      .catch(error => dispatch(goodsSFailure(error)))
};

export const addGood = (good, history) => dispatch => {
  dispatch(goodsRequest());

  firestore
      .collection('goods')
      .add(good)
      .then(() => {
        history.push('/dashboard/goods');
      })
      .catch(error => dispatch(goodsSFailure(error)))
};

export const getGoodInfo = id => dispatch => {
  dispatch(goodsRequest());

  firestore
      .collection('goods')
      .doc(id)
      .get()
      .then(doc => {
        dispatch(goodInfoSuccess(doc.data()))
      })
      .catch(error => dispatch(goodsSFailure(error)))
};



export const categoryAdded = (images, category) => dispatch => {
  dispatch(categoryRequest());


  uploadUrls(images, 'category').then(urls => {
    const categoryItem = {
      ...category,
      images: [...urls]
    };

    firestore
        .collection('category')
        .doc(category.alias)
        .set({
          ...categoryItem
        })
        .then(() => {
          dispatch(categorySuccess({...categoryItem}));
        })
        .catch(err => dispatch(categoryFailure(err)))
  })

};