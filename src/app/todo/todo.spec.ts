import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });
  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'hello',
      complete: true,
    });
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
  it('should accept values in the constructor 2', () => {
    let todo = new Todo({
      title: 'Read SitePoint article',
      complete: false,
    });
    expect(todo.title).toEqual('Read SitePoint article');
    expect(todo.complete).toEqual(false);
  });
});
