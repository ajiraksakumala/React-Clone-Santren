import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="text-center jumbo-cover mt-76">
        <img src="https://firebasestorage.googleapis.com/v0/b/santren-koding.appspot.com/o/logo_santrenkoding.jpg?alt=media&amp;token=00c55602-9495-47de-ac8a-b777c39ff2c5" alt="santren" />
        <h1 className="display-3">Mondok by Santren Koding</h1>
        <p className="lead">Kegiatan Belajar Intensif 3 tahun Programming dan Qur'an</p>
        <br/>
        <p className="lead">
          <Button color="success" className="btn-lg">Daftar Sekarang!</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
