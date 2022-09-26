import React, {useContext} from 'react';
import styles from './Header.module.css'
import Logo from './logo.png'
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DialpadOutlinedIcon from '@mui/icons-material/DialpadOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {HeaderProps} from "./Header.props";
import {NotesContext} from "../../context/notesContext";
const Header = ({...props}:HeaderProps): JSX.Element => {
    const {searchNote} = useContext( NotesContext);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        searchNote(e.target.value)
    }
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.logoBLock}>
                <img src={Logo} alt=""/>
                <span className={styles.name}> Notes</span>
            </div>

            <TextField  placeholder="Поиск"
                        className={styles.inp}
                        onChange={onChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"/>

            <RefreshIcon/>
            <GridViewOutlinedIcon/>
            <SettingsOutlinedIcon/>

            <div>
                <DialpadOutlinedIcon className={styles.mr}/>
                <AccountCircleOutlinedIcon className={styles.mr}/>
            </div>

        </div>
    );
};

export default Header;