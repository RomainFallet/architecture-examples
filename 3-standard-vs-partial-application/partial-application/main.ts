import { MongoDbAnswerRepository } from './mongodb-answer.repository'

declare const mongodb: any
declare const messageId: any
declare const date: any
declare const name: any

const answerRepository = new MongoDbAnswerRepository(mongodb)

const findAnswersByName = answerRepository.findByMessageIdAndName(messageId)
const findAnswersByDate = answerRepository.findByMessageIdAndDate(messageId)

findAnswersByName(name).then(
    answers => {
        // Do stuff
    }
)

findAnswersByDate(date).then(
    answers => {
        // Do stuff
    }
)