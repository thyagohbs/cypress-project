import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement } from '../store/features/counterSlice';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h2 className="counter-title" data-cy="counter-title">Contador de Visitas</h2>
            <p className="counter-value" data-cy="counter-value">Valor: {count}</p>
            <div className="counter-buttons">
                <button
                    className="counter-btn"
                    onClick={() => dispatch(increment())}
                    data-cy="increment-button"
                >
                    Incrementar
                </button>
                <button
                    className="counter-btn"
                    onClick={() => dispatch(decrement())}
                    data-cy="decrement-button"
                >
                    Decrementar
                </button>
            </div>
        </div>
    );
};

export default Counter;