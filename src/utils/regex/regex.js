const regex = {
    firstName: /^[a-z ,.'-]+$/i,
    lastName: /^[a-z ,.'-]+$/i,
    phone: /\d{8}/,
    email: /^\S+@\S+\.\S+$/
}
    
export default {
    regex: regex  
}
