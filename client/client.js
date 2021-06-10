const getId =  async ()=> {
    let data = await window.OneSignal.getUserId()
    console.log(data)
}