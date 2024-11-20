// // Import the useUserAuth hook
// import { useUserAuth } from "./_utils/auth-context";

// // Use the useUserAuth hook to get the user object and the login and logout functions
// const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

// // Sign in to Firebase with GitHub authentication
// await gitHubSignIn();

// // Sign out of Firebase
// await firebaseSignOut();

// // Display some of the user's information
// <p>
//   Welcome, {user.displayName} ({user.email})
// </p>;
"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  console.dir(user);

  return (
    <main>
      <header>
        <h1 className="text-5xl font-bold p-5">Shopping List</h1>
      </header>

      {user ? (
        <div>
          <p>Welcome! {user.displayName}</p>
          <>{user.email}</>
          <img src={user.photoURL} className="w-40 h-40" />
          <div className="flex flex-col">
            <button
              type="button"
              className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4 w-40 h-12"
              onClick={handleSignOut}
            >
              Sign Out
            </button>

            <Link
              href="/week-10/shopping-list"
              className="text-xl text-blue-600 hover:underline mt-5"
            >
              Continue with your Shopping List
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="text-lg bg-blue-600 text-white rounded px-2 py-1 mt-4 w-80 h-12"
            onClick={handleSignIn}
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </main>
  );
}
