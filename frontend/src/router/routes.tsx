import { createBrowserRouter, Link } from 'react-router-dom'
import SiteLayout from '../components/layout/SiteLayout'
import Home from '../components/pages/Home'
import Projects from '../components/Projects'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      {
        path: '*',
        element: (
          <section className="container page">
            <h1>Page not found</h1>
            <Link className="button primary" to="/">Back to home</Link>
          </section>
        ),
      },
    ],
  },
])
