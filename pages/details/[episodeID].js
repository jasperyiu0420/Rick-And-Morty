import { gql } from "@apollo/client";
import client from "../../apollo-client";
import DefaultLayout from '../../Component/DefaultLayout'
import { Avatar, Card, CardHeader, CardContent, List, ListItem, ListItemText, Grid, Button } from "@material-ui/core";
import Link from 'next/link'
import React from 'react'


export async function getServerSideProps(context) {
  const { episodeID } = context.query
  try {
    const response = await client.query({
      query: gql`
      query EpisodeDetail {
        episode(id: ${episodeID}){
            name
            air_date
            episode
            characters {
              name
              status
              species
              gender
              image
            }
        }
      }
    `,
    });

    console.log("********************************************", response)
    return {
      props: {
        episodeDetail: response.data.episode,
      },
    };
  }
  catch (error) {
    console.log(error)
    return {
      props: {
        episodeDetail: []
      }
    }
  }
}

function EpisodeDetail({ episodeDetail }) {
  if (episodeDetail.length === 0) {
    return (
      <DefaultLayout>
        <Link
          href={'/'}
          passHref>
          <Button>Back</Button>
        </Link>
        <Grid container spacing={3}>
          <Grid item xs={12}>No Data Exist</Grid>
        </Grid>
      </DefaultLayout>
    )
  }
  return (
    <DefaultLayout>
      <Link
        href={'/'}
        passHref>
        <Button>Back</Button>
      </Link>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List>
            <ListItem><ListItemText primary={`Name: ${episodeDetail.name}`} /></ListItem>
            <ListItem><ListItemText primary={`Air Date: ${episodeDetail.air_date}`} /></ListItem>
            <ListItem><ListItemText primary={`Episode: ${episodeDetail.episode}`} /></ListItem>
            <ListItem><ListItemText primary={`Character List:`} /></ListItem>
          </List>
        </Grid>
        {episodeDetail.characters.map(character => (
          <Grid item xs={6} sm={3}>
            <Card>
              <CardHeader avatar={<Avatar src={character.image} />} title={character.name} subheader={character.status} />
              <CardContent>
                <List>
                  <ListItem><ListItemText primary={`Species: ${character.species}`} /></ListItem>
                  <ListItem><ListItemText primary={`Gender: ${character.gender}`} /></ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </DefaultLayout>

  )
}

export default EpisodeDetail