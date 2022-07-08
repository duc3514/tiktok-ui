import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.css';
import Header from './Header';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayot({ children }) {
    return (
        <div className={cx('warpper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayot;
