(function () {
    window.ATTIAN_ARCHIVE_CONTENT = {
        /*
         * Manual content layer for generated archive pages.
         *
         * Add future Artifact Vault entries under `artifacts`.
         * Add future Creature Index entries under `creatures`.
         *
         * Image files are listed below so generated pages do not need to probe
         * dozens of missing filenames before rendering.
         *
         * Add future entries to the relevant list:
         * - artifactItems: "memory5", "drawing2", "mini4"
         * - creatureItems: 7
         *
         * Image filename patterns:
         * - Artifact restored image: /images/artifactvault/memory5.png
         * - Artifact optional source: /images/artifactvault/memory5_original.jpeg
         * - Creature restored image: /images/creatureindex/creature7.png
         * - Creature optional source: /images/creatureindex/creature7_original.jpeg
         *
         * The key must match the image family:
         * - memory5 metadata key: "memory5"
         * - drawing2 metadata key: "drawing2"
         * - mini4 metadata key: "mini4"
         * - creature7 metadata key: 7
         */
        artifactItems: ["drawing1", "memory1", "memory2", "memory3", "memory4", "mini1", "mini2", "mini3"],
        creatureItems: [1, 2, 3, 4, 5, 6],
        artifacts: {
            /*
            "memory5": {
                code: "PLACE-EXAMPLE-0001",
                title: "Example Memory Title",
                short: "short phrase / archive hook",
                category: "Special Places",
                collection: "Travel Records",
                status: "Recovered",
                type: "Memory image",
                timestamp: "2026",
                integrity: "Stable enough. Suspiciously dramatic.",
                archive: "One concise paragraph explaining what the object/place/image is and why it belongs in the archive.",
                note: "Administrator restoration note: Dry comment, small judgment, no generic scrapbook sentiment.",
                feature: "Daily featured text if this artifact is selected by the rotation."
            }
            */
        },
        creatures: {
            /*
            7: {
                code: "CRTR-FLD-0007",
                title: "CREATURE TITLE",
                subtitle: "SHORT TAXONOMIC INSULT",
                rarity: "RARE / SIDE QUEST ENCOUNTER",
                tags: ["FIELD", "PENDING", "SUSPICIOUS"],
                stats: { Power: 5, Speed: 5, Courage: 5, Wisdom: 5, Charisma: 5, Stealth: 5 },
                latin: "Invented latin-style name",
                inn: "Where encountered",
                size: "Small / medium / alarming",
                age: "Unknown",
                eyes: "What the eyes imply",
                fur: "Fur, feathers, shell, or other surface betrayal",
                skillSet: ["Skill One", "Skill Two", "Skill Three"],
                skillDetails: {
                    "Skill One": "Short, useful, mildly funny explanation of what happens.",
                    "Skill Two": "Short explanation for the second ability.",
                    "Skill Three": "Short explanation for the third ability."
                },
                professions: ["Quest Giver", "Local Problem"],
                abstract: "Short creature profile in archive voice.",
                questType: "SIDE QUEST",
                questStatus: "ACTIVE",
                questName: "Quest Name",
                questBehavior: "One clear objective the player can understand.",
                questReward: "A concrete, funny, or lore-relevant reward.",
                story: "Longer encounter record. Keep it vivid, but not infinite.",
                comment: "Administrator note: Final dry classification."
            }
            */
        }
    };
}());
