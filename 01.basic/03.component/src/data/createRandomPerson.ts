import IPerson from './IPerson';
import * as F from './faker';
import * as U from './util';

const createRandomPerson = (): IPerson => ({
  id: F.randomId(),
  createdDate: F.randomDate(),
  modifiedDate: new Date(),
  name: F.randomName(),
  email: F.randomEmail(),
  avatar: F.randomAvatarUrl(),
  image: F.ramdomImage(),
  comments: F.randomParagraphs(4),
  counts: {
    comment: U.ramdom(10, 100),
    retweet: U.ramdom(10, 100),
    heart: U.ramdom(100, 1000),
  },
});

export default createRandomPerson;
