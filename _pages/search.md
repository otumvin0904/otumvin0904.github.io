---
layout: archive
title: "Search"
permalink: /search/
author_profile: false
---

<link rel="stylesheet" href="{{ '/assets/css/lab-home.css' | relative_url }}">

<div class="lab-search-page">

  <div class="lab-search-header">
    <h1>Search</h1>
    <p>나노분광학 연구실 홈페이지의 내용을 검색합니다.</p>
  </div>

  <div class="lab-search-box">
    <i class="fa-solid fa-magnifying-glass"></i>

    <input
      type="text"
      id="lab-search-input"
      placeholder="검색어를 입력하세요"
      autocomplete="off"
    >
  </div>

  <div id="lab-search-count"></div>

  <div id="lab-search-results"></div>

</div>


<script>
const searchData = [

{% assign search_pages = site.pages | where_exp: "item", "item.title" %}

{% for item in search_pages %}
{
    title: {{ item.title | jsonify }},
    url: {{ item.url | relative_url | jsonify }},
    content: {{ item.content | strip_html | strip_newlines | jsonify }}
},
{% endfor %}

{% for item in site.posts %}
{
    title: {{ item.title | jsonify }},
    url: {{ item.url | relative_url | jsonify }},
    content: {{ item.content | strip_html | strip_newlines | jsonify }}
},
{% endfor %}

{% for item in site.publications %}
{
    title: {{ item.title | jsonify }},
    url: {{ item.url | relative_url | jsonify }},
    content: {{ item.content | strip_html | strip_newlines | jsonify }}
},
{% endfor %}

];

const input = document.getElementById("lab-search-input");
const results = document.getElementById("lab-search-results");
const count = document.getElementById("lab-search-count");


function escapeHTML(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}


function runSearch() {

    const query = input.value
        .trim()
        .toLowerCase();

    results.innerHTML = "";

    if (query.length === 0) {
        count.textContent = "";
        return;
    }


    const matches = searchData.filter(item => {

        const title = (item.title || "").toLowerCase();
        const content = (item.content || "").toLowerCase();

        return (
            title.includes(query) ||
            content.includes(query)
        );

    });


    count.textContent = `${matches.length}개의 검색 결과`;


    if (matches.length === 0) {

        results.innerHTML = `
            <div class="lab-search-empty">
                검색 결과가 없습니다.
            </div>
        `;

        return;
    }


    matches.forEach(item => {

        let description = item.content || "";

        description = description
            .replace(/\s+/g, " ")
            .trim();

        if (description.length > 180) {
            description =
                description.substring(0, 180) + "...";
        }


        const result = document.createElement("a");

        result.href = item.url;

        result.className = "lab-search-result";

        result.innerHTML = `
            <div class="lab-search-result-title">
                ${escapeHTML(item.title || "Untitled")}
            </div>

            <div class="lab-search-result-description">
                ${escapeHTML(description)}
            </div>

            <div class="lab-search-result-url">
                ${escapeHTML(item.url)}
            </div>
        `;

        results.appendChild(result);

    });

}


input.addEventListener("input", runSearch);


/* 검색 페이지 접속 즉시 입력창 활성화 */
window.addEventListener("load", () => {
    input.focus();
});
</script>