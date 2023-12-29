import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// <meta name="viewport" content="initial-scale=1, width=device-width" />
import NavTabs from './components/navTabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent';
import ProjectsComponent from './components/projectsComponent';
import UsersComponent from './components/usersComponent';

function App() {
    return (
        <div>
            <NavTabs />
            <BrowserRouter>
                <Routes>
                    <Route path="/home" Component={HomeComponent} />
                    <Route path="/projects" Component={ProjectsComponent} />
                    <Route path="/users" Component={UsersComponent} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
