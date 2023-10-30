import React from "react"
import {
  createMemoryRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import DashboardScreen from "~/screens/dashboard"
import LoadingScreeen from "~/screens/loading"
import SetPasswordScreen from "~/screens/set-password"
import { StartScreen } from "~/screens/start"

const router = createMemoryRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path={`/`} Component={LoadingScreeen} />
      <Route path={`/start`} Component={StartScreen} />
      <Route path={`/set-password`} Component={SetPasswordScreen} />
      <Route path={`/dashboard`} Component={DashboardScreen} />
    </React.Fragment>
  )
)

export const BrowserExtension: React.FC = () => {
  return <RouterProvider router={router} />
}
