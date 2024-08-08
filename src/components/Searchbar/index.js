import { IoSearch } from 'react-icons/io5'
import './index.scss'

export const Searchbar = () => {
    return(
        <div className='search-bar'>
            <form className='search-form d-flex align-items-center'>
                <input type='text' name='query'  placeholder='Search...' title='Enter Search Keyword'/>
                <button type='submit' title='Search'><IoSearch/></button>
            </form>
        </div>
    )
}