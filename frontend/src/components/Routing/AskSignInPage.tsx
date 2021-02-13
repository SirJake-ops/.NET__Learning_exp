import React, { useEffect } from 'react'
import { Page } from '../child-components/Page'
import { Form, minLength, required, Values, SubmitResult } from '../Form';
import { Field } from '../Field';
import { postQuestion, PostQuestionData, QuestionData } from '../MockData/QuestionsData'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {
postQuestionActionCreator,
AppState,
clearPostedQuestionActionCreator
} from '../../redux-files/Store';
import { AnyAction } from 'redux';

//Start of interfaces
interface Props {
  postQuestion: (
    question: PostQuestionData,
  ) => Promise<void>;
  postQuestionResult?: QuestionData;
  clearPostedQuestion: () => void;
}

//End of interfaces

export const AskSignInPage: React.FC<Props> = ({
  postQuestion,
  postQuestionResult,
  clearPostedQuestion,
}) => {
  const handleSubmit = (values: Values) => {
    const question =  postQuestion({
      title: values.title,
      content: values.content,
      userName: 'Fred',
      created: new Date()
    });
    return { success: question ? true : false };
  }

  useEffect(() => {
    return function cleanup() {
      clearPostedQuestion();
    }
  }, [clearPostedQuestion]);
  return (
    <Page title="Ask a question">
      <Form submitCaption="Submit Your Question"
        validationRules={{
          title: [
            { validator: required },
            {validator: minLength, arg: 10},
          ],
          content: [
            { validator: required },
            {validator: minLength, arg: 50},
          ]
        }}
        onSubmit={handleSubmit}
        failureMessage="There was a problem..."
        successMessage="Your question was successfully submitted">
        <Field name="title" label="Title" />
        <Field name="content" label="Content" type="TextArea"/>
      </Form>
    </Page>
  )
}

export default AskSignInPage