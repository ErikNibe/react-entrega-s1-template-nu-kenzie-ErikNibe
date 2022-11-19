import './styles.css';

export function TotalValue({financialList}) {
    const total = financialList.reduce((previousValue, currentValue) => {
        if(currentValue.valueType === 'Entrada') {
            return currentValue.value + previousValue;
        }
        else {
            return previousValue - currentValue.value;
        }
    }, 0)

    return(
        <div className='total-value-container'>
            <div>
                <p>Valor total:</p>

                <span>R$ {total.toFixed(2)}</span>
            </div>

            <span>O valor se refere ao saldo</span>
        </div>
    )
}