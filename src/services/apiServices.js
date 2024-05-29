import axios from '../utils/axiosCustomize';
const postCreateNewUser = (email, Password, username, role, img) => {
    const form = new FormData();
    form.append('email', email);
    form.append('password', Password);
    form.append('username', username);
    form.append('role', role);
    form.append('userImage', img);
    return axios.post('api/v1/participant', form)
}
export { postCreateNewUser }