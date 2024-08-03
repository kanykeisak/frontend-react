import React from 'react';
import Day from "../day/Day";
import Time from "../time/Time";

const Month = ({date}) => {
    return (
        <div>
            <p>Завтра будет {date}</p>
            <Day week_day={'четверг'}/>
            <Time time_now={'14-05'}/>
        </div>
    );
};

export default Month;