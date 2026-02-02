import styled from 'styled-components';
import { theme } from '../styles/theme';

const Card = styled.div`
  background-color: ${theme.colors.surface};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border};
  padding-bottom: ${theme.spacing.sm};
`;

const ModelBadge = styled.span<{ $model: 'gemini' | 'groq' }>`
  font-size: ${theme.typography.small};
  font-weight: 700;
  padding: 4px 8px;
  border-radius: ${theme.borderRadius.sm};
  text-transform: uppercase;
  background-color: ${props => props.$model === 'gemini' ? 'rgba(66, 133, 244, 0.2)' : 'rgba(242, 80, 34, 0.2)'};
  color: ${props => props.$model === 'gemini' ? '#4285F4' : '#F25022'};
`;

const QuestionList = styled.ul`
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const QuestionItem = styled.li`
  color: ${theme.colors.text};
  line-height: 1.6;
  
  &::marker {
    color: ${theme.colors.primary};
    font-weight: bold;
  }
`;

interface CategorizedQuestions {
  technical: string[];
  behavioral: string[];
  experience: string[];
}

interface QuestionCardProps {
  model: 'gemini' | 'groq';
  questions: CategorizedQuestions;
}

const CategoryTitle = styled.h3`
  font-size: ${theme.typography.body};
  font-weight: 600;
  color: ${theme.colors.primary};
  margin-top: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const QuestionCard = ({ model, questions }: QuestionCardProps) => {
  if (!questions) return null;

  const renderCategory = (title: string, items: string[]) => {
    if (!items || items.length === 0) return null;
    return (
      <>
        <CategoryTitle>{title}</CategoryTitle>
        <QuestionList>
          {items.map((q, idx) => (
            <QuestionItem key={idx}>{q}</QuestionItem>
          ))}
        </QuestionList>
      </>
    );
  };

  return (
    <Card>
      <Header>
        <ModelBadge $model={model}>{model}</ModelBadge>
      </Header>
      {renderCategory('Technical', questions.technical)}
      {renderCategory('Behavioral', questions.behavioral)}
      {renderCategory('Experience', questions.experience)}
    </Card>
  );
};
