import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  const handleGoogleLogin = async () => {
    // Firebase login will go here
    console.log("Google Sign-In triggered")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Welcome to Lost & Found</h1>
        <p className="text-gray-600 mb-6">Sign in using your Google account to manage your reports.</p>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 text-lg bg-white border border-gray-300 rounded-md hover:bg-gray-100 shadow transition"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>

        <p className="text-sm text-gray-400 mt-6">Your campus email helps us match reports better.</p>
      </div>
    </div>
  )
}
