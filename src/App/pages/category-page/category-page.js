import Service from "../../Service/service";
import CardProduct from "../../UI/card-product/card-product";
import { useEffect } from "react";
import "./category-page.scss"


const CategoryPage = ({typeTechnic}) => {
// typeTechnic - обязательный параметр,передается в виде строки

    const service = new Service();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const showCategoryList = service.getTargetTechnic(typeTechnic).map(item => {
        return <CardProduct 
                    image={item[1].image} 
                    title={item[1].name} 
                    price={item[1].price}
                    salePrice={item[1].salePrice}
                    color={item[1].color}
                    memory={item[1].memory} 
                    key={item[1].id}
                    item={item}
                />
    });

    return (
        <div className="grid-container">
            {showCategoryList}
        </div>
    );
}

export default CategoryPage;