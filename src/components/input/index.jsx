/* eslint-disable react/prop-types */
function Index({ value,className,...props }) {
    return (
      <div className="input flex justify-center w-full items-center  bg-primary-dark-custom rounded-md">
        <input
          value={value}
          {...props}
          className={"border-0 outline-none rounded-lg px-5 py-3 text-light-custom focus:outline-none bg-transparent  shadow-md "+className}
        />
      </div>
    );
  }
  
  export default Index;
  