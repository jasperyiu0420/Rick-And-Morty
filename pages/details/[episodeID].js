import { gql } from "@apollo/client";
import client from "../../apollo-client";


export async function getServerSideProps(context) {
    const { episodeID } = context.query
    const { data } = await client.query({
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

    return {
        props: {
            episodeDetail: data.episode
        },
    };
}

function EpisodeDetail({ episodeDetail }) {
    return <div>{JSON.stringify(episodeDetail)}</div>
}

export default EpisodeDetail