import classnames from 'classnames/bind'
import styles from './Sidebar.module.scss'

const cx = classnames.bind(styles)
function Sidebar() {
    return (
        <div className={cx('warpper')}><h1>Sidebar</h1></div>
    )
}

export default Sidebar