import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// <meta name="viewport" content="initial-scale=1, width=device-width" />
import NavTabs from './components/navTabs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/homeComponent';
import ProjectsComponent from './components/projectsComponent';
import AboutComponent from './components/aboutComponent';
import SettingsComponent from './components/settingsComponent';

function App() {
    // TODO: Find better way to integrate background color
    document.body.style.backgroundColor = '#3B3355';

    return (
        <div>
            <BrowserRouter>
                <NavTabs />
                <Routes>
                    <Route path="/home" Component={HomeComponent} />
                    <Route path="/projects" Component={ProjectsComponent} />
                    <Route path="/about" Component={AboutComponent} />
                    <Route path="/settings" Component={SettingsComponent} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
