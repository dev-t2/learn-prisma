import faker from 'faker';

import * as U from './util';

export const randomId = () => faker.datatype.uuid();

export const randomName = () => faker.name.findName();

export const randomEmail = () => faker.internet.email();

export const randomAvatarUrl = (name?: string) =>
  U.avatarUriByName(name ?? randomName());

export const randomDate = () => faker.date.recent();

export const randomParagraphs = (count: number = 2) =>
  U.makeArray(count).map(faker.lorem.paragraph).join('\n');

export const ramdomImage = () =>
  U.unsplashUrl(U.ramdom(800, 1000), U.ramdom(800, 1000));
