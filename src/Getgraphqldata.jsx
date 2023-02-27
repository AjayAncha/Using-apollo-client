import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';
import './App.css'
import Getmoredata from './Getmoredata';
const GET_MESSAGES = gql`
query getMessages {
  messages {
    size
    items {
      id
      subject
      author {
        id
        login
      }
      body
      kudos {
        size
      }
      view_href
    }
  }
}
`;

export default function Getgraphqldata() { 

    const { loading, error, data} = useQuery(GET_MESSAGES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

//   return (
//     console.log("This is data from GraphQl",data)
//   )
return data.messages.items.map((item) => {
  return(
    <Getmoredata res={item}/>
  )
});
}

