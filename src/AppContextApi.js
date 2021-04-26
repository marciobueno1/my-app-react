import React from 'react';

import { ThemeContext, themes } from './theme-context';
import { Toolbar } from './Toolbar';
import { ThemeTogglerButton } from './ThemeTogglerButton';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
            }));
        };
        this.state = {
          theme: themes.light,
          toggleTheme: this.toggleTheme,
        };
    }


    render() {
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <Toolbar changeTheme={this.toggleTheme}/>
                    <ThemeTogglerButton />
                </ThemeContext.Provider>
                <ThemeTogglerButton />
            </div>
        );
    }
}

export default App;
