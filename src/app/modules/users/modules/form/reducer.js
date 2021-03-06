import { createReducer } from 'redux-act-light'
import cammelCase from 'lodash/camelCase'
import parseAxiosError from '../../../../utils/parseAxiosError'
import * as actions from './actions'
import { MODULE_NAME } from './constants'

export const KEY = cammelCase(MODULE_NAME)

const initialState = {
  isLoading: false,
  error: null,
}

export default createReducer(
  {
    [actions.createOneStarted]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),

    [actions.createOneSuccess]: state => ({
      ...state,
      isLoading: false,
      error: null,
    }),

    [actions.createOneFailed]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: parseAxiosError(payload.error),
    }),

    [actions.updateOneStarted]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),

    [actions.updateOneSuccess]: state => ({
      ...state,
      isLoading: false,
      error: null,
    }),

    [actions.updateOneFailed]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: parseAxiosError(payload.error),
    }),
  },
  initialState,
)
