import styled from 'styled-components';
import { theme } from '../styles/theme';

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${theme.colors.background};
`;

export const Header = styled.header`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};
  flex: 0 0 auto;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.h2};
  font-weight: 700;
  text-align: left;
  background: ${theme.colors.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

export const SplitView = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

export const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.lg};
  overflow-y: auto;
  gap: ${theme.spacing.lg};

  &:first-child {
    border-right: 1px solid ${theme.colors.border};
    max-width: 500px;
  }

  @media (max-width: 768px) {
    &:first-child {
      border-right: none;
      border-bottom: 1px solid ${theme.colors.border};
      max-width: none;
      height: auto;
      flex: 0 0 auto;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  flex: 1;
`;

