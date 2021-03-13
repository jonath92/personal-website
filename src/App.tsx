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
import { links } from 'types'

function App() {

  const [landingPage, setLandingPage] = useState(true)
  const location = useLocation()

  useEffect(() => {
    (location.pathname === "/") ? setLandingPage(true) : setLandingPage(false)
  }, [location])


  return (
    <Switch>
      <LayoutContainer isLandingPage={landingPage}>
        <Route exact path={links.home.location} component={Home} />
        <Route exact path={links.copyrights.location} component={Copyright} />
        <Route exact path={links.disclaimer.location} component={Disclaimer} />
        <Route exact path={links.joplin.location} component={Joplin} />
        <Route exact path={links.radio.location} component={RadioApplet} />
        <Route exact path={links.kanban.location} component={Kanban} />

      </LayoutContainer>

    </Switch>
  );
}

export default App;
