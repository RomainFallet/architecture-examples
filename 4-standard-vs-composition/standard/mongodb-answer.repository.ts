type DbAnswerType = Readonly<{ text_message: string }>
type AnswerType = Readonly<{ textMessage: string }>

export class MongoDbAnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  async findByMessageIdAndName(messageId: string, name: string) {
    const dbAnswers = await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .find({ messageId, name })

    return dbAnswers.map((dbAnswer: DbAnswerType) => {
      return { textMessage: dbAnswer.text_message }
    })
  }
}