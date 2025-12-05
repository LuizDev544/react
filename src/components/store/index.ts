import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import api from '../../services/api'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})

export function configuraStore(
  preloadedState?: PreloadedState<ReturnType<typeof rootReducer>>
) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

type RooState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof configuraStore>

export type { RooState, AppStore }
