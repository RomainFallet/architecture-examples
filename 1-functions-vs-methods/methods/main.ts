import { MongoDbAnswerRepository } from './mongodb-answer.repository';

declare const mongodb: any
declare const answer: any

const answerRepository = new MongoDbAnswerRepository(mongodb)

answerRepository.findOneById('3047-7382-4237-09278').then(
  answer => {
    // do stuff
  }
)

answerRepository.saveOne(answer).then(
  result => {
    // do stuff
  }
)