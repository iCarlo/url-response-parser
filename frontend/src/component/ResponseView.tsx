import React from 'react'
import { Col, Row } from 'react-bootstrap';

export interface ResponseData {
  raw: string|object, 
  parsed: string|object|null,
}

 interface ResponseViewProps {
  response: ResponseData|null;
}

const ResponseView: React.FC<ResponseViewProps> = ({response}) => {
  console.log(response);
  return (
    <div>
      <Row>
        <Col>
          <h3>URL Response</h3>
          <textarea className='w-100' rows={10} value={response?.raw ? JSON.stringify(response?.raw, undefined, 4) : ""} />
        </Col>

        <Col>
          <h3>Processed URL Response</h3>
          <textarea className='w-100' rows={10} value={response?.parsed ? JSON.stringify(response?.parsed, undefined, 4) : ""} />
        </Col>
      </Row>
    </div>
  )
}

export default ResponseView