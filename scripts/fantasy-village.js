(function () {
    var poiData = {
        tavern: {
            title: "The Tavern",
            summary: "Central rumor furnace. Side quests ferment here before pretending to be meaningful.",
            status: "Foundation placed",
            trouble: "Confessions, songs, questionable stew",
            hook: "Rumor board, NPC lines, visitor nonsense"
        },
        market: {
            title: "Market",
            summary: "Middle-left bargain zone. Half the stalls sell supplies; the other half sell problems with decorative wrapping.",
            status: "Merchant ghosts assembling",
            trouble: "Suspicious discounts, cursed trinkets, snack economics",
            hook: "Trading mini-events, artifact references, vendor gossip"
        },
        dock: {
            title: "Port / Dock",
            summary: "Lower-left escape route. Boats arrive with cargo, rumors, and exactly the sort of sea mist that hides bad decisions.",
            status: "Harbor ropes untangled",
            trouble: "Missing shipments, dramatic fog, fish with opinions",
            hook: "Travel board, imported quests, creature sightings"
        },
        cave: {
            title: "Cave",
            summary: "Upper-left darkness hole. The village insists it is perfectly normal. The cave has declined to comment.",
            status: "Echoes catalogued badly",
            trouble: "Glowing fungi, sealed noises, optional bravery",
            hook: "Dungeon entrance, corrupted loot, monster notices"
        },
        temple: {
            title: "Temple",
            summary: "Middle-top solemn building. Excellent acoustics for prophecy, denial, and MUSE whispering inappropriately loudly.",
            status: "Candles pretending to be stable",
            trouble: "Oaths, relics, divine paperwork",
            hook: "Blessings, moral choices, archive shrine fragments"
        },
        forest: {
            title: "Forest",
            summary: "Right-top green uncertainty. Trees are watching. Not maliciously. Probably just bored.",
            status: "Paths rearranging politely",
            trouble: "Friendly monsters, lost notes, suspicious mushrooms",
            hook: "Creature encounters, gathering routes, quiet field notes"
        },
        workshop: {
            title: "Workshop",
            summary: "Right-middle invention hazard. If something explodes here, everyone will claim it was intentional prototyping.",
            status: "Tools humming without approval",
            trouble: "Crafting accidents, upgrades, tiny mechanical grudges",
            hook: "Crafting quests, item repairs, experimental devices"
        },
        cemetery: {
            title: "Cemetery",
            summary: "Bottom-right silence district. It is peaceful in the way that suggests the peace has terms and conditions.",
            status: "Names waiting in the soil",
            trouble: "Old promises, grave markers, moonlit side quests",
            hook: "Memory quests, ghost rumors, sealed village history"
        }
    };

    function initVillageMap() {
        var panel = document.getElementById("villagePoiPanel");
        var points = Array.prototype.slice.call(document.querySelectorAll(".village-poi"));
        if (!panel || !points.length) return;

        var title = panel.querySelector("h2");
        var summary = panel.querySelector(".village-panel-summary");
        var fields = Array.prototype.slice.call(panel.querySelectorAll("dd"));

        function selectPoi(key) {
            var data = poiData[key] || poiData.tavern;

            points.forEach(function (point) {
                point.classList.toggle("is-selected", point.getAttribute("data-poi") === key);
            });

            title.textContent = data.title;
            summary.textContent = data.summary;
            fields[0].textContent = data.status;
            fields[1].textContent = data.trouble;
            fields[2].textContent = data.hook;
        }

        points.forEach(function (point) {
            point.addEventListener("click", function () {
                selectPoi(point.getAttribute("data-poi"));
            });

            point.addEventListener("keydown", function (event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    selectPoi(point.getAttribute("data-poi"));
                }
            });
        });
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initVillageMap);
    else initVillageMap();
}());
