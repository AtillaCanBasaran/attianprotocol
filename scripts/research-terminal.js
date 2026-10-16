(function () {
    "use strict";

    var sources = [
        "/memory_node/attian/researchterminal/data/core-records.md",
        "/memory_node/attian/researchterminal/data/new-records.md"
    ];

    function textAfterMarker(section, marker, nextMarker) {
        var start = section.search(marker);
        if (start < 0) return "";
        var marked = section.slice(start).replace(marker, "").trim();
        if (!nextMarker) return marked;
        var end = marked.search(nextMarker);
        return (end < 0 ? marked : marked.slice(0, end)).trim();
    }

    function parseRecords(markdown) {
        return markdown.split(/\n(?=##\s+\d+\s+\/\/)/).map(function (section) {
            var header = section.match(/^##\s+(\d+)\s+\/\/\s+(.+)$/m);
            var title = section.match(/^###\s+(.+)$/m);
            if (!header || !title) return null;

            var commentMarker = /\*\*(?:LILI's comment|Admin comment):\*\*/i;
            return {
                sourceNumber: header[1],
                category: header[2].trim(),
                title: title[1].trim(),
                explanation: textAfterMarker(section, /\*\*Archive explanation:\*\*/i, /\*\*Subject storage format:\*\*/i),
                subject: textAfterMarker(section, /\*\*Subject storage format:\*\*/i, commentMarker),
                comment: textAfterMarker(section, commentMarker, null).split(/\n\s*---/)[0].trim()
            };
        }).filter(Boolean);
    }

    function appendParagraphs(container, text) {
        text.split(/\n\s*\n/).map(function (paragraph) { return paragraph.trim(); }).filter(Boolean).forEach(function (paragraph) {
            var item = document.createElement("p");
            item.textContent = paragraph;
            container.appendChild(item);
        });
    }

    function createPanel(label, className, content) {
        var panel = document.createElement("section");
        var heading = document.createElement("h3");
        panel.className = "research-record-panel " + className;
        heading.textContent = label;
        panel.appendChild(heading);
        appendParagraphs(panel, content);
        return panel;
    }

    function renderRecord(record, index) {
        var details = document.createElement("details");
        var summary = document.createElement("summary");
        var code = document.createElement("span");
        var title = document.createElement("b");
        var state = document.createElement("small");
        var body = document.createElement("div");
        var dossier = document.createElement("div");
        var comment = document.createElement("aside");
        var commentLabel = document.createElement("strong");
        var commentText = document.createElement("p");
        var recordCode = "RT-" + String(index + 1).padStart(3, "0");

        details.className = "research-log";
        details.dataset.tags = (record.category + " " + record.title + " " + record.explanation).toLowerCase();
        if (/(biology|physics|chemistry|cryo-em)/.test(details.dataset.tags)) details.dataset.tags += " science";
        details.dataset.record = recordCode;
        summary.className = "research-summary";
        code.textContent = recordCode + " // " + record.category;
        title.textContent = record.title;
        state.textContent = "open dossier";
        summary.append(code, title, state);

        body.className = "research-log-body";
        dossier.className = "research-dossier-grid";
        dossier.append(
            createPanel("ARCHIVE EXPLANATION", "research-explanation", record.explanation),
            createPanel("SUBJECT STORAGE FORMAT", "research-subject-format", record.subject)
        );
        comment.className = "research-admin";
        commentLabel.textContent = "ADMINISTRATOR REVIEW";
        commentText.textContent = record.comment;
        comment.append(commentLabel, commentText);
        body.append(dossier, comment);
        details.append(summary, body);

        details.addEventListener("toggle", function () {
            state.textContent = details.open ? "close dossier" : "open dossier";
        });
        return details;
    }

    function bindResearchControls(logs) {
        var searchInput = document.getElementById("researchSearch");
        var openButton = document.getElementById("researchOpenButton");
        var statusLine = document.getElementById("researchStatus");
        var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".research-filter-row button"));
        var activeFilter = "all";
        if (!searchInput || !openButton || !statusLine) return;

        function normalize(text) { return String(text || "").toLowerCase().trim(); }

        function applyResearchFilter(openFirst) {
            var query = normalize(searchInput.value);
            var visible = [];
            logs.forEach(function (log) {
                var tags = normalize(log.dataset.tags);
                var searchable = normalize(log.textContent + " " + tags);
                var filterMatch = activeFilter === "all" || tags.indexOf(activeFilter) !== -1;
                var queryMatch = !query || query.split(/\s+/).every(function (word) { return searchable.indexOf(word) !== -1; });
                log.hidden = !(filterMatch && queryMatch);
                if (!log.hidden) visible.push(log);
            });

            statusLine.textContent = visible.length
                ? "Displaying " + visible.length + " of " + logs.length + " research dossiers."
                : "NO MATCHES // The archive found nothing, which is not proof of innocence.";

            if (openFirst && visible[0]) {
                logs.forEach(function (log) { log.open = false; });
                visible[0].open = true;
                visible[0].scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }

        filterButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                activeFilter = button.dataset.filter;
                filterButtons.forEach(function (item) { item.classList.toggle("selected", item === button); });
                applyResearchFilter(false);
            });
        });
        searchInput.addEventListener("input", function () { applyResearchFilter(false); });
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") applyResearchFilter(true);
        });
        openButton.addEventListener("click", function () { applyResearchFilter(true); });
        applyResearchFilter(false);
    }

    function initResearchTerminal() {
        var library = document.getElementById("researchLibrary");
        var count = document.getElementById("researchRecordCount");
        var status = document.getElementById("researchStatus");
        if (!library) return;
        if (status) status.textContent = "Synchronizing research dossiers...";

        Promise.all(sources.map(function (source) {
            return fetch(source, { cache: "no-store" }).then(function (response) {
                if (!response.ok) throw new Error("Could not load " + source);
                return response.text();
            });
        })).then(function (documents) {
            var records = documents.reduce(function (all, documentText) {
                return all.concat(parseRecords(documentText));
            }, []);
            if (!records.length) throw new Error("No research records parsed");
            library.replaceChildren();
            records.forEach(function (record, index) { library.appendChild(renderRecord(record, index)); });
            if (count) count.textContent = String(records.length);
            bindResearchControls(Array.prototype.slice.call(library.querySelectorAll(".research-log")));
        }).catch(function () {
            var fallback = Array.prototype.slice.call(library.querySelectorAll(".research-log"));
            if (count) count.textContent = String(fallback.length);
            if (status) status.textContent = "SOURCE SYNC FAILED // displaying embedded fallback records.";
            bindResearchControls(fallback);
        });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initResearchTerminal);
    else initResearchTerminal();
}());
