import { AuthProvider } from "../src/Context/AuthContext"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./common/Layout"

import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import About from "./pages/About"
import Home from "./pages/Home"
import SignOut from "./pages/auth/SignOut"

import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import ViewNote from "./pages/ViewNote"

import ProtectedRoutes from "../src/utils/ProtectedRoutes"
import PublicRoutes from "../src/utils/PublicRoutes"
import MyNotes from "./pages/MyNotes"


const App = () => {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Layout />,

      children: [

        {
          path: "/",
          element: <Home />
        },

        {
          path: "/about",
          element: <About />
        },
        {
          element: <PublicRoutes />,
          children: [

            {
              path: "/login",
              element: <Login />
            },

            {
              path: "/register",
              element: <Register />
            }

          ]
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "/notes",
              element: <Notes />
            },

            {
              path: "/createNote",
              element: <CreateNote />
            },
            {
              path: "/my-notes",
              element: <MyNotes />
            },
            {
              path: "/notes/:id",
              element: <ViewNote />
            },

            {
              path: "/signout",
              element: <SignOut />
            }

          ]
        }

      ]
    }

  ])


  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App