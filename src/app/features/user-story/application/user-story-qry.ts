import { Inject, Injectable } from "@angular/core";
import { USER_STORY_REPOSITORY } from "../../../core/di/di";
import { UserStoryRepository } from "../domain/user-story-repository";
import { UserStory } from "../domain/user-story";


@Injectable({
  providedIn: 'root'
})
export class UserStoryQry {
  constructor(@Inject(USER_STORY_REPOSITORY) private readonly userStoryRepository: UserStoryRepository){}

  get(): Promise<UserStory>{
    return this.userStoryRepository.get();
  }
}
