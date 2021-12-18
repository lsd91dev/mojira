import { UserStory } from "./user-story";



export interface UserStoryRepository {
  get(): Promise<UserStory>;
  save(userStory: UserStory): Promise <void>;
}
