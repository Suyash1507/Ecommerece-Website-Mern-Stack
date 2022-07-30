import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../actions/productAction";
// import { filterProducts } from "../actions/productActions";

function Filter() {
    const [searchkey, setsearchkey] = useState("");
    const [sort, setsort] = useState("popular");
    const [category, setcategory] = useState("all");
    const dispatch = useDispatch();
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-3 mt-2 ml-2">
                    <input type="text" placeholder='Search Products' className='form-control' value={searchkey}
                        onChange={(e) => {
                            setsearchkey(e.target.value);
                        }} />
                </div>
                <div className="col-md-2 mt-4 ml-2"
                    value={sort}
                    onChange={(e) => {
                        setsort(e.target.value);
                    }}>
                    <select className='form-control'>
                        <option value="popular">All</option>
                        <option value="Htl">High to Low</option>
                        <option value="lth">Low to High</option>
                    </select>
                </div>
                <div className="col-md-2 mt-4 ml-2" value={category}
                    onChange={(e) => {
                        setcategory(e.target.value);
                    }}>
                    <select className='form-control'>
                        <option value="all">All</option>
                        <option value="electronics">Elecronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="mobiles">Mobiles</option>
                        <option value="games">Games</option>
                    </select>
                </div>
                <div className="col-m-2 mt-4 ml-2">
                    <button className='btn' onClick={()=>{dispatch(filterProducts(searchkey, sort, category))}}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
