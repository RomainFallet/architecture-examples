type DbAnswerType = Readonly<{ text_message: string }>

type FindById = (answerId: string) => Promise<DbAnswerType>
type FindByName = (answerName: string) => Promise<DbAnswerType>

export class MongoDbAnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  findById: FindById = async answerId => {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .find({ id: answerId })
  }

  findByName: FindByName = async answerName => {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .find({ name: answerName })
  }
}