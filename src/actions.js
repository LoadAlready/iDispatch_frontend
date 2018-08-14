export let toggleLoginAction = () => {
   return {
       type: 'TOGGLELOGIN'
   }
}

export let setUser = (user) => {
    return {
        type: 'SETUSER',
        payload: {userInfo: user}
    }
}

export let setCurrentlySelectedJob = (job) => {
    return {
        type: 'SETCURRENTJOB',
        payload: {currentlySelectedJob: job}
    }
}
