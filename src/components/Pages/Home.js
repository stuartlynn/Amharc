import React from 'react';
import { withRouter } from 'react-router-dom';


function Home({...props}) {
  return (
    <div >
      <h1>Welcome, this thing doesnt have a name yet</h1>
    </div>
  );
}
export default withRouter(Home);
