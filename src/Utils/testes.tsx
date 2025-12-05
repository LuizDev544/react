import { RenderOptions } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { AppStore, RooState, configuraStore } from '../components/store'
import { PropsWithChildren } from 'react'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'>{
  preloadState?: PreloadedState<RooState>,
  store?: AppStore
}
export function renderizaComProvider(
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store,
    ...opcoesAdicionais
  }: ExtendedRenderOptions = {}
) {
  function Ecapsulador ({ children }: PropsWithChildren<>{}): JSX
