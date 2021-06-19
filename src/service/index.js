import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://testbackendsap.herokuapp.com/api/'
})

const UserServices = {
    getUsers: function(){
        return instance.get('getusers').then(res => res.data);
    },

    saveUsers: function(data){
        return instance.post('saveuser',data).then(res => res.data);
    }
}



export default UserServices;


