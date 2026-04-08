import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    // реализуйте тест-кейс
    postsService.create(post);

    expect(postsService.find('2')).toEqual({
      id: '2',
      text: 'Mocked post',
      date: expect.any(String),
    });
  });

  it('should find a post', () => {
    // реализуйте тест-кейс
    postsService.find('1');

    expect(postsService.find('1')).toEqual({
      id: '1',
      text: 'Some pre-existing post',
      date: expect.any(String),
    });
  });
});