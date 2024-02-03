import {Container, CssBaseline} from '@mui/material';
import AppToolbar from './components/AppToolbar/AppToolbar';
import GetPosts from './components/GetPosts/GetPosts.tsx';

function App() {

  return (
    <>
      <CssBaseline>
        <header>
          <AppToolbar/>
        </header>
        <main>
          <Container sx={{marginTop: 10}} maxWidth="lg">
            <GetPosts/>
          </Container>
        </main>
      </CssBaseline>
    </>
  )
}

export default App
