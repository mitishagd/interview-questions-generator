import styled from 'styled-components';
import { theme } from '../styles/theme';

export const TextArea = styled.textarea`
  width: 100%;
  flex: 1;
  min-height: 200px;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.surface};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.text};
  font-family: ${theme.typography.fontFamily};
  font-size: ${theme.typography.body};
  resize: none;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(100, 108, 255, 0.2);
  }

  &::placeholder {
    color: ${theme.colors.textSecondary};
  }
`;

export const Label = styled.label`
  font-size: ${theme.typography.small};
  font-weight: 600;
  color: ${theme.colors.textSecondary};
  margin-bottom: ${theme.spacing.sm};
  display: block;
`;
