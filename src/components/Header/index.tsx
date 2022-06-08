import { useContext } from 'react'

import { Container } from './styles';
import Switch from 'react-switch'

import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface IProps {
  toggleTheme: () => void
}

export const Header: React.FC<IProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)
  
  return (
    <Container>
      Hello world!
      <Switch 
        width={40}
        height={10}
        handleDiameter={20}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={toggleTheme}
        checked={title === 'dark'}
        onColor={colors.secundary}
        offColor={shade(0.1, colors.primary)}
      />
    </Container>
  )
}