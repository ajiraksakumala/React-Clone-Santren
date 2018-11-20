import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="text-center jumbo-cover mt-76">
        <h1 className="display-3">Santren Koding</h1>
        <p className="lead">Intensive Coding Bootcamp for Yatim &amp; Dhuafa</p>
        <br/>
        <p className="lead">
          <Button color="success" className="btn-lg">Mulai Belajar</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
