import styles from '../styles/Home.module.css';
import React, { useState } from "react";
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


export default function Home() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {/* <div className={styles.grid}>
          {characters.map((character) => (
            <p>
              {character.name}
            </p>
          ))}
        </div> */}
        <div className={styles.grid}>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Episode ID"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              href={'/details/' + search}
              passHref>
              <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Link>
          </Paper>
        </div>
      </main>
    </div>
  )
}