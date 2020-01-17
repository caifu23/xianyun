// state用于存放sotre/user用户数据
export const state = {
    // 采用接口返回的数据
    userInfo: {
        
    }
}


// mutations 用户存储  修改 state的方法
export const mutations = {
    // 保存用户信息到 userInfo 
    setUserInfo(state, data) {
        state.userInfo = data
    }
}

export const actions = {
    // 登录
    login({commit}, data){
        return this.$axios({
            url: '/accounts/login',
            method: 'post',
            data
        }).then(res => {
            const data = res.data
            // 保存到 state
            commit('setUserInfo', data)
            return data
        })
    }
}
