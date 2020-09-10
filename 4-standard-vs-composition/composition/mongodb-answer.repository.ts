type DbAnswerType = Readonly<{ text_message: string }>
type AnswerType = Readonly<{ textMessage: string }>

export class MongoDbAnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  private async findDbByMessageIdAndName(messageId: string, name: string) {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .findOne({ messageId, name })
  }

  private fromDbToAnswer(answer: DbAnswerType): AnswerType {
    return { textMessage: answer.text_message }
  }

  async findByMessageIdAndName(messageId: string, name: string) {
    return (await this.findDbByMessageIdAndName(messageId, name))
      .map(this.fromDbToAnswer)
  }
}