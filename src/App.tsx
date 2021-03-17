// external dependencies
import { Route, Switch, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'

// own features
import { Home } from './pages/Home'
import { Copyright } from './pages/Copyrights'
import { Disclaimer } from 'pages/Disclaimer';
import { Joplin } from 'components/ProjectReports/Joplin'
import { LayoutContainer } from 'components/PageLayout/LayoutContainer'
import { RadioApplet } from 'components/ProjectReports/RadioApplet';
import { Kanban } from 'components/ProjectReports/Kanban';
import { Zugabe } from 'components/ProjectReports/Zugabe'
import { links } from 'types'

function App() {

  const [landingPage, setLandingPage] = useState(true)
  const [animationShown, setAnimationShown] = useState(false)
  const location = useLocation()

  useEffect(() => {
    (location.pathname === "/") ? setLandingPage(true) : setLandingPage(false)
  }, [location])


  function handleAnimationFinished() {
    setAnimationShown(true)
  }


  return (
    <Switch>
      <LayoutContainer isLandingPage={landingPage}>
        <Route
          exact
          path={links.home.location}
          render={() => (
            <Home animationShown={animationShown} onAnimationFinished={() => handleAnimationFinished()} />
          )}
        />
        <Route exact path={links.copyrights.location} component={Copyright} />
        <Route exact path={links.disclaimer.location} component={Disclaimer} />
        <Route exact path={links.joplin.location} component={Joplin} />
        <Route exact path={links.radio.location} component={RadioApplet} />
        <Route exact path={links.kanban.location} component={Kanban} />
        <Route exact path={links.zugabe.location} component={Zugabe} />

      </LayoutContainer>

    </Switch>
  );
}

export default App;
