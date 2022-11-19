import './styles.css';

import logoHomePage from '../../assets/logo_homePage.svg'

import { Button } from '../Button';
import { Form } from '../Form';
import { TotalValue } from '../TotalValue';
import { FinancialSummary } from '../FinancialSummary';
import { useState } from 'react';

export function HomePage({handleIndexPage}) {

    const [financialList, setFinancialList] = useState([]);

    const [filter, setFilter] = useState('Todos')

    const filteredList = financialList.filter(
        (item) => (
            filter === 'Todos' ?
            true :
            item.valueType === filter
        )
    )
    
    function removeItem(description) {
        const newList = financialList.filter((item) => item.description !== description);

        setFinancialList(newList)
    }
    
    return (
        <>
            <header className='header-container'>
                <div>
                    <img src={logoHomePage} alt="" />

                    <Button text={'Inicio'} handleIndexPage={handleIndexPage}/>
                </div>
            </header>

            <main className='main-container'>
                <section className='financial-container'>
                    <Form setFinancialList={setFinancialList}/>
                    
                    {financialList.length > 0 &&
                        <TotalValue financialList={filteredList}/>   
                    }
                </section>
               
                <FinancialSummary financialList={filteredList} setFilter={setFilter} removeItem={removeItem}/>
            </main>
        </>
    )
}