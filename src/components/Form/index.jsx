import { useState } from 'react';
import './styles.css';

export function Form({setFinancialList}) {

    let [formData, setFormData] = useState({
        description: '',
        value: '',
        valueType: 'nothing'
    })

    function handleSubmit(event) {
        event.preventDefault();

        setFinancialList((oldList) => [...oldList, formData]);
        
        setFormData ({
            description: '',
            value: '',
            valueType: 'nothing'
        })
    }

    return(
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='input-description-container'>
                <label htmlFor='description' className='label-text'>Descrição</label>
                <input 
                    type='text'
                    id='description' 
                    placeholder='Digite sua descrição'
                    required
                    onChange={(event) => setFormData({...formData, description: event.target.value})}
                    value={formData.description}
                />
                <span>Ex.: Compra de roupas</span>
            </div>

            <div className='inputs-value-container'>
                <div>
                    <label htmlFor='value' className='label-text'>Valor</label>
                    <div className='input-value-container'>
                        <input 
                            type='text'
                            placeholder='Ex.: 12.00'
                            id='value'
                            required
                            onChange={(event) => setFormData({...formData, value: Number(event.target.value)})} 
                            value={formData.value}
                        />

                        <span className='money-icon'>R$</span>
                    </div>
                </div>

                <div>
                    <label htmlFor='valueType' className='label-text'>Tipo de valor</label>

                    <select id='valueType' value={formData.valueType} required onChange={(event) => setFormData({...formData, valueType: event.target.value})} >
                        <option value='nothing' hidden>Selecione o tipo</option>
                        <option value='Entrada'>Entrada</option>
                        <option value='Despesa'>Despesa</option>
                    </select>
                </div>
            </div>

            <button type='submit' className='btn-insert-value'>Inserir valor</button>
        </form>
    )
}