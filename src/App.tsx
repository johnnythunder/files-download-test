import styled, { createGlobalStyle } from 'styled-components';
import FilesTable from './components/FilesTable';

const GlobalStyle = createGlobalStyle`
  :root {
    --gray-10: #FAFAFA;
    --gray-20: #F5F5F5;
    --gray-30: #EEEEEE;
    --gray-40: #E0E0E0;
    --gray-50: #D6D6D6;
    --gray-60: #BDBDBD;
    --blue:    #0074D9;
    --green:   #2ECC40;
    --yellow:  #FFDC00;
    --red:     #FF4136;
  }

  html {
    font-size: 12px;
  }

  body {
    background-color: var(--gray-10);
    margin: 0;
    font-family: 'Roboto', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  width: 70vw;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />

      <AppContainer>
        <FilesTable />
      </AppContainer>
    </>
  );
};

export default App;
