const Validation = (newPass) => {
    let errors = {};
    if (!newPass) {
        errors = "password is required";
    } else if (newPass.length < 5) {
        errors = "password should be more than five characters.";
    }
    return errors;
};
export default Validation;