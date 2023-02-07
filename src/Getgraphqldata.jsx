import React from 'react'
import { useQuery, gql } from '@apollo/client';
import './App.css'
const GET_MESSAGES = gql`
query getmessages {
    messages {
      type
      size
      items {
        id
        subject
        body
        board {
          type
          id
        }
        view_href
        conversation {
          style
        }
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
return data.messages.items.map((res) => (
    <div key={res.id} className='msg-details'>
      <h3>Title: {res.subject}</h3>
      <br />
      <b>About this Artile:</b>
      <div dangerouslySetInnerHTML={{ __html: res.body }}></div>
      <br />
      <b>Board:</b>
      <p>{res.board.id}</p>
      <br />
    </div>

  ));
}
