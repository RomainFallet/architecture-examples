declare type DbAnswerType = any
declare type AnswerType = any

const COLLECTION_NAME = 'answers'

const fromDbToAnswer = (answer: DbAnswerType): AnswerType => {
  return { textMessage: answer.text_message }
}

export const findOneAnswerById = mongodb => async (answerId: string) => {
  const dbAnswer: DbAnswerType = await mongodb
    .collection(COLLECTION_NAME)
    .findOne({ id: answerId })

  return fromDbToAnswer(dbAnswer)
}

export const saveOneAnswer = mongodb => async (answer: AnswerType) => {
  return await mongodb
    .collection(COLLECTION_NAME)
    .insert(answer)
}
