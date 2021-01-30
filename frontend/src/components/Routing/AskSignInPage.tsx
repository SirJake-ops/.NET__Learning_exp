import React from 'react'
import { Page } from '../child-components/Page'
import { Form } from '../Form';
import { Field } from '../Field';
export const AskSignInPage = () => {
  return (
    <Page title="Ask a question">
      <Form submitCaption="Submit Your Question">
        <Field name="title" label="Title" />
        <Field name="content" label="Content" type="TextArea"/>
      </Form>
    </Page>
  )
}

export default AskSignInPage