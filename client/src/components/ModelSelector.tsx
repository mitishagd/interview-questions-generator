import styled, { css } from 'styled-components';
import { theme } from '../styles/theme';

const SelectContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  justify-content: center;
`;

const Option = styled.div<{ $selected: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background-color: ${theme.colors.surface};
  border: 1px solid ${props => props.$selected ? theme.colors.primary : theme.colors.border};
  border-radius: ${theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
  color: ${props => props.$selected ? theme.colors.primary : theme.colors.textSecondary};
  user-select: none;

  &:hover {
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.cardHover};
  }

  ${props => props.$selected && css`
    background-color: rgba(100, 108, 255, 0.1);
  `}
`;

interface ModelSelectorProps {
    selected: 'gemini' | 'groq' | 'both';
    onSelect: (model: 'gemini' | 'groq' | 'both') => void;
}

export const ModelSelector = ({ selected, onSelect }: ModelSelectorProps) => {
    return (
        <SelectContainer>
            <Option
                $selected={selected === 'gemini'}
                onClick={() => onSelect('gemini')}
            >
                Gemini
            </Option>
            <Option
                $selected={selected === 'groq'}
                onClick={() => onSelect('groq')}
            >
                Groq
            </Option>
            <Option
                $selected={selected === 'both'}
                onClick={() => onSelect('both')}
            >
                Both
            </Option>
        </SelectContainer>
    );
};
