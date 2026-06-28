type Box = {
    id?: number;
    key?: boolean;
    child?: Box;
}

function searchForTheKey(boxes: Box): boolean {
    if (boxes.key) {
        console.log(`The key is in the box - id: ${boxes.id}`);
        return true;
    }

    for (const box of Object.values(boxes)) {
        if (typeof box === "object" &&  box !== null) {
            if (searchForTheKey(box))
                return true;
        }
    }
    return false;
}

const boxes: Box = {
    id: 1,
    child: {
        id: 2,
        child: {
            id: 3,
            child: {
                id: 4,
                child: {
                    id: 5,
                    child: {
                        id: 6,
                        child: {
                            id: 7,
                            child: {
                                id: 8,
                                child: {
                                    id: 9,
                                    child: {
                                        id: 10,
                                        key: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const boxes2: Box = {
    id: 1,
    child: {
        id: 2,
        child: {
            id: 3,
            child: {
                id: 4,
                child: {
                    id: 5,
                    child: {
                        id: 6,
                        child: {
                            id: 7,
                            child: {
                                id: 8,
                                child: {
                                    id: 9,
                                    child: {
                                        id: 10
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


if (!searchForTheKey(boxes))
    console.log("The key was not found!");
if (!searchForTheKey(boxes2))
    console.log("The key was not found!");
