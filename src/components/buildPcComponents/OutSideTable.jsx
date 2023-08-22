import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import InnerTable, {
  FilterRow,
  InnerStaticRow,
  ProductRows,
  SelectedProduct,
} from "./InnerTable";
import { useContext } from "react";
import { MyContext } from "../../myContext";
import Loading from "../loader/Loading";
import { useDispatch, useSelector } from "react-redux";
import {
  addToListHandler,
  changeSelectedRowHandler,
  closeProductRowHandler,
  getProductByBrand_idHandler,
  openProductRowHandler,
} from "../../redux/actions/buildpc";
import { CiNoWaitingSign } from "react-icons/ci";
import {
  getBrandsByCategoryHandler,
  getSubCategories,
} from "../../redux/actions/filters/buildPCFilters";

const data = [
  {
    categoryName: "PROCESSOR",
  },
  {
    categoryName: "CPU",
  },
  {
    categoryName: "RAM",
  },
  {
    categoryName: "SSD",
  },
  {
    categoryName: "HDD",
  },
  {
    categoryName: "GRAPHIC_CARD",
  },
  {
    categoryName: "POWER_SUPPLY_UNIT",
  },
  {
    categoryName: "CABINET",
  },
  {
    categoryName: "MONITOR",
  },
  {
    categoryName: "KEYBOARD",
  },
  {
    categoryName: "MOUSE",
  },
  {
    categoryName: "MOUSEPAD",
  },
];

const OutSideTable = ({ setCardProduct, setSubTotal, subTotal }) => {
  const { showProductTable } = useSelector((state) => state.buildPC);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const { loading } = useContext(MyContext);
  const dispatch = useDispatch();
  const openProductRow = async (categoryName) => {
    dispatch(openProductRowHandler(categoryName));
  };
  const closeProductRow = async (categoryName) => {
    dispatch(closeProductRowHandler(categoryName));
  };

  const addToList = (product, categoryName, quantity) => {
    const newProduct = { ...product, quantity };
    dispatch(addToListHandler(newProduct, categoryName));
  };

  useEffect(() => {
    localStorage.setItem("buildPC", JSON.stringify(selectedProducts));
  }, [selectedProducts]);
  useEffect(() => {}, [showProductTable]);

  const changeSelectedRow = (product, categoryName, quantity) => {
    const newProduct = { ...product, quantity };
    dispatch(changeSelectedRowHandler(newProduct, categoryName));
  };

  return (
    <div className="w-full">
      {loading ? (
        <div className="flex justify-center">
          <Loading />{" "}
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="text-center ">
              <th className="py-2 primary__column px-4 w-[10%]">COMPONENT</th>
              <th colSpan={6} className="py-2 primary__column px-4 text-center">
                SELECTION
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Rows */}
            {data.map((item, index) =>
              showProductTable[item.categoryName].showSingleRow ? (
                <>
                  <SelectedProduct
                    key={index}
                    product={showProductTable[item.categoryName].singleRow}
                    categoryName={item.categoryName}
                    changeSelectedRow={changeSelectedRow}
                    subTotal={subTotal}
                  />
                </>
              ) : (
                <>
                  <tr key={index} className="w-[100vw]">
                    <td className="py-2 px-4  border border-black">
                      {item.categoryName}
                    </td>
                    <td
                      className="py-2 w-[100vw]  px-4  border border-black"
                      colSpan={6}
                    >
                      <div className="w-full flex justify-between items-center">
                        <h5>Choose Items</h5>
                        {showProductTable[item.categoryName].show ? (
                          <AiOutlineMinus
                            onClick={() => {
                              closeProductRow(item.categoryName);
                            }}
                          />
                        ) : (
                          <AiOutlinePlus
                            onClick={() => {
                              openProductRow(item.categoryName);
                            }}
                          />
                        )}
                      </div>
                    </td>
                  </tr>

                  {showProductTable[item.categoryName].show && (
                    <>
                      <FilterRow
                        product={showProductTable[item.categoryName].data[0]}
                        categoryName={item.categoryName}
                      />
                      <InnerStaticRow />
                      {showProductTable[item.categoryName].data.length > 0 ? (
                        showProductTable[item.categoryName].data.map(
                          (element, elementIndex) => {
                            return (
                              <ProductRows
                                key={elementIndex}
                                product={element}
                                show={true}
                                addToList={addToList}
                                categoryName={item.categoryName}
                              />
                            );
                          }
                        )
                      ) : (
                        <tr>
                          <td colSpan={7}>
                            <h5 className="text-center w-full">
                              No Product found
                            </h5>
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OutSideTable;
