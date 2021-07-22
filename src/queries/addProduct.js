import { gql } from "@apollo/client"

export const ADD_PRODUCT = gql`
mutation(
    $name: String!,
    $price: Int!,
    $category: String!,
    $colors: _text,  $images: _text,
    $description: String!)
    { insert_products_products(objects:
        [{name: $name,
        price: $price,
        category: $category,
        colors: $colors, images: $images,
        description: $description,}])
        { returning {
        name
        price
        category
        colors
        images
        description
      }
    }
  }
`;