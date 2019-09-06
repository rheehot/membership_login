const userDB = {
    admin: {
        id: 'admin',
        pw: 'admin',
        name: '관리자',
        birth: '1996/9/17',
        gender: '여자',
        email: 'admin@admin.com',
        phone: '01095313051',
        interest: '안녕,난,관리자'
    },

    hzoou: {
        id: 'hzoou',
        pw: '12345',
        name: '혜주',
        birth: '1996/9/17',
        gender: '여자',
        email: 'hzoou@naver.com',
        phone: '01095313051',
        interest: '안녕,난,혜주'
    }
};

const insertUser = (id, info) => {
    userDB[id] = info;
    return userDB[id];
};

const haveId = (id) => { return (!!userDB[id]) };

const isCorrectPw = (id, pw) => { return userDB[id].pw === pw };

module.exports = { insertUser, haveId, isCorrectPw } ;