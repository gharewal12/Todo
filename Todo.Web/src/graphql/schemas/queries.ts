import { gql } from '@apollo/client';

export const GET_TODOS = gql`
   query {
       todoItems {
          id
          title
          isCompleted
      }
  }
`;