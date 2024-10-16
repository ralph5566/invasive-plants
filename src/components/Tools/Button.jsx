const Button = ({ type = 'button', children, disabled, ...props }) => {
    return (
        <>
            <button
                type={type}
                className="duration-200 mr-2 cursor-pointer px-6 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-tahiti"
                disabled={disabled}
                {...props}
            >
                {children}
            </button>
        </>
    )
}

export default Button
