import axios from '../utils/axiosCustomize';
const postCreateNewUser = (email, Password, username, role, image) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', Password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', image);
    return axios.post('api/v1/participant', form)
}
const getAllUsers = () => {
    return axios.get('api/v1/participant/all')
}
export { postCreateNewUser, getAllUsers }