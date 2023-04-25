import tryit from "@cceevv/tryit";

function syncDemo() {
  const [data, err] = tryit(() => {
    return JSON.parse('--------{"a":1234, "b":"bbb"}')
  })
  if (err) {
    console.log('xxxxxxxxxx', err)
    return;
  }
  console.log('handle data...', data)
}

async function asyncDemo() {
  const promise = new Promise((resolve, reject) => {
    resolve('resolve data');
    // reject('reject error');
  })

  const [data, err] = await tryit(promise);
  if (err) {
    console.log('xxxxxxxxxx', err)
    return;
  }
  console.log('handle data...', data)
}
