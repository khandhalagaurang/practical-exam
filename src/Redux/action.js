export const ADD = (payload) => {
    return {
        type: "ADD",
        payload: payload,
    }
}

export const DELETE = (payload) => {
    return {
        type: "DELETE",
        payload: payload,
    }
}

export const EDIT = (payload) => {
    return {
        type: "EDIT",
        payload: payload,
    }
}