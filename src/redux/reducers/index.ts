import { api } from "@/data/client/api";
import headerReducer from "@/redux/reducers/header";
import popUpReducer from "@/redux/reducers/pop-ups";
import initialPageReducer from "@/redux/reducers/initial-page";

const reducers = {
  [api.reducerPath]: api.reducer,
  header: headerReducer,
  popUps: popUpReducer,
  initialPage: initialPageReducer,
};

export default reducers;
