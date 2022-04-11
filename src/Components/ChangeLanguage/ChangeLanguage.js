import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../store/actions/Language'
import './ChangeLanguage.css'


export default function ChangeLanguage() {
    const lang = useSelector((state)=>state.language.lang)
    const dispatch = useDispatch();
    const changeLang = ()=>{
        dispatch(changeLanguage(lang === 'Ar' ? 'En' : 'Ar'))
    }
  return (
    <li className="nav-item">
        <div className="dropdown">
            <button className="dropbtn">{lang}</button>
            <div className="dropdown-content">
                <a onClick={()=>changeLang()}>{lang === 'Ar' ? 'En' : 'Ar'}</a>
            </div>
        </div>
    </li>
  )
}
