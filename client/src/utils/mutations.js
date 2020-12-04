import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation($email: String!, $username: String!, $firstName: String!, $lastName: String!, $password: String!) {
        addUser(email: $email, username: $username, firstName: $firstName, lastName: $lastName, password: $password){
            token
            user {
                _id
                email
                username
            }
        }
    }
`;

export const ADD_CLAIM = gql`
    mutation($text: String!, $author: String!) {
        addClaim(text: $text, author: $author) {
            _id
            text
            author
            date
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation ($author: String!, $title: String!, $rating: String!, $claimId: ID!){
        addReview(author: $author, title: $title, rating: $rating, claimId: $claimId){
            author
            title
            rating
            date
            _id
        }
    }
`