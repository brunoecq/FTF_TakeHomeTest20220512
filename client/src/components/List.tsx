import Card from "./Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IData } from '../types'
import {
  getPendingSelector,
  getDataSelector,
  getErrorSelector
} from "../store/data/selectors";
import { fetchDataRequest } from "../store/data/actions";

const List = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const list: IData[] = useSelector(getDataSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  return (
    <div style={{ padding: "15px" }}>
      <button onClick={()=> dispatch(fetchDataRequest())} type="button" className="mt-2 mb-2 w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
        Reload
      </button>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        list.map((item: IData, index: number) => (
          <div style={{ marginBottom: "10px" }} key={item.sha}>
            <Card item={item} index={index} />
          </div>
        ))
      )}
    </div>
  );
};

export default List;
