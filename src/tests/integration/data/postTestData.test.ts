
class postTestData {

    /*
     * Valid active puzzles and corresponding responses
     */

    static puzzle1 = "310084002200150006570003010423708095760030000009562030050006070007000900000001500";
    static puzzle2 = "030000506000098071000000490009800000002010000380400609800030960100000004560982030";
    static puzzle3 = "130000506000098071000000490009800000002010000380400609800030960100000004560982030"
    static puzzle2Move1 = "036000506000098071000000490009800000002010000380400609800030960100000004560982130";
    static puzzle2Notes1 = "100000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzle3Move1 = "130400506000098071000000490009800000002010000380400609800030960100000004560982130";
    static puzzle3Notes1 = "100000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzle2Move2 = "130000506000098071000000490009800000002010000380400609800030960103000004560982130";
    static puzzle2Notes2 = "100000010010101011111111111111111111111100000000000000001110000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";
    static puzzle3Move2 = "132000506000098071000000490009800000002010000380400609800030960103000004560982130";
    static puzzle3Notes2 = "110000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001";


    static activePuzzle1 = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
    };

    static activePuzzle1Response = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "currentTime": 0,
        "moves": [],
        "numHintsAskedFor": 0,
        "numWrongCellsPlayed": 0,
        "_id": "ID",
        "__v": 0
    };

    static activePuzzle2 = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle2,
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle2Move1,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes1
        },{
            "puzzleCurrentState": postTestData.puzzle2Move2,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes2
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 11,
            "HIDDEN_SINGLE": 11,
            "NAKED_PAIR": 11,
            "NAKED_TRIPLET": 11,
            "NAKED_QUADRUPLET": 11,
            "NAKED_QUINTUPLET": 11,
            "NAKED_SEXTUPLET": 11,
            "NAKED_SEPTUPLET": 11,
            "NAKED_OCTUPLET": 11,
            "HIDDEN_PAIR": 11,
            "HIDDEN_TRIPLET": 11,
            "HIDDEN_QUADRUPLET": 11,
            "HIDDEN_QUINTUPLET": 11,
            "HIDDEN_SEXTUPLET": 11,
            "HIDDEN_SEPTUPLET": 11,
            "HIDDEN_OCTUPLET": 11,
            "POINTING_PAIR": 11,
            "POINTING_TRIPLET": 11,
            "BOX_LINE_REDUCTION": 11,
            "X_WING": 11,
            "SWORDFISH": 11,
            "SINGLES_CHAINING": 11
        }
    };

    static activePuzzle2Response = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle2,
        "currentTime": 255,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle2Move1,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes1,
            "_id": "ID"
        },{
            "puzzleCurrentState": postTestData.puzzle2Move2,
            "puzzleCurrentNotesState": postTestData.puzzle2Notes2,
            "_id": "ID"
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 11,
            "HIDDEN_SINGLE": 11,
            "NAKED_PAIR": 11,
            "NAKED_TRIPLET": 11,
            "NAKED_QUADRUPLET": 11,
            "NAKED_QUINTUPLET": 11,
            "NAKED_SEXTUPLET": 11,
            "NAKED_SEPTUPLET": 11,
            "NAKED_OCTUPLET": 11,
            "HIDDEN_PAIR": 11,
            "HIDDEN_TRIPLET": 11,
            "HIDDEN_QUADRUPLET": 11,
            "HIDDEN_QUINTUPLET": 11,
            "HIDDEN_SEXTUPLET": 11,
            "HIDDEN_SEPTUPLET": 11,
            "HIDDEN_OCTUPLET": 11,
            "POINTING_PAIR": 11,
            "POINTING_TRIPLET": 11,
            "BOX_LINE_REDUCTION": 11,
            "X_WING": 11,
            "SWORDFISH": 11,
            "SINGLES_CHAINING": 11
        },
        "_id": "ID",
        "__v": 0
    };

    static activePuzzle3 = {
        "userID": "Daniel",
        "puzzle": postTestData.puzzle3,
        "currentTime": 500,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle3Move1,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes1
        },{
            "puzzleCurrentState": postTestData.puzzle3Move2,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes2
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 5,
            "HIDDEN_SINGLE": 2,
            "POINTING_PAIR": 0,
            "POINTING_TRIPLET": 4,
            "BOX_LINE_REDUCTION": 7,
            "X_WING": 6,
            "SWORDFISH": 3,
            "SINGLES_CHAINING": 3
        }
    };

    static activePuzzle3Response = {
        "userID": "Daniel",
        "puzzle": postTestData.puzzle3,
        "currentTime": 500,
        "moves": [{
            "puzzleCurrentState": postTestData.puzzle3Move1,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes1,
            "_id": "ID"
        },{
            "puzzleCurrentState": postTestData.puzzle3Move2,
            "puzzleCurrentNotesState": postTestData.puzzle3Notes2,
            "_id": "ID"
        }],
        "numHintsAskedFor": 2,
        "numWrongCellsPlayed": 2,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": 5,
            "HIDDEN_SINGLE": 2,
            "POINTING_PAIR": 0,
            "POINTING_TRIPLET": 4,
            "BOX_LINE_REDUCTION": 7,
            "X_WING": 6,
            "SWORDFISH": 3,
            "SINGLES_CHAINING": 3
        },
        "_id": "ID",
        "__v": 0
    };

    /*
     * Invalid Active Puzzles
     */

    static userIDNotPresent = {
        "puzzle": postTestData.puzzle1,
    };

    static userIDBlank = {
        "userID": "",
        "puzzle": postTestData.puzzle1,
    };

    static userIDIsInt = {
        "userID": 5,
        "puzzle": postTestData.puzzle1,
    };

    static puzzleNotPresent = {
        "userID": "Thomas",
    };

    static puzzleBlank = {
        "userID": "Thomas",
        "puzzle": "",
    };

    static puzzleIsTooLong = {
        "userID": "Thomas",
        "puzzle": "3310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static puzzleIsTooShort = {
        "userID": "Thomas",
        "puzzle": "10084002200150006570003010423708095760030000009562030050006070007000900000001500",
    };

    static puzzleHasInvalidCharacter = {
        "userID": "Thomas",
        "puzzle": "3100840022001500065700030/0423708095760030000009562030050006070007000900000001500",
    };

    static currentTimeIsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "currentTime": "Banana"
    };

    static puzzleCurrentStateIsTooLong = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentState": "3310084002200150006570003010423708095760030000009562030050006070007000900000001500"
        }]
    };

    static puzzleCurrentStateIsTooShort = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentState": "10084002200150006570003010423708095760030000009562030050006070007000900000001500"
        }]
    };

    static puzzleCurrentStateHasInvalidCharacter = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentState": "3100840022001500065700030/0423708095760030000009562030050006070007000900000001500"
        }]
    };

    static puzzleCurrentNotesStateIsTooLong = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentNotesState": "0100000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001",
        }]
    };

    static puzzleCurrentNotesStateIsTooShort = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentNotesState": "00000010010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001",
        }]
    };

    static puzzleCurrentNotesStateHasInvalidCharacter = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "moves": [{
            "puzzleCurrentNotesState": "10000001/010101011111111111111111111111100000000000000000000000000000000001111111111111111000000000000000000001111111111111110000000000000000000111111111111110000000000000000000000000000001111111111111111100000000000000010000001001010101111111111111111111111110000000000000000000000000000000000111111111111111100000000000000000000111111111111111000000000000000000011111111111111000000000000000000000000000000111111111111111110000000000000001000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000100000010010101011111111111111111111111100000000000000000000000000001",
        }]
    };

    static numHintsAskedForIsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numHintsAskedFor": "Banana"
    };

    static numWrongCellsPlayedIsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayed": "Banana"
    };

    static NAKED_SINGLE_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SINGLE": "B"
        }
    };

    static HIDDEN_SINGLE_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_SINGLE": "B"
        }
    };

    static NAKED_PAIR_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_PAIR": "B"
        }
    };

    static NAKED_TRIPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_TRIPLET": "B"
        }
    };

    static NAKED_QUADRUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_QUADRUPLET": "B"
        }
    };

    static NAKED_QUINTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_QUINTUPLET": "B"
        }
    };
    static NAKED_SEXTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SEXTUPLET": "B"
        }
    };

    static NAKED_SEPTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_SEPTUPLET": "B"
        }
    };

    static NAKED_OCTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "NAKED_OCTUPLET": "B"
        }
    };

    static HIDDEN_PAIR_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_PAIR": "B"
        }
    };

    static HIDDEN_TRIPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_TRIPLET": "B"
        }
    };

    static HIDDEN_QUADRUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_QUADRUPLET": "B"
        }
    };

    static HIDDEN_QUINTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_QUINTUPLET": "B"
        }
    };

    static HIDDEN_SEXTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_SEXTUPLET": "B"
        }
    };

    static HIDDEN_SEPTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_SEPTUPLET": "B"
        }
    };

    static HIDDEN_OCTUPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "HIDDEN_OCTUPLET": "B"
        }
    };

    static POINTING_PAIR_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "POINTING_PAIR": "B"
        }
    };

    static POINTING_TRIPLET_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "POINTING_TRIPLET": "B"
        }
    };

    static BOX_LINE_REDUCTION_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "BOX_LINE_REDUCTION": "B"
        }
    };

    static X_WING_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "X_WING": "B"
        }
    };

    static SWORDFISH_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "SWORDFISH": "B"
        }
    };

    static SINGLES_CHAINING_IsNotInteger = {
        "userID": "Thomas",
        "puzzle": postTestData.puzzle1,
        "numWrongCellsPlayedPerStrategy": {
            "SINGLES_CHAINING": "B"
        }
    };
}

export { postTestData };


