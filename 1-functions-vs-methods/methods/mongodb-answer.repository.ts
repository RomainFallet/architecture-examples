type DbAnswerType = Readonly<{ text_message: string }>
type AnswerType = Readonly<{ textMessage: string }>

export class MongoDbAnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  private fromDbToAnswer(answer: DbAnswerType): AnswerType {
    return { textMessage: answer.text_message }
  }

  async findOneById(answerId: string) {
    const dbAnswer: DbAnswerType = await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .findOne({ id: answerId })

    return this.fromDbToAnswer(dbAnswer)
  }

  async saveOne(answer: AnswerType) {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .insert(answer)
  }
}