import { render, screen } from '@testing-library/react'
import Header from '..'
import { Provider } from 'react-redux'
import { store } from '../../store'

describe('Teste para o componente header', () => {
  test('Deve renderizar o componente header corretamente', () => {
    const { debug } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    )
    debug()
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
})
