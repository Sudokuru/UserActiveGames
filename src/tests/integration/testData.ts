
/*
 * JSON Expected Error Responses
 */

export const ErrorMessage400 = {
    Error_Message: 'Invalid Request',
    Status: 400
};

export const ErrorMessage401 = {
    Error_Message: 'Invalid Permission',
    Status: 401
};

export const ErrorMessage500 = {
    Error_Message: 'Invalid Permission',
    Status: 401
};

export const activePuzzle1 = {
    "userID": "Thomas",
    "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    "currentTime": 100,
    "moves": [{
        "puzzleCurrentState": "316084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "puzzleCurrentNotesState": "000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000"
    }],
    "numHintsAskedFor": 3,
    "numWrongCellsPlayed": 1
};

export const activePuzzle1Response = {
    "userID": "Thomas",
    "puzzle": "310084002200150006570003010423708095760030000009562030050006070007000900000001500",
    "currentTime": 100,
    "moves": [{
        "puzzleCurrentState": "316084002200150006570003010423708095760030000009562030050006070007000900000001500",
        "puzzleCurrentNotesState": "000000100101010111111111111111111111111000000000000000000000000000000000011111111111111110000000000000000000011111111111111100000000000000000001111111111111100000000000000000000000000000011111111111111111000000000000000",
        "_id": "ID"
    }],
    "numHintsAskedFor": 3,
    "numWrongCellsPlayed": 1,
    "_id": "ID",
    "__v": 0
};



