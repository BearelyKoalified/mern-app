import uuid from "uuid";
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "../actions/types";
import { defaultCipherList } from "constants";

const initialState = {
  items: [
    { id: uuid(), name: "Code More" },
    { id: uuid(), name: "Code More Again" },
    { id: uuid(), name: "Code More Forever" },
    { id: uuid(), name: "Something Else" }
  ]
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
