import React from 'react';
import styles from './Sidebar.module.css';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import cn from 'classnames'
import {SidebarProps} from "./Sidebar.props";
const Sidebar = ({...props}:SidebarProps) : JSX.Element => {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={cn(styles.block, styles.active)}>
                <LightbulbOutlinedIcon/>
                <div className={styles.title}>
                    Заметки
                </div>
            </div>
            <div className={styles.block}>
                <NotificationsNoneOutlinedIcon/>
                <div className={styles.title}>
                    Напоминания
                </div>
            </div>
            <div className={styles.block}>
                <EditOutlinedIcon/>
                <div className={styles.title}> Изменение ярлыков</div>
            </div>
            <div className={styles.block}>
                <ArchiveOutlinedIcon/>
                <div className={styles.title}>
                    Архив
                </div>
            </div>
            <div className={styles.block}>
                <DeleteOutlineOutlinedIcon/>
                <div className={styles.title}>
                    Корзина
                </div>
            </div>
        </div>
    );
};

export default Sidebar;