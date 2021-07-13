import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
query getProducts {
    products_products {
      id
      name
      images
      price
      colors
      category
      description
    }
}
`;

