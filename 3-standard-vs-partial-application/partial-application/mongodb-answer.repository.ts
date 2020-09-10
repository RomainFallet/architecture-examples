export class MongoDbAnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  findByMessageIdAndName = (messageId: string) => async (name: string) => {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .find({ messageId, name })
  }

  findByMessageIdAndDate = (messageId: string) => async (date: Date) => {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .find({ messageId, date })
  }
}