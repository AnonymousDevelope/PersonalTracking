const index = ({children,className, ...props}) => {
  return (
    <div className={"block px-4 py-3 bg-primary-dark-custom w-fit shadow-lg rounded-md "+className} {...props}>
        {children}
    </div>
  )
}

export default index