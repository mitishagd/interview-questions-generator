import { useState } from 'react'
import { MainContainer, Header, Title, SplitView, Panel, Section } from './components/Layout'
import { TextArea, Label } from './components/Input'
import { ModelSelector } from './components/ModelSelector'
import { StyledButton } from './components/Button'
import { QuestionCard } from './components/QuestionCard'
import { generateQuestions } from './services/api'
import styled from 'styled-components'
import { theme } from './styles/theme'

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: 0;
`;

const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  text-align: center;
  margin-top: ${theme.spacing.md};
`;

interface CategorizedQuestions {
  technical: string[];
  behavioral: string[];
  experience: string[];
}

function App() {
  const [resumeText, setResumeText] = useState('')
  const [model, setModel] = useState<'gemini' | 'groq' | 'both'>('both')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<{ gemini?: CategorizedQuestions, groq?: CategorizedQuestions }>({})
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!resumeText.trim()) {
      setError('Please enter your resume text');
      return;
    }

    setLoading(true);
    setError(null);
    setResults({});

    try {
      const data = await generateQuestions(resumeText, model);

      // Backend returns { gemini: { technical: [], ... }, groq: { ... } }
      setResults({
        gemini: data.gemini,
        groq: data.groq
      });

    } catch (err) {
      setError('Failed to generate questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <Header>
        <Title>Interview Prep AI</Title>
      </Header>

      <SplitView>
        <Panel>
          <Section style={{ flex: '0 0 auto' }}>
            <Label>Select AI Model</Label>
            <ModelSelector selected={model} onSelect={setModel} />
          </Section>

          <Section style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Label>Paste Your Resume</Label>
            <TextArea
              placeholder="Paste your resume text here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            />
          </Section>

          <StyledButton
            onClick={handleGenerate}
            disabled={loading}
            $loading={loading}
          >
            {loading ? 'Generating Questions...' : 'Generate Interview Questions'}
          </StyledButton>

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Panel>

        <Panel>
          <ResultsGrid>
            {results.gemini && (
              <QuestionCard model="gemini" questions={results.gemini} />
            )}
            {results.groq && (
              <QuestionCard model="groq" questions={results.groq} />
            )}
            {!results.gemini && !results.groq && !loading && (
              <div style={{
                color: theme.colors.textSecondary,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto'
              }}>
                Generated interview questions will appear here.
              </div>
            )}
          </ResultsGrid>
        </Panel>
      </SplitView>
    </MainContainer>
  )
}

export default App
