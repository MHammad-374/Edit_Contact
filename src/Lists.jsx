import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Lists() {
    const [list1, setList1] = useState("newList")
    const [list2, setList2] = useState("lists")
    const [list3, setList3] = useState("lists")
    const [list4, setList4] = useState("lists")

    const newList1 = () => {
        setList1("newList")
        setList2("lists")
        setList3("lists")
        setList4("lists")
    }
    const newList2 = () => {
        setList1("lists")
        setList2("newList")
        setList3("lists")
        setList4("lists")
    }
    const newList3 = () => {
        setList1("lists")
        setList2("lists")
        setList3("newList")
        setList4("lists")
    }
    const newList4 = () => {
        setList1("lists")
        setList2("lists")
        setList3("lists")
        setList4("newList")
    }
    return (
        <>
            <h2 className='heading-left'>Groups</h2>
            <ul>
                <Link onClick={() => newList1()} style={{ textDecoration: 'none', color: "rgb(56, 56, 56)" }} to="/">
                    <li className={list1}>
                        Basic Info
                    </li>
                </Link>
                <Link onClick={() => newList2()} style={{ textDecoration: 'none', color: "rgb(56, 56, 56)" }} to="/address-info">
                    <li className={list2}>
                        Address Info
                    </li>
                </Link>
                <Link onClick={() => newList3()} style={{ textDecoration: 'none', color: "rgb(56, 56, 56)" }} to="/company-info">
                    <li className={list3}>
                        Company Info
                    </li>
                </Link>
            </ul>
            <h2 className='heading-left'>Options</h2>
            <ul>
                <Link style={{ textDecoration: 'none', color: "rgb(56, 56, 56)" }} to="/data">
                    <li onClick={() => newList4()} className={list4}>
                        Data
                    </li>
                </Link>
            </ul>
        </>
    )
}

export default Lists
