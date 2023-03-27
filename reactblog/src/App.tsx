import { ThemeProvider } from 'styled-components'
import './App.css'
import Home from './pages/Home/Home'
import { UserList } from './components/UserList/UserList'
import ArticleList from './components/Article/ArticlesList'
import { GlobalStyle } from './styles/global'


function App() {
  return (
    <div>
       <ArticleList/>
       <GlobalStyle/>
    </div>
   
  )
}

export default App
