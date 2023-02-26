
export const expiredAccessToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InhoSldIRklrSWJuYlZWRGtOclY5MSJ9.eyJpc3MiOiJodHRwczovL2Rldi0yYTJjZngwN2kwanc2amdqLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJhdXRoMHw2Mzk0NDBjOGYyOTA2Nzc1MDc5YzcyNTQiLCJhdWQiOiJCYWNrZW5kRGV2IiwiaWF0IjoxNjc3Mzg2NzM2LCJleHAiOjE2Nzc0NzMxMzYsImF6cCI6ImhPSUdJa05FRlF3TFBtOTRYb0tSeWtPRGZCQUY0dTNGIiwic2NvcGUiOiJjcmVhdGU6c3Vkb2t1X3B1enpsZSB1cGRhdGU6c3Vkb2t1X3B1enpsZSBkZWxldGU6c3Vkb2t1X3B1enpsZSIsImd0eSI6InBhc3N3b3JkIiwicGVybWlzc2lvbnMiOlsiY3JlYXRlOnN1ZG9rdV9wdXp6bGUiLCJkZWxldGU6c3Vkb2t1X3B1enpsZSIsInVwZGF0ZTpzdWRva3VfcHV6emxlIl19.AGa61NnI_hmpBNhRt2qbmpAGxCFd8Cpm6k0IqVyuwxfQwaOV-1uKDO5yC6sl_ahl_rjM_0fTRBo2nVwyxrv1VDbF75piY-EOVcq_-dUzRv5vkPg-3zfBIfNz8jmpD9SctOFUkRYyChYHxrUr0qcEldZgc2tyTs2oFoZV31izRHQXxQhuz9Jxoh9jbVIj091BMz91OT7wml3GlVptjWlgPBt_a3gd5Ag4uUANJsfR0waXmXorkTQE5QoGcfx9WmPYVC4whTV3KLjoQpRF5fwQW2GRic4I3Udkc8D62zrD-vAzpPd9MKMtjq5h9VwVUu_qfEFuoUTVdSCH8XlVhSGQnA';

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

/*
 * Valid active puzzles and corresponding responses
 */

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

export const activePuzzle2 = {

};

export const activePuzzle2Response = {

};



