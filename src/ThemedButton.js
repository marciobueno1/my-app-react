import React from 'react';

import { ThemeContext } from './theme-context';

export class ThemedButton extends React.Component {
    render() {
        let theme = this.context;
        return (
            <button
                {...this.props}
                style={{backgroundColor: theme.background}}
            >
                Botao
            </button>
        );
    }
}

ThemedButton.contextType = ThemeContext;
