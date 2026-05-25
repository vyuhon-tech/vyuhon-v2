export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-[1200px] mx-auto px-10 max-sm:px-5 ${className}`}>
      {children}
    </div>
  )
}
