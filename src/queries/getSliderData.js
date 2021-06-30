import { gql } from "@apollo/client"

export const GET_SLIDER_DATA = gql`
query getProducts {
  slider_data {
    id
    img
    imgMob
    text
    title
  }
}
`;

