import React from 'react';

function Steps({ children, type }) {
  return (
    <>
      <ol>
        <li>Select VET or any VIP180 token in your VeChain mobile wallet and press transfer.</li>
        <li>Open the QR code scanner (top right corner) and scan the QR code to the right.</li>
        <li>Enter the amount you would like to swap (must be higher than minimum) and complete the transaction.</li>
      </ol>
      <ul>
        <li>
          <small>Save the exchange address to your contacts for convenient access and better security in the event the web interface gets compromised.</small>
        </li>
        <li>
          <small>Price changes with trade size, keep your trades below %3 of the staked assets you see in the top bar.</small>
        </li>
        <li>
          <small>Do not send funds directly from an exchange.</small>
        </li>
      </ul>
    </>
  );
}

export default Steps;
