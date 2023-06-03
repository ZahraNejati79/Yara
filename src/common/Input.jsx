const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className="gap-2 flex flex-col items-start justify-center ">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className="outline-none w-72 md:w-96 bg-gray-50  border border-borderColor text-textPrimary text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
        // value={formik.values.firstName}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps(name)}
        type={type}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-xs text-error ">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
