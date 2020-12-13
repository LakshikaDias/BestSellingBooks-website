import React from 'react';
import {
    BookContainer,
    BookWrapper,
    BookHeading,
    BookTitle,
    BookCard,
    BookImg,
    BookInfo,
    BookAuthor,
    BookButton
} from './BookListElement';
import { useHistory } from 'react-router-dom';

const Books = ({ heading, data }) => {
    const history = useHistory();
    return (

        <BookContainer>
            <BookHeading>{heading}</BookHeading>
            <BookWrapper>
                {data.map((book, index) => {
                    return (
                        <BookCard key={index}>
                            <BookImg src={book.book_image} alt={book.alt} />
                            <BookInfo>
                                <BookTitle>{book.title}</BookTitle>
                                <BookAuthor>{book.author}</BookAuthor>
                                <BookButton onClick={() => history.push('/book/' + index)}>
                                    More Details</BookButton>
                            </BookInfo>
                        </BookCard>
                    );
                })}
            </BookWrapper>
        </BookContainer>



    );
};

export default Books;


