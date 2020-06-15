import axios from 'axios';
import {
  FETCH_BOARDS_STARTED,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  ADD_BOARD_STARTED,
  ADD_BOARD_SUCCESS,
  ADD_BOARD_FAILURE,
  DELETE_BOARD_STARTED,
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILURE,
} from '../const';

export const fetchBoardsStart = () => {
  return {
    type: FETCH_BOARDS_STARTED,
  };
};

export const fetchBoardsSuccess = (boards) => {
  return {
    type: FETCH_BOARDS_SUCCESS,
    payload: boards,
  };
};

export const fetchBoardsFailure = (error) => {
  return {
    type: FETCH_BOARDS_FAILURE,
    payload: error,
  };
};

export const fetchBoards = () => (dispatch) => {
  dispatch(fetchBoardsStart());
  axios
    .get('http://localhost:3004/board?_sort=id&_order=desc')
    .then((res) => {
      dispatch(fetchBoardsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(fetchBoardsFailure(err.message));
    });
};

export const addBoardStart = () => ({
  type: ADD_BOARD_STARTED,
});

export const addBoardSuccess = (board) => ({
  type: ADD_BOARD_SUCCESS,
  payload: board,
});

export const addBoardFailure = (error) => ({
  type: ADD_BOARD_FAILURE,
  payload: error,
});

export const addBoardAction = (board) => (dispatch) => {
  dispatch(addBoardStart());
  axios
    .post('http://localhost:3004/board', board)
    .then(() => {
      dispatch(addBoardSuccess(board));
    })
    .catch((err) => {
      dispatch(addBoardFailure(err.message));
    });
};

export const deleteBoardsStart = () => {
  return {
    type: DELETE_BOARD_STARTED,
  };
};

export const deleteBoardsSuccess = (board) => {
  return {
    type: DELETE_BOARD_SUCCESS,
    payload: board,
  };
};

export const deleteBoardsFailure = (error) => {
  return {
    type: DELETE_BOARD_FAILURE,
    payload: error,
  };
};

export const deleteBoardAction = (id) => (dispatch) => {
  dispatch(deleteBoardsStart());
  axios
    .delete(`http://localhost:3004/board/${id}`)
    .then(() => {
      dispatch(deleteBoardsSuccess(id));
    })
    .catch((err) => {
      dispatch(deleteBoardsFailure(err.message));
    });
};