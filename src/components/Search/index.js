import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Warpper as PropperWrapper } from '~/components/Poper';
import AccountItem from '~/components/AccountItem';
import HasTippy from '@tippyjs/react/headless'; // different import path!
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles);

function Search() {
    // Search Value
    const [searchValue, setSearchValue] = useState('');

    // Search Result
    const [searchResult, setSerachResult] = useState([]);

    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSerachResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSerachResult(res.data);
                setLoading(false);
            });
    }, [searchValue]);

    const HandleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const HandleHideResult = () => {
        setShowResult(false);
    };

    const inputRef = useRef();
    return (
        <HasTippy
            onClickOutside={HandleHideResult}
            interactive
            visible={showResult && searchValue.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PropperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PropperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={HandleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('search-button')}>
                    <SearchIcon />
                </button>
            </div>
        </HasTippy>
    );
}

export default Search;
