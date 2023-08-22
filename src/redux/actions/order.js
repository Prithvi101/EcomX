import { toast } from "react-toastify";

export const placeSingleProductOrderHandler = (product_id, address) => async (dispatch) => {
    try {
        if(!address){
            dispatch({
                type: "placeOrderFailed",
                payload: "Please Add the address",
              })

              toast.error("Please Enter the valid address")
             

    return;
        }



      dispatch({ type: "placeOrderRequest" });
      const res = await fetch(
        `${process.env.REACT_APP_SERVER}/single-product-order`, 
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({product_id, address}),
            credentials:"include"
         
          }
      );
      const data = await res.json();
  
      if (data.success) {
        dispatch({
          type: "placeOrderSuccess",
            
        })

        toast.success("Order placed successfully")
      }else{
        dispatch({
            type: "placeOrderFailed",
           
          })

          toast.error(data.message)

      }


     
    } catch (error) {
      toast.error("Something went wrong ")
      console.log(error);
      dispatch({
        type: "placeOrderFailed",
        
      });

    
    }
  };


  export const placeCartOrderHandler =  (data, address) =>  async (dispatch)=> {
    try {
      if(!address){
          dispatch({
              type: "placeOrderFailed",
              payload: "Please Add the address",
            })

            toast.error("Please Enter the valid address")
           

  return;
      }



    dispatch({ type: "placeOrderRequest" });
    const res = await fetch(
      `${process.env.REACT_APP_SERVER}/cart-product-order`, 
      {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({data, address}),
          credentials:"include"
       
        }
    );
    const result = await res.json();

    if (result.success) {
      dispatch({
        type: "placeOrderSuccess",
          
      })

      toast.success("Order placed successfully")
    }else{
      dispatch({
          type: "placeOrderFailed",
         
        })

        toast.error(result.message)

    }


   
  } catch (error) {
    toast.error("Something went wrong ")
    console.log(error);
    dispatch({
      type: "placeOrderFailed",
      
    });

  
  }
  }