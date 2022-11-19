import './styles.css';

export function Button({text, value, setFilter, handleIndexPage}) {
    return(
        <button className={text === 'Inicio' ? 'button-container' : 'button-container btn-filter'} onClick={() => text === 'Inicio' ? handleIndexPage() : setFilter(value)}>{text}</button>
    )
}