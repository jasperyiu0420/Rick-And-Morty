import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import Link from 'next/link'
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import DefaultLayout from '../Component/DefaultLayout';



export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <DefaultLayout>
      <Paper component="form">
        <InputBase
          className={styles.input}
          placeholder="Episode ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link
          href={'/details/' + search}
          passHref>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </Link>
      </Paper>
    </DefaultLayout>
  )
}