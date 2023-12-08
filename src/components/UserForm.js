import { useState } from 'react';
import GitHubUserInfo from './GithubUserInfo';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSearch}
      >
        Search
      </button>
      {userData && <GitHubUserInfo userData={userData} />}
    </div>
  );
};

export default UserForm;
