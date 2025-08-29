import React, { useState } from 'react';
import './App.css';

const VotingApp = () => {
  // State to store votes for each cricketer
  const [votes, setVotes] = useState({
    Rohit: 0,
    Rahul: 0,
    Kohli: 0,
  });

  // Function to handle voting
  const handleVote = (cricketers) => {
    // Update the vote count for the selected cricketers
    setVotes({
      ...votes,
      [cricketers]: votes[cricketers] + 1,
    });
  };

  return (
    <div className="voting-app">
	<div className="header">
      <h1>Vote for Your Favorite Cricketers</h1>
      <div className="vote-options">
        <button onClick={() => handleVote('Rohit')}>Vote for Rohit</button>
        <button onClick={() => handleVote('Rahul')}>Vote for Rahul</button>
        <button onClick={() => handleVote('Kohli')}>Vote for Kohli</button>
      </div>
</div>
      <h2>Vote Results:</h2>
      <div className="vote-results">
        <p>Rohit:<font size="4" color="red"> {votes.Rohit}</font> votes</p>
        <p>Rahul:<font size="4" color="red"> {votes.Rahul}</font> votes</p>
        <p>Kohli: <font size="4" color="red">{votes.Kohli} </font>votes</p>
      </div>
    </div>
  );
};

export default VotingApp;
