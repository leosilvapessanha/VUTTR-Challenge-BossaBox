import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: row;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  padding: 0 30px;
`;
