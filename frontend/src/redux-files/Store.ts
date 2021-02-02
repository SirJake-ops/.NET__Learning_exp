import { QuestionData } from '../components/MockData/QuestionsData';
import { Action, ActionCreator, Dispatch } from 'redux';

//Start of Interfaces
interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[] | null;
  readonly postedResult?: QuestionData;
}

export interface AppState {
  readonly questions: QuestionsState;
}
//Start of Action Interfaces
export interface GettingUnansweredQuestionsAction extends Action<'GettingUnansweredQuestions'> {}

export interface GotUnansweredQuestionsAction extends Action<'GotUnansweredQuestions'>{
  questions: QuestionData[];
}

export interface PostedQuestionAction extends Action<'PostedQuestion'> {
  result: QuestionData | undefined;
}
//End of Action Interfaces

//End of Interfaces


//Define Types
type QuestionsActions = | GettingUnansweredQuestionsAction | GotUnansweredQuestionsAction | PostedQuestionAction;

//End of Types

const initialQuestionState: QuestionsState = {
  loading: false,
  unanswered: null,
}

export const getUnansweredQuestionsActionCreator = () => {
  return async (dispatch: Dispatch) => {
    // TODO - dispatch the GettingUnansweredQuestions action
    // TODO - get the questions from server
    // TODO - dispatch the GotUnansweredQuestions action
  }
}