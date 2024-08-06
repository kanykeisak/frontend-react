import React from 'react';
import Header from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import User from "../../components/user/User";
import Course from "../../components/course/Course";
import Month from "../../components/month/Month";


const MainPage = () => {
    return (
        <div>
            <Header/>
            <Footer/>
            <Button title={'Close'} name={'Kanykei'}/>
            <Button title={'Open'} name={'Kanykei'}/>
            <Button title={'Save'} name={'Kanykei'}/>
            <Button title={'Delete'} name={'Kanykei'}/>
            <Button title={'Done'} name={'Kanykei'}/>
            <User name={'Kanykei'} age={'20'}/>
            <Course title={'JS'} language={'english'}/>
            <Month date={'1'}/>
            <Input pleceholder={'Введите текст'}/>
        </div>
    );
};

export default MainPage;

const sum = (a,b) => {
    return a+b
}

console.log(sum(5, 6))
