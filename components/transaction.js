import React from "react";

export const Transaction = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>

      <h3>Add new transaction</h3>
      <form id="form">
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn">Add transaction</button>
      </form>
    </>
  );
};
