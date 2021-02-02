import React from 'react'
import { Page } from '../child-components/Page'
import { Form, minLength, required, Values } from '../Form';
import { Field } from '../Field';
import { postQuestion } from '../MockData/QuestionsData'
export const AskSignInPage = () => {
  const handleSubmit = async (values: Values) => {
    const question = await postQuestion({
      title: values.title,
      content: values.content,
      userName: 'Fred',
      created: new Date()
    });
    return { success: question ? true : false };
  }
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