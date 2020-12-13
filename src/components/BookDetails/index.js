import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

import {
    BookImg,
    BookButton,
    BookAuthor,
    BookContri,
    BookDes,
    BookHeading,
    BookContainer,
    BookWrapper,
    BookInfo,
    BookUrl,

} from './DetailsElement';

const Details = ({ data }) => {

    const history = useHistory();

    let { id } = useParams();
    let book = data[id];

    if (book == undefined) {
        return (
            <div><h1>no data</h1>
            </div>
        )
    }
    return (
        <div>
            <BookContainer>
                <BookHeading>{book.title}</BookHeading>
                <BookWrapper>
                    <BookInfo>
                        <BookImg src={book.book_image} alt={book.alt} />
                        <BookAuthor>Author     :     {book.author}</BookAuthor>
                        <BookDes>Description     :     {book.description}</BookDes>
                        <BookContri>Contributor     :     {book.contributor}</BookContri>
                        <BookUrl>Amazon     :     {book.amazon_product_url}</BookUrl>
                        <BookButton onClick={() => history.push('/')}>back</BookButton>
                    </BookInfo>
                </BookWrapper>
            </BookContainer>
        </div>
    )
}

export default Details





//import React from 'react'
//import { useParams, useHistory } from 'react-router-dom';


//const Details = ({ data }) => {

   // const history = useHistory();

    //let { id } = useParams();
    //let book = data[id];

    //if (book == undefined) {
        //return (
           // <div><h1>no data</h1>
           // </div>
        //)
    //}
    //return (
        //<div>
            //<h1>{book.title}</h1>
           // <button onClick={() => history.push('/')}>back</button>
        //</div>
    //)
//}

//export default Details
