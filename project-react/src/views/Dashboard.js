import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Contact from './Contact';
import Axios from 'axios';
import Navbar from '../compenent/Navbar';
import Footer from '../compenent/Footer';
import Home from './Home';
import Product from './Product';
import Card from './Card';






class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            redirect: false
        }
    }


    componentDidMount() {
        const jwt = localStorage.getItem('jwt');
        if (jwt === null) {
            this.setState({ redirect: true });

        } else {
            Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
            Axios.defaults.headers.common['Content-Type'] = `application/json`;
            const url = 'http://localhost:5000/user';
            Axios.get(url).then(res => {
                this.setState({ user: res.data });
            }).catch((e) => {
                console.log(e);
                localStorage.clear();
                this.setState({ redirect: true });
            });


        }

    }



    logOut = (e) => {
        e.preventDefault();
        localStorage.clear();
        
        this.setState({
          redirect: true
        })
      }
    



    render() {
        
        if (this.state.redirect) return <Redirect to='/account' />
        return (
            <Router>
                <Navbar logOutEvent={this.logOut} />
                <Switch>
                    <Route exact strict path='/'>
                        <Home />
                    </Route>
                    <Route exact strict path='/product'>
                        <Product />
                    </Route>
                    <Route exact strict path='/card'>
                        <Card />
                    </Route>
                    <Route exact strict path='/contact'>
                        <Contact />
                    </Route>
                </Switch>

                <Footer />
            </Router>

        );
    }





}



export default Dashboard;