import {InjectionToken} from "@angular/core";
import {UserStoryRepository} from "../../features/user-story/domain/user-story-repository";

export const USER_STORY_REPOSITORY = new InjectionToken<UserStoryRepository>('UserStoryRepository')
