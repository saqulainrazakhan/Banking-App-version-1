// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { withDraw, deposit } from '../../actions';

const Banking = () => {

  const [cash, setCash] = useState('');

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setCash(e.target.value);
  }

  const handleWithDraw = (cash) => {
    dispatch(withDraw(+cash))
    setCash('');
  }

  const handleDeposit = () => {
    dispatch(deposit(+cash))
    setCash(cash);

  }

  return (
    <div>
      <Card inverse className="my-2"
        color="danger">
        <CardImg

          style={{
            height: 270
          }}
          width="100%"
        />
        <CardImgOverlay>
          <Card
            className="my-2"
            color="dark"
            inverse
            style={{
              width: '45rem',
              height: '20rem',
              marginLeft: '25rem',

            }}
          >

            <CardBody>

              <CardTitle>
                <h2>Total Amount</h2>
                <h3>Balance : <strong>${cash}</strong></h3>
                <hr />
                <div className="field">
                  <input type='number' className='input' placeholder='amount' value={cash} onChange={changeHandler} />
                </div>
                <div>
                  <button className='button mr-2 is-danger' onClick={handleWithDraw}>Withdraw</button>
                  <button className='button mr-2 is-success' onClick={handleDeposit}>Deposit</button>
                </div>

              </CardTitle>

            </CardBody>
          </Card>


        </CardImgOverlay>

      </Card>
    </div>
  )
};

export default Banking;