import React from "react";

const Counter = ({digitOne, digitTwo, digitThree, digitFour}) => {

    // let number = toString(123);
    // const number = [0,1,2,3,4,5,6,7,8,9];
    // setInterval(myTimer, 1000);
    return (
        <div className ='bigCounter bg-black'>

            <div className='clock'>

            </div>
            <div className='hundredThousands'>{digitFour}</div>
            <div className='tenThousands'>{digitThree}</div>
            <div className='thousands'>{digitTwo}</div>
            <div className='tens'>{digitOne}</div>
        </div>
    );
}

export default Counter;

// let number = 123

// convert to string

// Then access 1st, 2nd, and third digit like an array

