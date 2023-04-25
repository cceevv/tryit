import tryit from '../src/tryit'

describe('Await tryit test', () => {
  it('should return a value when resolved', async () => {
    const testInput = 1234;
    const promise = Promise.resolve(testInput);

    const [data, err] = await tryit<number>(promise);

    expect(err).toBeNull();
    expect(data).toEqual(testInput);
  });

  it('should return an error when promise is rejected', async () => {
    const promise = Promise.reject('Error');

    const [data, err] = await tryit<number>(promise);

    expect(err).toEqual('Error');
    expect(data).toBeUndefined();
  });


  it('should receive the type of the parent if no type was passed', async () => {
    let user: { name: string };
    let err: any;

    [user, err] = await tryit(Promise.resolve({ name: '123' }));

    expect(user.name).toEqual('123');
  });

  it('should return a value when there are no errors', async () => {
    const [data, err] = tryit(() => {
      return JSON.parse('{"a":1234, "b":"bbb"}')
    });

    expect(err).toBeNull();
    expect(data.a).toEqual(1234);
    expect(data.b).toEqual("bbb");
  });

  it('should return an Error when catching an error', async () => {
    const [data, err] = tryit(() => {
      return JSON.parse('xxxxxxxxxxx')
    });

    expect(err).toBeTruthy();
    expect(data).toBeUndefined();
  });

  it('should return nothing when wrong type argument input', async () => {
    // @ts-ignore
    const [data, err] = await tryit(1);

    expect(err).toBeNull();
    expect(data).toBeUndefined();
  });
});
