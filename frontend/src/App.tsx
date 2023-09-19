import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { queryParser } from './service/parser_api';
import ResponseView, { ResponseData } from './component/ResponseView';

function App() {
  const [queryText, setQueryText] = useState({query: ""})
  const [response, setResponse] = useState<ResponseData|null>(null)

  useEffect(() => {
    const persistedQuery = localStorage.getItem('appQueryText');

    if(persistedQuery) setQueryText({query: persistedQuery});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('appQueryText', queryText.query);

  }, [queryText])
  

  const onSubmit = async () => {
    try {
      const res = await queryParser(queryText);
      setResponse(res)

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <div className='d-flex justify-content-center align-items-center my-5'>
        <span>URL:</span>
        <input className='w-50 mx-3' type='text' value={queryText.query} onChange={(e) => setQueryText({query: e.target.value})} />
        <button onClick={onSubmit}>Query</button>
      </div>

      <ResponseView response={response} />
    </Container>
  );
}

export default App;
