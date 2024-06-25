import './App.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import AritclesListPage from './Pages/ArticlesListPage';
import AritclePage from './Pages/ArticlePage';
function App() {
  return (
    <div className="App">
     <h1> My Awesome Blog</h1>
      <div id="page-body">
        <HomePage />
        <AboutPage />
        <AritclesListPage />
        <AritclePage />

      </div>
    </div>
  );
}

export default App;
