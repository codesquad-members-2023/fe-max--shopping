import { random } from "./common.js";

function generateUrlFunc(endpoint, baseOptions) {
  const baseUrl = "http://localhost:3000";

  async function fetchJson({ body, params }) {

    const url = new URL(endpoint, baseUrl);

    if (params) {
      for (const [name, value] of Object.entries(params)) {
        url.searchParams.set(name, value);
      }
    }

    const options = {
      ...baseOptions,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "manual",
    };

    if (body) options.body = JSON.stringify(body);
    
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("Oops, we haven't got JSON!");
    }

    const json = await response.json();

    return json;
  }

  return fetchJson;
}

export const addKeyword = generateUrlFunc("/history", {
  method: "POST",
});

export async function checkKeyword(keyword) {
  const find = await generateUrlFunc("/history", {
    method: "GET",
  })({
    params: { keyword },
  });

  return !!find.length;
}

function keywordSortFunc(str, a, b) {
  const lenFrontA = a.split(str)[0].length;
  const lenFrontB = b.split(str)[0].length;

  if (lenFrontA !== lenFrontB) {
    return lenFrontA - lenFrontB;
  }
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a < b;
}

export async function getAutoCompletedKeywords(str, limit) {
  const FIND_LIMIT = 10;
  const find = await generateUrlFunc("/history", {
    method: "GET",
  })({
    params: {
      q: str,
      _limit: limit ? limit : FIND_LIMIT,
    },
  });

  return find.map((v) => v.keyword).sort((a, b) => keywordSortFunc(str, a, b));
}

export const getRandomKeywords = async (limit) => {
  const FIND_LIMIT = 10;
  const last = await generateUrlFunc("/history", {
    method: "GET",
  })({
    params: {
      _sort: "id",
      _order: "desc",
      _limit: 1,
    },
  });

  if (!last.length) return [];

  const { id } = last[0];
  const set = new Set();

  const baseLine = Math.min(id, limit, FIND_LIMIT);

  while (set.size < baseLine) {
    set.add(random(1, id + 1));
  }

  const randomKeywords = await Promise.all(
    Array.from(set).map(async (id) =>
      generateUrlFunc(`/history/${id}`, { method: "GET" })({})
    )
  );

  return randomKeywords.map((v) => v.keyword);
};

export const getState = async () => {
  return await generateUrlFunc("/state", { method: "GET" })({});
};

export const getCategory = async (categoryId) => {
  return await generateUrlFunc(`/category/${categoryId}`, { method: "GET" })(
    {}
  );
};
