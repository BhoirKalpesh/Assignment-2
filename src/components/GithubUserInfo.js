

const GitHubUserInfo = ({ userData }) => {
    const {
      avatar_url,
      login,
      name,
      public_repos,
      public_gists,
      created_at,
    } = userData;
  
    return (
      <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 dark:bg-gray-800  md:w-auto">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto shadow-lg"
          src={avatar_url}
          alt="User Avatar"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 rounded-3xl  border-opacity-50 shadow-md w-72 md:w-aut">
          
          <div className="font-medium">
            <div className="text-blue-500 dark:text-blue-400 text-xl">
              {name || login}
            </div>
            <div className="text-gray-700 dark:text-gray-400 hover:text-gray-200">
              {`Public Repos: ${public_repos}`}
            </div>
            <div className="text-gray-700 dark:text-gray-400 hover:text-gray-200">
              {`Public Gists: ${public_gists}`}
            </div>
            <div className="text-gray-700 dark:text-gray-400 hover:text-gray-200">
              {`Profile Created At: ${new Date(created_at).toLocaleDateString()}`}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default GitHubUserInfo;
  