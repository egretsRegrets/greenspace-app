import { Greenspace, User } from './shared';

export interface AppStore {
    greenspaces: Greenspace[];
    users: User[];
}