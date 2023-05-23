import React, {useState} from 'react';

const NickName = (props) => {

    // useState 훅은 배열을 리턴하는데
    // 0번에는 상태변수값, 1번에는 상태변수값을 변경하는 setter 함수가 들어있음
    const [nickName, setNickName] = useState('김철수');

    const changeNickName = e => {
        setNickName('척척박사');
    }

    return (
        <>
            <h1>Hello~~~{nickName}</h1>
            <button className='btn' onClick={changeNickName}>척척박사</button>
            <button className='btn' onClick={() => setNickName('척척석사')}>척척석사</button>
        </>
    );
}

export default NickName;