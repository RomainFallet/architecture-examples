import { MongoDbAnswerRepository } from './mongodb-answer.repository'

declare const mongodb: any
declare const messageId: any
declare const date: any
declare const name: any

const answerRepository = new MongoDbAnswerRepository(mongodb)

answerRepository.findByMessageIdAndName(messageId, name).then(
    answer => {
        // Do stuff
    }
)

answerRepository.findByMessageIdAndDate(messageId, date).then(
    answer => {
        // Do stuff
    }
)