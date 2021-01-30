/**@jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/react'
import {PrimaryButton} from './Styles/Styles'
import QuestionList from './QuestionList'
import { getUnansweredQuestions, QuestionData } from './MockData/QuestionsData'
import { Page } from './child-components/Page'
import { PageTitle } from './child-components/PageTitle'
import { useEffect, useState } from 'react'
import {RouteComponentProps} from 'react-router-dom'

const HomePage = ({history}) => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
      // console.log("rendered!");
    };
    doGetUnansweredQuestions();
  }, []);
  const handleAskQuestionClick = () => {
    history.push('/ask')
    // console.log('TODO - move to the AskPage');
  }
  return (
  <Page>
    <div css={css`
    margin: 50px auto 20px auto;
    padding: 30px 20px;
    max-width: 600px;`}>
      <div css={css`
      display: flex;
      align-items: center;
      justify-content: space-between;`}>
          <PageTitle>Unanswered Questions</PageTitle>
          <PrimaryButton onClick={ handleAskQuestionClick }>Ask a question</PrimaryButton>
      </div>
        {/* <QuestionList data={questions || []}/> */}
      </div>
      {questionsLoading ? (
        <div css={css` 
        font-size: 16px;
        font-style: italic;`}>
          Loading...
        </div>
      ) : (<QuestionList data={questions || []} />)}
    </Page>
  );
}

export default HomePage
