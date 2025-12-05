import { screen } from '@testing-library/react'
import Header from '..'
import { renderizaComProvider } from '../../../Utils/testes'

describe('Teste para o componente header', () => {
  test('Deve renderizar o componente header corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })
  test('Deve redenrizar dois coisas no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['windows'],
              preco: 150.9,
              precoAntigo: 199.9,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'Ação',
              imagem: '',
              plataformas: ['windows'],
              preco: 120.5,
              precoAntigo: 180.0,
              titulo: 'God of War'
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2')
  })
})
