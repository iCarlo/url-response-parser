import React from 'react'
import { Col, Row } from 'react-bootstrap';

export interface ResponseData {
  raw: string|object|null, 
  parsed: string|object|null,
}

 interface ResponseViewProps {
  response: ResponseData|null;
}

const ResponseView: React.FC<ResponseViewProps> = ({response}) => {
  

  function stringifyResponse(str:string|object|null|undefined){
    if(!str) {
      return ""
    } else  if(typeof str === 'object'){
      return JSON.stringify(str, undefined, 4)
    } else {
      return str;
    }
  }

  return (
    <div>
      <Row>
        <Col>
          <h3>URL Response</h3>
          <textarea className='w-100' rows={10} value={stringifyResponse(response?.raw)} />
        </Col>

        <Col>
          <h3>Processed URL Response</h3>
          <textarea className='w-100' rows={10} value={stringifyResponse(response?.parsed)} />
        </Col>
      </Row>
    </div>
  )
}

export default ResponseView