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
                <img src={logoHomePage} alt="" />

                <Button text={'Inicio'} handleIndexPage={handleIndexPage}/>
            </header>

            <main className='main-container'>
                <section>
                    <Form setFinancialList={setFinancialList}/>
                    
                    <TotalValue financialList={filteredList}/>
                </section>
               
                <FinancialSummary financialList={filteredList} setFilter={setFilter} removeItem={removeItem}/>
            </main>
        </>
    )
}