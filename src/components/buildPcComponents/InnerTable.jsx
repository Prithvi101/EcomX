import React, { useContext, useMemo, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByBrand_idHandler,
  getProductBySubCategory_idHandler,
  openProductRowHandler,
  quantityDecreamenttHandler,
  quantityIncreamentHandler,
} from "../../redux/actions/buildpc";
import { AiFillSecurityScan, AiOutlineConsoleSql } from "react-icons/ai";
import { MyContext } from "../../myContext";
import Loading from "../loader/Loading";
import { CiNoWaitingSign } from "react-icons/ci";
import {
  brandOnChangeHandler,
  getBrandsByCategoryHandler,
  getSubCategories,
} from "../../redux/actions/filters/buildPCFilters";

export const InnerStaticRow = () => {
  return (
    <tr className="w-[100vw]">
      <td className="py-2 primary__column px-4 w-[10%] ">IMAGE</td>
      <td className="py-2 w-2/6 primary__column px-4 ">
        <div className="flex justify-center items-center h-full">
          PRODUCT NAME
        </div>
      </td>
      <td className="py-2 w-1/6 primary__column px-4 ">
        <div className="flex justify-center items-center h-full">MODEL</div>
      </td>
      <td className="py-2 w-1/6 primary__column  px-4 ">
        <div className="flex justify-center items-center h-full">
          UNIT PRICE
        </div>
      </td>
      <td className="py-2 w-1/6  primary__column px-4 ">
        <div className="flex justify-center items-center h-full">QUANTITY</div>
      </td>
      <td className="py-2 w-1/6 primary__column  px-4 ">
        <div className="flex justify-center items-center h-full">
          AVAIBILITY
        </div>
      </td>
      <td className="py-2 w-1/6 primary__column px-4  ">
        <div className="flex justify-center items-center h-full">ACTION</div>
      </td>
    </tr>
  );
};
const product = {
  name: "ASUS PRO",
  model: "332sfd3",
  price: 3242,
  available: true,
};

export const ProductRows = ({ product, addToList, categoryName }) => {
  const [counter, setCounter] = useState(1);

  const increamentHandler = () => {
    setCounter(counter + 1);
  };
  const decreasetHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <tr
      className={`w-[100vw] animate-expandRow  max-h-[1000px] transition-all duration-500 }`}
    >
      <td className="py-2 px-4 w-[10%] border border-black ">
        <img
          className="w-full"
          src={product.image1}
          alt="product"
          width={50}
          height={50}
        />
      </td>
      <td className="py-2 w-2/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.title}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.model}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.price}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          <span className="text-2xl mx-4" onClick={decreasetHandler}>
            -
          </span>
          <button className="bg-primary text-textColor px-2">{counter}</button>
          <span onClick={increamentHandler} className="mx-4 text-2xl">
            +
          </span>
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">YES</div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          <button
            className="bg-primary text-textColor px-2 text-sm py-1"
            onClick={() => {
              addToList(product, categoryName, counter);
            }}
          >
            Add to List
          </button>
        </div>
      </td>
    </tr>
  );
};
export const ProductSingleRow = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const increamentHandler = () => {
    setCounter(counter + 1);
  };
  const decreasetHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <tr
      className={`w-[100vw] animate-expandRow  max-h-[1000px] transition-all duration-500 }`}
    >
      <td className="py-2 px-4 w-[10%] border border-black ">
        <img src={product.image1} alt="product" width={50} height={50} />
      </td>
      <td className="py-2 w-2/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.title}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.model}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.price}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          <span className="text-2xl mx-4" onClick={decreasetHandler}>
            -
          </span>
          <button className="bg-primary text-textColor px-2">{counter}</button>
          <span onClick={increamentHandler} className="mx-4 text-2xl">
            +
          </span>
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">YES</div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          <button className="bg-primary text-textColor px-2 text-sm py-1">
            close
          </button>
        </div>
      </td>
    </tr>
  );
};
export const SelectedProduct = ({
  product,
  categoryName,
  changeSelectedRow,
  setSubTotal,
}) => {
  const [counter, setCounter] = useState(product.quantity);

  const dispatch = useDispatch();
  const { subTotal } = useSelector((state) => state.buildPC);
  const increamentHandler = () => {
    setCounter(counter + 1);

    dispatch(quantityIncreamentHandler(product));
  };

  const decreasetHandler = () => {
    if (counter > 1) {
      setCounter(counter - 1);

      dispatch(quantityDecreamenttHandler(product));
    }
  };

  useEffect(() => {
    upQuantity();
    downQuantity();
  }, [counter]);

  const upQuantity = () => {
    let data = localStorage.getItem("buildPC");
    data = JSON.parse(data);
    const updatedData = data.map((item, index) => {
      if (item.category === categoryName) {
        item.quantity = counter;
      }
      return item;
    });

    localStorage.setItem("buildPC", JSON.stringify(updatedData));
  };
  const downQuantity = () => {
    let data = localStorage.getItem("buildPC");
    data = JSON.parse(data);
    const updatedData = data.map((item, index) => {
      if (item.category === categoryName) {
        item.quantity = counter;
      }
      return item;
    });

    localStorage.setItem("buildPC", JSON.stringify(updatedData));
  };
  return (
    <tr
      className={`w-[100vw] border  border-green animate-expandRow  max-h-[1000px] transition-all duration-500 }`}
    >
      <td className="py-2 px-4 w-[10%] border border-black ">{categoryName}</td>
      <td className="py-2 w-2/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.title}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.model}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          {product.price}
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          <span className="text-2xl mx-4" onClick={decreasetHandler}>
            -
          </span>
          <button className="bg-primary text-textColor px-2">{counter}</button>
          <span onClick={increamentHandler} className="mx-4 text-2xl">
            +
          </span>
        </div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">YES</div>
      </td>
      <td className="py-2 w-1/6 px-4 border border-black">
        <div className="flex justify-center items-center h-full">
          <button
            className="bg-primary text-textColor px-2 text-sm py-1"
            onClick={() => {
              changeSelectedRow(product, categoryName, counter);
            }}
          >
            Change
          </button>
        </div>
      </td>
    </tr>
  );
};

export const FilterRow = ({ product, categoryName }) => {
  // const { loading, setLoading } = useContext(MyContext)
  const { showProductTable, loading } = useSelector((state) => state.buildPC);
  const { subCategories, brands, selectedBrand } = useSelector(
    (state) => state.filter
  );
  const [key, setKey] = useState(null);
  const [selectBrand, setSelectBrand] = useState();

  const [selectSubCategory, setSelectSubCategory] = useState();
  const [brandsData, setBrandsData] = useState([]);
  const [subcategoryData, setSubCategoryData] = useState([]);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(getBrandsByCategoryHandler(categoryName));
    console.log(selectedBrand);
    setSelectBrand(e.target.value);

    setKey(Math.random());
  };
  const getProductBySubCategorr = (e) => {
    setSelectSubCategory(e.target.value);
    setKey(Math.random());
  };

  useEffect(() => {
    if (!selectBrand) {
      return;
    } else if (selectBrand == -1) {
      dispatch(openProductRowHandler(categoryName));
    } else {
      console.log(showProductTable[categoryName].data);
      dispatch(getProductByBrand_idHandler(categoryName, selectBrand));
    }
  }, [selectBrand]);

  useEffect(() => {
    if (!selectSubCategory) {
      return;
    } else if (selectSubCategory == -1) {
      dispatch(openProductRowHandler(categoryName));
    } else {
      dispatch(
        getProductBySubCategory_idHandler(categoryName, selectSubCategory)
      );
    }
  }, [selectSubCategory]);

  useEffect(() => {
    console.log("universal useffect");
    dispatch(getBrandsByCategoryHandler(categoryName));
    // if (product) {
    //   dispatch(getSubCategories(product.category_id));
    // }
  }, []);

  return (
    <tr className="w-[100vw]">
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <td className="py-2 secondary__column px-4 w-[10%] border border-black">
            <select
              onChange={onChangeHandler}
              value={selectBrand}
              className="bg-secondaryLight text-primary"
              name="character"
              id="character"
            >
              <option value={null}>Choose a Brand</option>
              {product &&
                brands.length > 0 &&
                brands.map((item, index) => {
                  return <option value={item.id}>{item.name}</option>;
                })}
              <option value={-1}>clear filter</option>
            </select>
          </td>
          <td className="py-2 secondary__column w-2/6 px-4 border border-black text-primary">
            <div className="flex justify-center items-center h-full">
              <select
                onChange={getProductBySubCategorr}
                value={subcategoryData[selectSubCategory]}
                className="bg-secondaryLight"
                name="character"
                id="character"
              >
                <option value="">Choose a Variant</option>
                {product &&
                  subCategories.length > 0 &&
                  subCategories.map((item, index) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.subcategory_name}
                      </option>
                    );
                  })}

                <option value={-1}>clear filter</option>
              </select>
            </div>
          </td>
          <td
            colSpan={4}
            className="py-2 secondary__column  px-4 border border-black"
          >
            <div className="flex w-full justify-center items-center h-full">
              <input
                className="w-full bg-secondaryLight text-primary border border-primary placeholder:text-sm"
                type="text"
                placeholder="Search Your Product"
              />
              <button className="mx-2 button__primaryHoversmall">Search</button>
            </div>
          </td>

          <td className="py-2 secondary__column w-1/6 px-4 border border-black">
            <select
              name="character"
              className="bg-secondaryLight text-primary"
              id="character"
            >
              <option value="">Name (A-Z)</option>
              <option value="RHYZEN">Name (Z-A)</option>
              <option value="AMD">Price (Low to High)</option>
              <option value="AMD">Price (High to Low)</option>
            </select>
          </td>
        </>
      )}
    </tr>
  );
};
