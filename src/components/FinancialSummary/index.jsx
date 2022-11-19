import './styles.css';

import { Button } from '../Button';

import imgBinDefault from '../../assets/img_bin_default.svg';
import imgBinHover from '../../assets/img_bin_hover.svg';

export function FinancialSummary({financialList, setFilter, removeItem}) {

    return(
        <section className='financial-summary-container'>
            <div className='filter-container'>
                <h3>Resumo Financeiro</h3>
                
                <div>
                    <Button text={'Todos'} value={'Todos'} setFilter={setFilter}/>
                    <Button text={'Entradas'} value={'Entrada'} setFilter={setFilter}/>
                    <Button text={'Despesas'} value={'Despesa'} setFilter={setFilter}/>
                </div>
            </div>

            <ul className='financial-summary-list'>
                {financialList.map((item, index) => (
                    <li key={index} className={item.valueType === 'Entrada' ? 'financial-summary-item' : 'financial-summary-item financial-summary-item-expense'}>
                        <div>
                            <p>{item.description}</p>

                            <div>
                                <span>R${item.value}</span>

                                <button className='btn-bin'><img src={imgBinDefault} alt="Botão apagar" onClick={() => removeItem(item.description)}/></button>
                            </div>
                        </div>

                        <span>{item.valueType}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}