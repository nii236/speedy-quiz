import alt from 'app/utils/Alt';
import Source from 'app/sources/Source';
import Actions from 'app/actions/Actions';

class Store {
  constructor() {
    this.survey = [];
    this.dummyState = {};
    this.errorMessage = '';
    this.progress = 0;
    this.currentQuestion = '';
    this.currentTopic = '';
    this.completed = 0;
    this.calculateProgress = this.calculateProgress.bind(this);
    this.bindListeners({
      handleFetchAsyncInProgress: Actions.FETCH_ASYNC_IN_PROGRESS,
      handleFetchAsyncSuccess: Actions.FETCH_ASYNC_SUCCESS,
      handleFetchAsyncFailed: Actions.FETCH_ASYNC_FAILED,
      handleDummyAction: Actions.DUMMY_ACTION,
      handleNextQuestion: Actions.NEXT_QUESTION
    });
    this.registerAsync(Source);
  }

  handleNextQuestion() {
    this.progress += 1;
    const tempProgress = this.progress;
    this.currentTopic = this.survey[tempProgress].topic;
    this.currentQuestion = this.survey[tempProgress].content;
    this.calculateProgress();
  }

  calculateProgress() {
    const tempProgress = this.progress;
    const totalQuestions = this.survey.length;

    this.completed = tempProgress/totalQuestions*100;
  }

  handleDummyAction() {
    if (this.dummyState.derp == 'derp') {
      this.dummyState.derp = 'not derp';
    } else {
      this.dummyState.derp = 'derp';
    }
  }

  handleFetchAsyncInProgress() {
  }

  handleFetchAsyncSuccess(survey) {
    console.log(survey);
    this.survey = survey;
    this.currentQuestion = this.survey[0].content;
    this.currentTopic = this.survey[0].topic;
  }

  handleFetchAsyncFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleSubmitSurveySuccess() {
  }
}

export default alt.createStore(Store, 'Store');
