import { findOneAnswerById, saveOneAnswer } from './mongodb-answer.repository';

declare const mongodb: any
declare const answer: any

const answerRepository = {
    findById: findOneAnswerById(mongodb),
    save: saveOneAnswer(mongodb)
}

answerRepository.findById('3047-7382-4237-09278').then(
  answer => {
    // do stuff
  }
)

answerRepository.save(answer).then(
  result => {
    // do stuff
  }
)