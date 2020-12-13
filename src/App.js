import React, { useEffect, useState } from 'react';
import { GlobalStyle } from './globalStyle';
import Hero from './components/Hero';
import Books from './components/BookList';
import { bookData } from './components/BookList/data';
import axios from 'axios';
import Details from './components/BookDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [book, setBooks] = useState([]);
  useEffect(() => {
    axios.get("https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=qCNRNcO22tpr3An2M8RQYjNPtUvQKY1y")
      .then(res => {
        console.log(res.data.results);
        setBooks(res.data.results.books);
      });
  }, []);
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Hero />
          <Books heading='Choose your favorite' data={book} />
        </Route>
        <Route path="/book/:id">
          <Details data={book} />
        </Route>

      </Switch>


    </Router>


  );
}

export default App;
