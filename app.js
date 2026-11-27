"use strict";

const icons = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
  pin: '<path d="M20 10c0 5-8 10-8 10s-8-5-8-10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/>',
  bookmark: '<path d="M6 20V4h12v16l-6-4Z"/>',
  arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
  shuffle: '<path d="M3 6h3c4 0 8 12 12 12h3m-4-4 4 4-4 4M3 18h3c4 0 8-12 12-12h3m-4-4 4 4-4 4"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2l-5-4.9 6.9-1Z"/>',
  spark: '<path d="M12 2c0 6-4 10-10 10 6 0 10 4 10 10 0-6 4-10 10-10-6 0-10-4-10-10Z"/>',
  flag: '<path d="M5 22V3m0 2c6-4 8 4 14 0v10c-6 4-8-4-14 0"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>'
};
function icon(name) {
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
}
document.querySelectorAll("[data-icon]").forEach((element) => {
  element.innerHTML = icon(element.dataset.icon);
});

const dishes = [
  {
    id: 1, name: "番茄牛腩饭", price: 16, canteen: "一食堂", window: "一楼 · 03 牛腩饭",
    spice: "不辣", queue: "8–12 分钟", fresh: true, badge: "新菜上架",
    note: "牛腩炖得软，番茄汁拌饭很下饭。",
    tip: "11:40 前到，出餐更快。番茄汁可单盛，想吃干爽一点的米饭可以提前说。",
    reviews: [["阿柚", 5, "酸甜刚好，牛腩不是碎肉，午休愿意再来。"], ["饭卡还有十块", 4, "中午等了约十分钟，汤汁偏多，建议要个小碗。"], ["小斐", 5, "很适合想吃热乎又不想吃辣的时候。"]]
  },
  {
    id: 2, name: "黑椒鸡腿饭", price: 14, canteen: "二食堂", window: "一楼 · 06 铁板饭",
    spice: "微辣", queue: "6–10 分钟", badge: "口碑推荐",
    note: "去骨鸡腿好入口，打包也方便。",
    tip: "饭量小可以在下单时说少饭。黑胡椒味明显，怕辣可以让窗口少放酱。",
    reviews: [["饼同学", 5, "鸡腿皮有一点焦香，配青菜不会太腻。"], ["晚八点下课", 5, "打包十分钟走到寝室，鸡肉还嫩。"], ["芋泥", 4, "饭挺多，黑椒味对我来说有点重。"]]
  },
  {
    id: 3, name: "麻辣拌", price: 18, canteen: "三食堂", window: "二楼 · 12 自选麻辣拌",
    spice: "中辣", queue: "18–25 分钟", caution: true, badge: "高峰排队长",
    note: "午饭高峰排队久，自选称重容易超预算。",
    tip: "12:00–12:40 等得最久。赶课可换二食堂担担面，想试这家可避开高峰并先确认称重价格。",
    alternative: 5,
    reviews: [["赶课的陆同学", 2, "12:15 排了二十多分钟，差点迟到。"], ["豆皮爱好者", 4, "酱料好吃，错过饭点来的话基本不用排。"], ["饭卡还有十块", 3, "选了很多吸水的菜，称完比想象中贵。"]]
  },
  {
    id: 4, name: "酸汤水饺", price: 12, canteen: "一食堂", window: "二楼 · 08 手工水饺",
    spice: "微辣", queue: "5–8 分钟", fresh: true, badge: "新菜上架",
    note: "一碗十只，酸汤开胃，适合想换口味的时候。",
    tip: "醋和辣油可分开放。想喝原味汤可以选清汤做法。",
    reviews: [["铃铛", 5, "汤很香，加点醋之后刚好。"], ["早八生存指南", 4, "十个对我有点少，配一份小菜就够了。"], ["阿柚", 4, "水饺皮不厚，下雨天吃挺舒服。"]]
  },
  {
    id: 5, name: "担担面", price: 10, canteen: "二食堂", window: "二楼 · 09 川味面档",
    spice: "中辣", queue: "4–7 分钟", badge: "¥12 以内",
    note: "花生香浓，出餐快，赶课可以来这档。",
    tip: "含花生，介意的话请在点餐前询问窗口。取餐后趁热拌开，口感更好。",
    reviews: [["圆圆", 5, "赶课的时候来过几次，都挺快。"], ["唐小同学", 4, "面有嚼劲，辣油很香，建议先尝一点再拌。"], ["芋泥", 4, "芝麻和花生味都很明显。"]]
  },
  {
    id: 6, name: "照烧豆腐碗", price: 13, canteen: "三食堂", window: "一楼 · 02 素菜碗",
    spice: "不辣", queue: "7–10 分钟", caution: true, badge: "晚来容易售罄",
    note: "晚餐时段常早早卖完，想吃可以早点去。",
    tip: "示例点评反馈 18:20 后容易售罄。晚一点可先去一食堂看看番茄牛腩饭。",
    alternative: 1,
    reviews: [["小姜", 5, "酱汁浓但不咸，豆腐表皮有点焦香。"], ["栗子", 3, "晚上六点半到的时候已经卖完了。"], ["饼同学", 4, "中午买到了，配菜还挺新鲜。"]]
  }
];

const storageKey = "fandianjian-v1";
function loadPersonalData() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(data?.favorites) && data.reviews && typeof data.reviews === "object") return data;
  } catch {
    // The menu still works if access to browser storage is restricted.
  }
  return { favorites: [], reviews: {} };
}
const personal = loadPersonalData();
const state = { mode: "all", openDish: null, previousFocus: null, toastTimeout: null };

const menu = document.querySelector("#menu");
const dishGrid = document.querySelector("#dish-grid");
const controls = Object.fromEntries(
  ["search", "canteen", "budget", "spice", "sort"].map((id) => [id, document.getElementById(id)])
);
const dialog = document.querySelector("#detail");
const detailBody = document.querySelector("#detail-body");
const toast = document.querySelector("#toast");

const views = {
  all: ["发现菜品", "按口味和预算，找到今天想吃的一餐。"],
  new: ["新菜上架", "看看食堂最近添了什么。"],
  recommended: ["口碑推荐", "查看示例评分达到 4.3 分且暂无避雷提示的菜品。"],
  caution: ["避雷指南", "看看同学遇到过哪些问题，以及怎么点更合适。"],
  saved: ["我的收藏", "留着下次吃。收藏保存在当前浏览器。"]
};
function ratingFor(dish) {
  return (dish.reviews.reduce((sum, review) => sum + review[1], 0) / dish.reviews.length).toFixed(1);
}
function filteredDishes() {
  const query = controls.search.value.trim().toLocaleLowerCase();
  const budget = Number(controls.budget.value);
  const matchMode = {
    all: () => true,
    new: (dish) => dish.fresh,
    recommended: (dish) => !dish.caution && Number(ratingFor(dish)) >= 4.3,
    caution: (dish) => dish.caution,
    saved: (dish) => personal.favorites.includes(dish.id)
  };
  const matching = dishes.filter((dish) =>
    matchMode[state.mode](dish)
    && (!controls.canteen.value || dish.canteen === controls.canteen.value)
    && (!controls.spice.value || dish.spice === controls.spice.value)
    && (!budget || dish.price <= budget)
    && `${dish.name} ${dish.canteen} ${dish.window}`.toLocaleLowerCase().includes(query)
  );
  const sorter = {
    default: (a, b) => a.id - b.id,
    rating: (a, b) => Number(ratingFor(b)) - Number(ratingFor(a)),
    price: (a, b) => a.price - b.price,
    reviews: (a, b) => (b.reviews.length + Number(Boolean(personal.reviews[b.id]))) - (a.reviews.length + Number(Boolean(personal.reviews[a.id])))
  };
  return matching.sort(sorter[controls.sort.value]);
}

function badgeFor(dish) {
  const style = dish.caution ? "caution" : dish.fresh ? "new" : "";
  return `<span class="tag ${style}">${dish.badge}</span>`;
}
function saveButton(dish, card = false) {
  const saved = personal.favorites.includes(dish.id);
  const label = saved ? "取消收藏" : "收藏";
  return `<button class="${card ? "icon-button card-bookmark" : "button button-light"}" type="button" data-action="save" data-id="${dish.id}" aria-label="${label}${dish.name}" aria-pressed="${saved}">${icon("bookmark")}${card ? "" : label}</button>`;
}
function cardMarkup(dish) {
  return `<article class="card">
    <div class="card-cover">
      <img class="card-image" src="./assets/dish-${dish.id}.webp" alt="" loading="lazy">
      ${badgeFor(dish)}
      ${saveButton(dish, true)}
    </div>
    <div class="card-body">
      <div class="card-heading">
        <h3><button class="card-name" type="button" data-action="detail" data-id="${dish.id}" aria-haspopup="dialog">${dish.name}</button></h3>
        <span class="price">¥${dish.price}</span>
      </div>
      <p class="card-location">${icon("pin")} ${dish.canteen} · ${dish.window}</p>
      <p class="card-note ${dish.caution ? "warning" : ""}">${dish.note}</p>
      <div class="card-bottom">
        <span class="rating">${icon("star")} <strong>${ratingFor(dish)}</strong>· ${dish.reviews.length} 条点评</span>
        <span>${dish.spice}</span>
      </div>
    </div>
  </article>`;
}
function render() {
  const [title, description] = views[state.mode];
  document.querySelector("#menu-title").textContent = title;
  document.querySelector("#section-description").textContent = description;
  const matching = filteredDishes();
  document.querySelector("#result-count").textContent = `共 ${matching.length} 道菜`;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.mode === state.mode));
  });
  document.querySelectorAll(".site-header [data-nav]").forEach((button) => {
    const active = ["all", "new", "recommended"].includes(state.mode) ? "all" : state.mode;
    if (button.dataset.nav === active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  const counter = document.querySelector("#saved-count");
  counter.textContent = personal.favorites.length;
  counter.hidden = personal.favorites.length === 0;
  if (matching.length) {
    dishGrid.innerHTML = matching.map(cardMarkup).join("");
    return;
  }
  const noFavorites = state.mode === "saved" && personal.favorites.length === 0;
  dishGrid.innerHTML = `<div class="empty">
    <strong>${noFavorites ? "还没有收藏" : "没找到符合条件的菜"}</strong>
    <p>${noFavorites ? "点菜品卡片右上角的书签，就能把它留在这里。" : "试试换个关键词，或放宽预算和口味。"}</p>
    <button class="button button-light" type="button" data-action="${noFavorites ? "discover" : "reset"}">${noFavorites ? "去发现菜品" : "清空筛选"}</button>
  </div>`;
}
function resetControls() {
  Object.values(controls).forEach((control) => {
    if (control.tagName === "SELECT") control.selectedIndex = 0;
    else control.value = "";
  });
}
function changeView(mode, clear = false) {
  state.mode = mode;
  if (clear) resetControls();
  render();
}
function savePersonalData() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(personal));
    return true;
  } catch {
    return false;
  }
}
function notify(message) {
  window.clearTimeout(state.toastTimeout);
  toast.hidden = false;
  toast.textContent = message;
  state.toastTimeout = window.setTimeout(() => { toast.hidden = true; }, 2600);
}
function toggleSaved(dish, source) {
  const saved = personal.favorites.includes(dish.id);
  personal.favorites = saved
    ? personal.favorites.filter((id) => id !== dish.id)
    : [...personal.favorites, dish.id];
  const persisted = savePersonalData();
  render();
  for (const button of detailBody.querySelectorAll('[data-action="save"]')) {
    button.outerHTML = saveButton(dish);
  }
  const container = dialog.open ? detailBody : dishGrid;
  const replacement = container.querySelector(`[data-action="save"][data-id="${dish.id}"]`);
  if (source) (replacement ?? dishGrid.querySelector("button") ?? document.querySelector(".saved-button")).focus();
  const action = saved ? "已取消收藏" : "已收藏";
  if (dialog.open) setDetailStatus(persisted ? action : action + "，刷新后会恢复原状态");
  else notify(persisted ? action : action + "，刷新后会恢复原状态");
}
function reviewMarkup(reviews) {
  return reviews.map(([name, score, comment]) => `<article class="review">
    <header><strong>${name}</strong><span class="review-score">${score} / 5</span></header>
    <p>${comment}</p>
  </article>`).join("");
}
function setDetailStatus(message) {
  detailBody.querySelector("#detail-status").textContent = message;
}
function renderPersonalReview(dish) {
  const stored = personal.reviews[dish.id];
  if (!stored || typeof stored.comment !== "string") return;
  const display = detailBody.querySelector("#personal-review");
  display.hidden = false;
  display.querySelector(".review-score").textContent = `${stored.score} / 5`;
  display.querySelector("p").textContent = stored.comment;
  const form = detailBody.querySelector("#review-form");
  form.elements.score.value = String(stored.score);
  form.elements.comment.value = stored.comment;
  detailBody.querySelector('[data-action="write"]').textContent = "编辑我的点评";
}
function openDish(dish, opener) {
  if (!dialog.open) {
    state.previousFocus = { element: opener, id: dish.id, action: opener?.dataset.action };
  }
  state.openDish = dish;
  const alternative = dishes.find((item) => item.id === dish.alternative);
  detailBody.innerHTML = `
    <img class="detail-image" src="./assets/dish-${dish.id}.webp" alt="">
    <div class="detail-content">
      ${badgeFor(dish)}
      <h2 id="detail-title">${dish.name}</h2>
      <p class="detail-meta">${dish.canteen} · ${dish.window} · ${ratingFor(dish)} 分（${dish.reviews.length} 条示例点评）</p>
      <dl class="detail-facts">
        <div><dt>参考价格</dt><dd>¥${dish.price}</dd></div>
        <div><dt>口味</dt><dd>${dish.spice}</dd></div>
        <div><dt>排队参考</dt><dd>${dish.queue}</dd></div>
      </dl>
      <div class="detail-tip ${dish.caution ? "warning" : ""}">
        <strong>${dish.caution ? "避雷提示" : "点餐建议"}</strong>
        <p>${dish.tip}</p>
        ${alternative ? `<button class="button button-light" type="button" data-action="detail" data-id="${alternative.id}">看看备选 · ${alternative.name} ${icon("arrow")}</button>` : ""}
      </div>
      <div class="detail-actions">
        ${saveButton(dish)}
        <button class="button button-green" type="button" data-action="write" aria-expanded="false" aria-controls="review-form">写点评</button>
      </div>
      <div id="detail-status" role="status"></div>
      <form class="review-form" id="review-form" hidden>
        <label for="score">你的评分</label>
        <select name="score" id="score" required>
          <option value="">选 1–5 分</option>
          <option value="5">5 分 · 想再吃</option><option value="4">4 分 · 会推荐</option>
          <option value="3">3 分 · 还可以</option><option value="2">2 分 · 有点踩雷</option>
          <option value="1">1 分 · 不会再点</option>
        </select>
        <label for="comment">用餐感受</label>
        <textarea id="comment" name="comment" required maxlength="160" placeholder="口味怎么样？什么时候去的，排了多久？"></textarea>
        <p>最多 160 字，点评仅保存在当前浏览器。</p>
        <button class="button button-green" type="submit">保存我的点评</button>
      </form>
      <h3>同学点评</h3>
      <article class="review" id="personal-review" hidden>
        <header><strong>我的点评 · 仅自己可见</strong><span class="review-score"></span></header><p></p>
      </article>
      ${reviewMarkup(dish.reviews)}
    </div>`;
  renderPersonalReview(dish);
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  document.querySelector("#close-detail").focus();
}
function handleAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const dish = dishes.find((item) => item.id === Number(button.dataset.id));
  switch (button.dataset.action) {
    case "save":
      toggleSaved(dish, button);
      break;
    case "detail":
      openDish(dish, button);
      break;
    case "write": {
      const form = detailBody.querySelector("#review-form");
      form.hidden = !form.hidden;
      button.setAttribute("aria-expanded", String(!form.hidden));
      if (!form.hidden) form.elements.score.focus();
      break;
    }
    case "discover":
      changeView("all", true);
      controls.search.focus();
      break;
    case "reset":
      resetControls();
      render();
      controls.search.focus();
      break;
  }
}
dishGrid.addEventListener("click", handleAction);
detailBody.addEventListener("click", handleAction);

detailBody.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const comment = form.elements.comment.value.trim();
  if (!comment) {
    form.elements.comment.setCustomValidity("请输入有效的用餐感受。");
    form.elements.comment.reportValidity();
    return;
  }
  personal.reviews[state.openDish.id] = { score: Number(form.elements.score.value), comment };
  const persisted = savePersonalData();
  renderPersonalReview(state.openDish);
  render();
  form.hidden = true;
  const button = detailBody.querySelector('[data-action="write"]');
  button.setAttribute("aria-expanded", "false");
  button.focus();
  setDetailStatus(persisted ? "已保存点评，仅自己可见" : "已记录点评，刷新后将丢失");
});
detailBody.addEventListener("input", ({ target }) => {
  if (target.name === "comment") target.setCustomValidity("");
});
document.querySelector("#close-detail").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  const previous = state.previousFocus;
  const available = previous?.element?.isConnected ? previous.element : dishGrid.querySelector(`[data-action="${previous?.action}"][data-id="${previous?.id}"]`);
  (available ?? controls.search).focus();
  state.openDish = null;
});
document.querySelectorAll("[data-nav]").forEach((button) => {
  button.addEventListener("click", () => {
    changeView(button.dataset.nav, true);
    menu.scrollIntoView({ block: "start" });
  });
});
document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => changeView(button.dataset.mode));
});
Object.values(controls).forEach((control) => {
  control.addEventListener(control === controls.search ? "input" : "change", render);
});
document.querySelector(".hero-photo").addEventListener("click", handleAction);
document.querySelector("#surprise").addEventListener("click", (event) => {
  const candidates = filteredDishes().filter((dish) => !dish.caution);
  if (!candidates.length) {
    notify("当前筛选下暂无推荐，换个条件再试试。");
    return;
  }
  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  openDish(choice, event.currentTarget);
});
render();
