export class Fetcher {
  async get(host, path) {
    const url = `http://${host}/${path}`;
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    throw Error(data);
  }

  async post(host, path, body, headers = {}) {
    const url = `http://${host}/${path}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    throw Error(data);
  }

  async put(host, path, body, headers = {}) {
    const url = `http://${host}/${path}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    throw Error(data);
  }

  async delete(host, path) {
    const url = `http://${host}/${path}`;
    const options = { method: 'DELETE' };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
      return data;
    }
    throw Error(data);
  }
}
