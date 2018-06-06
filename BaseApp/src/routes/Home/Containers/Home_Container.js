import {connect} from "react-redux";
import Home from "../Components/Home";
import {setName} from "../Modules/home";

const mapStateToProps =(state) =>({

    name: state.home.name
});

const mapActionCreators ={
    setName
};
export default connect(mapStateToProps,mapActionCreators)(Home);