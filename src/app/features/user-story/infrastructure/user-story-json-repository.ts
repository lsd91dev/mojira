import { UserStoryRepository } from "../domain/user-story-repository";
import { UserStory } from "../domain/user-story";
import { UserStoryMother } from "../domain/user-story-mother";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class UserStoryJsonRepository implements UserStoryRepository {
  get(): Promise<UserStory> {
    return Promise.resolve(UserStoryMother.build());
  }

  save(userStory: UserStory): Promise<void> {
    return Promise.resolve(undefined);
  }

}
