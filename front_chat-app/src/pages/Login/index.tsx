function Login() {
  return (
    <div className="flex w-full h-full flex-col select-none ">
      <div className="flex flex-col justify-center items-center h-full">
        <form
          method="POST"
          className="flex flex-col justify-center items-center p-4 w-96 rounded-md shadow-lg bg-white"
        >
          <h1 className="text-2xl font-bold text-gray-800">Login</h1>
          <input
            type="text"
            placeholder="Votre nom d'utilisateur"
            name="username"
            className="mt-6 p-2 w-full h-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#ffa40a]"
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            name="password"
            className="mt-6 p-2 w-full h-12 border border-gray-300 rounded-md focus:outline-none focus:border-[#ffa40a]"
          />
          <button className="w-full p-2 mt-4 bg-[#ffa40a] text-white rounded-md transition-colors duration-200 ease-in-out hover:bg-[#ff8c00] focus:outline-none">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

// Exports
export default Login;
