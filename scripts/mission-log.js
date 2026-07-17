(function () {
    "use strict";

    const board = document.querySelector(".quest-board");
    const cards = Array.from(document.querySelectorAll(".quest-card[data-category]"));
    const search = document.getElementById("questSearch");
    const categoryBar = document.getElementById("questCategoryBar");
    const trackedFilter = document.getElementById("trackedQuestFilter");
    const filterStatus = document.getElementById("questFilterStatus");

    if (!board || !cards.length || !search || !categoryBar || !trackedFilter || !filterStatus) {
        return;
    }

    const storageKey = "attian-mission-log-v1";
    const categoryNames = {
        main: "Main Quest",
        side: "Side Quest",
        crafting: "Crafting Quest",
        multiplayer: "Multiplayer Quest",
        world: "World Quest",
        corrupted: "Corrupted Quest"
    };
    const categorySearchTerms = {
        main: "main primary campaign",
        side: "side optional mission",
        crafting: "crafting craft build maker",
        multiplayer: "multiplayer social party people",
        world: "world exploration wilderness travel",
        corrupted: "corrupted muse nonsense chaos absurd"
    };

    let activeCategory = "all";
    let trackedOnly = false;
    let journal = loadJournal();

    const emptyState = document.createElement("p");
    emptyState.className = "quest-empty-state";
    emptyState.hidden = true;
    emptyState.textContent = "NO QUESTS FOUND // The archive checked twice. MUSE checked under the keyboard.";
    board.appendChild(emptyState);

    function loadJournal() {
        try {
            return JSON.parse(localStorage.getItem(storageKey)) || {};
        } catch (error) {
            return {};
        }
    }

    function saveJournal() {
        try {
            localStorage.setItem(storageKey, JSON.stringify(journal));
        } catch (error) {
            // Tracking still works for this visit when storage is unavailable.
        }
    }

    function getQuestState(questId, objectiveCount) {
        const saved = journal[questId] || {};
        const objectives = Array.from({ length: objectiveCount }, function (_, index) {
            return Boolean(saved.objectives && saved.objectives[index]);
        });

        journal[questId] = {
            tracked: Boolean(saved.tracked),
            objectives: objectives
        };

        return journal[questId];
    }

    function updateQuest(card) {
        const questId = card.dataset.questId;
        const state = journal[questId];
        const checkboxes = Array.from(card.querySelectorAll(".quest-objective-check"));
        const completed = checkboxes.filter(function (checkbox) { return checkbox.checked; }).length;
        const total = checkboxes.length;
        const isComplete = total > 0 && completed === total;
        const trackButton = card.querySelector(".quest-track-button");
        const progressText = card.querySelector(".quest-progress-text");
        const summaryProgress = card.querySelector(".quest-summary-progress");

        card.classList.toggle("quest-complete", isComplete);
        card.classList.toggle("quest-tracked", state.tracked);
        trackButton.setAttribute("aria-pressed", String(state.tracked));
        trackButton.textContent = state.tracked ? "[ x ] TRACKING QUEST" : "[ + ] TRACK QUEST";
        progressText.textContent = completed + " / " + total + " objectives complete";
        summaryProgress.textContent = (isComplete ? "COMPLETE // " : state.tracked ? "TRACKED // " : "PROGRESS // ") + completed + "/" + total;
    }

    cards.forEach(function (card) {
        const category = card.dataset.category;
        const categoryName = categoryNames[category] || "Unsorted Quest";
        const questIdNode = card.querySelector(".quest-id");
        const questId = questIdNode ? questIdNode.textContent.trim() : "QUEST-" + Math.random().toString(36).slice(2);
        const meta = card.querySelector(".quest-meta");
        const grid = card.querySelector(".quest-grid");
        const objectiveItems = Array.from(card.querySelectorAll(".quest-grid section:first-child li"));
        const state = getQuestState(questId, objectiveItems.length);

        card.dataset.questId = questId;
        card.dataset.search = (card.textContent + " " + categoryName + " " + categorySearchTerms[category]).toLowerCase();

        const categoryTag = document.createElement("small");
        categoryTag.className = "quest-category-tag";
        categoryTag.textContent = categoryName;
        meta.insertBefore(categoryTag, meta.children[1] || null);

        const summaryProgress = document.createElement("small");
        summaryProgress.className = "quest-summary-progress";
        meta.appendChild(summaryProgress);

        const tracker = document.createElement("div");
        tracker.className = "quest-tracker";
        tracker.innerHTML = '<button type="button" class="quest-track-button" aria-pressed="false"></button><span class="quest-progress-text"></span>';
        card.insertBefore(tracker, grid);

        objectiveItems.forEach(function (item, index) {
            const objectiveText = item.textContent.trim();
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            const text = document.createElement("span");

            label.className = "quest-objective";
            checkbox.className = "quest-objective-check";
            checkbox.type = "checkbox";
            checkbox.checked = state.objectives[index];
            checkbox.setAttribute("aria-label", "Complete objective: " + objectiveText);
            text.textContent = objectiveText;
            label.append(checkbox, text);
            item.textContent = "";
            item.appendChild(label);

            checkbox.addEventListener("change", function () {
                state.objectives[index] = checkbox.checked;
                if (checkbox.checked) {
                    state.tracked = true;
                }
                saveJournal();
                updateQuest(card);
                applyFilters();
            });
        });

        tracker.querySelector(".quest-track-button").addEventListener("click", function () {
            state.tracked = !state.tracked;
            saveJournal();
            updateQuest(card);
            applyFilters();
        });

        updateQuest(card);
    });

    Array.from(categoryBar.querySelectorAll("[data-quest-filter]")).forEach(function (button) {
        const category = button.dataset.questFilter;
        const count = category === "all"
            ? cards.length
            : cards.filter(function (card) { return card.dataset.category === category; }).length;
        const countNode = document.createElement("span");
        countNode.className = "quest-filter-count";
        countNode.textContent = count;
        button.appendChild(countNode);

        button.addEventListener("click", function () {
            activeCategory = category;
            categoryBar.querySelectorAll("[data-quest-filter]").forEach(function (candidate) {
                const selected = candidate === button;
                candidate.classList.toggle("active", selected);
                candidate.setAttribute("aria-pressed", String(selected));
            });
            applyFilters();
        });
    });

    trackedFilter.addEventListener("click", function () {
        trackedOnly = !trackedOnly;
        trackedFilter.classList.toggle("active", trackedOnly);
        trackedFilter.setAttribute("aria-pressed", String(trackedOnly));
        trackedFilter.textContent = trackedOnly ? "[ x ] TRACKED ONLY" : "[ ] TRACKED ONLY";
        applyFilters();
    });

    search.addEventListener("input", applyFilters);

    function applyFilters() {
        const query = search.value.trim().toLowerCase();
        let visible = 0;

        cards.forEach(function (card) {
            const state = journal[card.dataset.questId];
            const categoryMatch = activeCategory === "all" || card.dataset.category === activeCategory;
            const searchMatch = !query || card.dataset.search.includes(query);
            const trackedMatch = !trackedOnly || state.tracked;
            const show = categoryMatch && searchMatch && trackedMatch;
            card.hidden = !show;
            if (show) {
                visible += 1;
            }
        });

        emptyState.hidden = visible !== 0;
        const categoryLabel = activeCategory === "all" ? "all categories" : categoryNames[activeCategory].toLowerCase() + "s";
        const trackedLabel = trackedOnly ? " tracked" : "";
        const searchLabel = query ? ' matching "' + search.value.trim() + '"' : "";
        filterStatus.textContent = "SHOWING " + visible + " / " + cards.length + trackedLabel.toUpperCase() + " QUESTS // " + categoryLabel.toUpperCase() + searchLabel;
    }

    saveJournal();
    applyFilters();
}());
