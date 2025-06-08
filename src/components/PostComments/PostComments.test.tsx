import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Muito legal!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-campo-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Irado!'
            }
        })
        fireEvent.click(screen.getByTestId('btn-campo-comentar'))

        expect(screen.getAllByTestId('numero-comentarios')).toHaveLength(2);
    });
});