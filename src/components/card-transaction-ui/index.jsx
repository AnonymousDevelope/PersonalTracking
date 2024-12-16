// eslint-disable-next-line react/prop-types
const Index = ({ children, className,classNameParent, title, ...props }) => {
  return (
    <div className={"block px-4 py-3 bg-primary-dark-custom shadow-lg rounded-md "+classNameParent} {...props}>
      {title && <div className="title text-start italic font-bold">
        {title}
      </div>
      }
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

export default Index