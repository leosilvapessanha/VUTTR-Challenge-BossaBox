import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import * as S from './styles';

interface IThemes {
  toggleTheme(): void;
}

const Header: React.FC<IThemes> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <S.Container>
      Very usefull tools to remember
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </S.Container>
  );
};

export default Header;
