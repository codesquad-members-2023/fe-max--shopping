import { random } from "./common.js";

function _generateUrlFunc(path, option) {
  const baseUrl = "http://localhost:3000";

  async function func({ body, params }) {
    if (body) option.body = JSON.stringify(body);
    const url = new URL(path, baseUrl);
    if (params) {
      params.forEach(([name, value]) => {
        url.searchParams.set(name, value);
      });
    }
    option = {
      ...option,
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "manual",
    };
    return fetch(url, option).then((res) => res.json());
  }

  return func;
}

export const addKeyword = _generateUrlFunc("/history", {
  method: "POST",
});

export async function checkKeyword(keyword) {
  const find = await _generateUrlFunc("/history", {
    method: "GET",
  })({
    params: [["keyword", keyword]],
  });
  return !!find.length;
}

function keywordSortFunc(a, b) {
  const lenFrontA = a.split(this)[0].length;
  const lenFrontB = b.split(this)[0].length;
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
  const find = await _generateUrlFunc("/history", {
    method: "GET",
  })({
    params: [
      ["q", str],
      ["_limit", limit ? limit : FIND_LIMIT],
    ],
  });
  return find.map((v) => v.keyword).sort(keywordSortFunc.bind(str));
}

export const getRandomKeywords = async (limit) => {
  const FIND_LIMIT = 10;
  const last = await _generateUrlFunc("/history", {
    method: "GET",
  })({
    params: [
      ["_sort", "id"],
      ["_order", "desc"],
      ["_limit", 1],
    ],
  });
  if (!last.length) return [];
  const { id } = last[0];
  const set = new Set();
  const baseLine = Math.min(id, limit, FIND_LIMIT);
 
  while (set.size < baseLine) {
    set.add(random(1, id + 1));
  }

  const randomKeywords = await Promise.all(
    Array.from(set).map(async (id) => _generateUrlFunc(`/history/${id}`)({}))
  );

  return randomKeywords.map((v) => v.keyword);
};

export const getState = _generateUrlFunc("/state", { method: "GET" });
