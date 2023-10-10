import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
  return (
    <main className="Home">
      {posts.length ? (
        <Feed posts={posts} />
      ) : (
        <main className="Missing">
          <div className="card text-center border-secondary mb-3">
            <div className="card-header">Empty</div>
            <div className="card-body">
              <h2 className="card-title">No Blog Added</h2>
              <p className="card-text">Click Add on Navbar</p>
            </div>
          </div>
        </main>
      )}
    </main>
  );
};

export default Home;
