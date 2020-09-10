type DbAnswerType = Readonly<{ text_message: string }>

interface AnswerRepository {
  findById: (answerId: string) => Promise<DbAnswerType>
  findByName: (answerName: string) => Promise<DbAnswerType>
}

export class MongoDbAnswerRepository implements AnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  findById = async (answerId: string) => {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .findOne({ id: answerId })
  }

  findByName = async (answerName: string) => {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .findOne({ name: answerName })
  }
}