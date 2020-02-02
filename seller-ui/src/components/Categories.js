import React,{Component} from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {NavLink,withRouter} from 'react-router-dom';
// importing actions
import {
    getAllCategories,
    selectCategory,
} from '../Redux/Category/Category.actions';

// importing selectors
import {
    selectCategoryList,
    selectCategoryListError,
    selectLoadingCategoryList,
    selectSelectedCategory,

} from '../Redux/Category/Category.selectors';

class Categories extends Component{

    componentDidMount = ()=>{
        const {getAllCategories} = this.props;
        getAllCategories();
    }

    render=()=>{

        const {
            categories,
            loading,
            error,

            selectCategory,
            selected,

            match,

        } = this.props;
        if(loading){
            return(
                <div className="loader">
                    <Loader
                        type="Oval"
                        color="#610345"
                        height={100}
                        width={100}
                        timeout={8000} //3 secs

                    />
                </div>
            )
        }
        return(
            <div className="category-list">
                <h1>Select A Category</h1>
                <div className='list'>
                    {categories && categories.map((category,i)=>{
                        return(
                            <div className="single-category" key={i} onClick={()=>selectCategory(category)}>
                                <img src={category.cover_image} alt=""/>
                                <div className="info">
                                    <h3>{category.name}</h3>
                                    {   
                                        selected &&
                                        selected.id === category.id
                                        && <p>
                                            Selected
                                        </p>    
                                    }
                                </div>
                                
                            </div>
                        )
                    })}
                    
                    {
                        selected && 
                        <NavLink to={`${match.path}/companies`} className="next-btn">Next &rarr;</NavLink>
                    }
                    
                </div>
                
                {
                    error &&
                    <div className="server-error">
                        {error}
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state =>({
    categories : selectCategoryList(state),
    loading : selectLoadingCategoryList(state),
    error : selectCategoryListError(state),
    selected : selectSelectedCategory(state),
})

const mapDispatchToProps = dispatch =>({
    getAllCategories : ()=>dispatch(getAllCategories()),
    selectCategory : (category)=>dispatch(selectCategory(category)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,

)(Categories));