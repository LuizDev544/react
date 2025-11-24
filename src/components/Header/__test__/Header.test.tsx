import { render } from '@testing-library/react'
import Header from '..'

describe('Teste para o componente header'),
  () => {
    it('Deve renderizar o componente header corretamente'),
      () => {
        render(<header />)
        expect(screen.getByText('EBAC Games')).toBeInTheDocument()
      }
  }
