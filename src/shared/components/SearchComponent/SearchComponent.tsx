import Search from 'antd/es/input/Search'
import React, { useState } from 'react'
import { ISearch } from './inteface'
import './__styles__search.scss'
const SearchConponent = (props: ISearch) => {
    const { onSearch, OnClick, placeholder } = props
    const [valueInput, setValueInput] = useState<string | any>();
    const onChange = (e: any) => {
        const text = e.target.value;
        setValueInput(text);
        props.onChange && props.onChange(e);
        console.log(text);

    };

    return (
        <div className='search__component'>
            <Search
                placeholder={placeholder}
                style={{ width: 368 }}
                onChange={onChange}
                onSearch={onSearch}
                value={valueInput}
            />
        </div>
    )
}

export default SearchConponent

