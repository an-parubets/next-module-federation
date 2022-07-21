export const QUERY_KEY = ['data'];

export const fetchData = async () => {
  try {
    const request = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await request.json();
  } catch (e) {
    return { error: 'Error' };
  }
}
