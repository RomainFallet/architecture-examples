export class MongoDbAnswerRepository {

  static readonly COLLECTION_NAME = 'answers'

  constructor(private readonly mongodb) {}

  async findByMessageIdAndName(messageId: string, name: string) {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .findOne({ messageId, name })
  }

  async findByMessageIdAndDate(messageId: string, date: Date) {
    return await this.mongodb
      .collection(MongoDbAnswerRepository.COLLECTION_NAME)
      .findOne({ messageId, date })
  }
}