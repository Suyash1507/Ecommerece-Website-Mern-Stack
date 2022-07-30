import axios from "axios";
export const getAllProducts=()=>(dispatch)=>{
    dispatch({ type: "GET_PRODUCTS_REQUEST" }); //when this function is called the action that is going to dispatches is get product success

  axios.get("/api/products/getallproducts").then((res) => {
      console.log(res);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: res.data });//if the request is success  get products success is dispatched
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: err });
    });
};

export const getProductById = (productid) => (dispatch) => {
    dispatch({ type: "GET_PRODUCTBYID_REQUEST" });
  
    axios
      .post("/api/products/getproductbyid", { productid })
      .then((res) => {
        console.log(res);
  
        dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: err });
      });
  };

  export const filterProducts=(searchKey , sortKey , category)=>dispatch=>{ //filtering logic


    var filteredproducts ;
    dispatch({type:'GET_PRODUCTS_REQUEST'})

    axios.get('/api/products/getallproducts').then(res=>{

        filteredproducts = res.data      

        if(searchKey)
        {
             filteredproducts = res.data.filter(product => {return product.name.toLowerCase().includes(searchKey)})
        }

        if(sortKey !=='popular')
        {
            if(sortKey==='htl')
            {
                filteredproducts = res.data.sort((a,b)=>{
                   
                    return -a.price + b.price

                })
            }
            else{
                filteredproducts = res.data.sort((a,b)=>{
                   
                    return a.price - b.price

                })

            }
        }

        if(category!=='all')
        {
            filteredproducts = res.data.filter(product =>{return product.category.toLowerCase().includes(category)})
        }

        dispatch({type:'GET_PRODUCTS_SUCCESS' , payload : filteredproducts})



    }).catch(err=>{
        dispatch({type:'GET_PRODUCTS_FAILED'})
    })


}
export const addProductReview = (review , productid)=>(dispatch , getState)=>{
    
    dispatch({type:'ADD_PRODUCT_REVIEW_REQUEST'})
    const currentUser = getState().loginReducer.currentUser
    axios.post('/api/products/addreview' , {review , productid , currentUser}).then(res=>{
      console.log(res);
      dispatch({type:'ADD_PRODUCT_REVIEW_SUCCESS'})
      alert('Your review submitted successfully')
      window.location.reload()
  
    }).catch(err=>{
      dispatch({type:'ADD_PRODUCT_REVIEW_FAILED'})
  
    })
  
  
  }
//Here we are using redux to get the data from backend