import { gql } from '../__generated__/gql';

export const GET_SHIPS = gql(`
query Ships {
  ships {
    id
    name
    type
    year_built
  }
}
`);
